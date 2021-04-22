from peewee import JOIN

from db.db_models import DB, FederatedInfo, FateSiteInfo, AccountInfo, ApplyInstitutionsInfo, FateUserInfo, ChangeLog
from entity.status_code import UserStatusCode
from entity.types import UserRole, IsValidType
from operation.db_operator import DBOperator


@DB.connection_context()
def get_home_site():
    feature_store_infos = FederatedInfo.select(FederatedInfo.federated_id,
                                               FederatedInfo.federated_organization,
                                               FederatedInfo.institutions,
                                               FateSiteInfo.institutions.alias('fate_manager_institution'),
                                               FederatedInfo.federated_url,
                                               FederatedInfo.create_time,
                                               FateSiteInfo.service_status,
                                               FateSiteInfo.site_id,
                                               FateSiteInfo.party_id,
                                               FateSiteInfo.site_name,
                                               FateSiteInfo.role,
                                               FateSiteInfo.status,
                                               FateSiteInfo.activation_time,
                                               FateSiteInfo.app_key,
                                               FateSiteInfo.app_secret,
                                               FateSiteInfo.fate_version,
                                               FateSiteInfo.fate_serving_version,
                                               FateSiteInfo.component_version
                                               ).join(FateSiteInfo, join_type=JOIN.LEFT_OUTER,
                                                      on=(FederatedInfo.federated_id == FateSiteInfo.federated_id)).where(FederatedInfo.status==1)
    return [feature_store_info for feature_store_info in feature_store_infos]


@DB.connection_context()
def get_no_deal_list():
    change_log_list = ChangeLog.select(ChangeLog.federated_id, ChangeLog.party_id, FateSiteInfo.app_key,
                                       ChangeLog.case_id, FateSiteInfo.app_secret, ChangeLog.status,
                                       FateSiteInfo.role, ChangeLog.network_access_entrances,
                                       ChangeLog.network_access_exits).join(FateSiteInfo, join_type=JOIN.LEFT_OUTER,
                                                                            on=(
                                                                            ChangeLog.party_id == FateSiteInfo.party_id,
                                                                            ChangeLog.federated_id == FateSiteInfo.federated_id)).where(
        ChangeLog.status == 0)
    return [change_log for change_log in change_log_list]


@DB.connection_context()
def get_party_id_info(party_id):
    home_site_items = FederatedInfo.select(FederatedInfo.federated_id,
                                           FederatedInfo.federated_organization,
                                           FederatedInfo.institutions,
                                           FederatedInfo.federated_url,
                                           FederatedInfo.create_time,
                                           FateSiteInfo.party_id,
                                           FateSiteInfo.site_name,
                                           FateSiteInfo.role,
                                           FateSiteInfo.status,
                                           FateSiteInfo.activation_time,
                                           FateSiteInfo.app_key,
                                           FateSiteInfo.app_secret,
                                           FateSiteInfo.fate_version,
                                           FateSiteInfo.fate_serving_version).join(FateSiteInfo,
                                           on=(FederatedInfo.federated_id == FateSiteInfo.federated_id)).where(
                                              FederatedInfo.status == 1, FateSiteInfo.party_id == party_id)
    return [home_site_item for home_site_item in home_site_items]


def get_admin_info():
    accounts = DBOperator.query_entity(AccountInfo, role=UserRole.ADMIN, status=IsValidType.YES)
    if not accounts:
        raise Exception(UserStatusCode.NoFoundAccount, "no found account")
    return accounts[0]


def get_federated_info():
    federated_infos = DBOperator.query_entity(FederatedInfo, status=1)
    if not federated_infos:
        raise Exception(UserStatusCode.NoFoundFederated, "no found federated info by status:1")
    return federated_infos


def get_apply_institutions_info(status=None):
    if not status:
        apply_sites = DBOperator.query_entity(ApplyInstitutionsInfo, order_by="update_time", reverse=True)
    else:
        apply_sites = DBOperator.query_entity(ApplyInstitutionsInfo, status=status, order_by="update_time", reverse=True)
    return apply_sites


@DB.connection_context()
def update_apply_institutions_read_status(read_status, info):
    update_list = []
    apply_institutions_list = ApplyInstitutionsInfo.select().where(ApplyInstitutionsInfo.read_status == read_status)
    for institution_item in apply_institutions_list:
        institution_item.read_status = info.get("read_status", institution_item.status)
        institution_item.save(force_insert=False)
        update_list.append(institution_item.institutions)
    return update_list


@DB.connection_context()
def get_user_list(condition):
    user_list = FateUserInfo.select().where(FateUserInfo.user_name % "%{}%".format(condition))
    return [user for user in user_list]


@DB.connection_context()
def check_user(user_name):
    account_info_list = AccountInfo.select().where(AccountInfo.user_name == user_name, AccountInfo.status == 1,
                                                   AccountInfo.role in [1, 2])
    return [account_info for account_info in account_info_list]
