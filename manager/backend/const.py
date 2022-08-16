# common constants
# TODO: this may needs to pickup paths from conf
BASE_DIR = "/opt/seagate/halo"
BASE_ETC_DIR = "/etc/halo"

MGMT_PATH = BASE_DIR + "/management"
MGMT_ETC_DIR = BASE_ETC_DIR + "/management"

# CONSTANT
STRING_MAX_VALUE = 250
PATH_PREFIX_MAX_VALUE = 512
PORT_MIN_VALUE = 0
PORT_MAX_VALUE = 65536

# password validation
PASSWORD_SPECIAL_CHARACTER = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
                              "_", "+", "-", "=", "[", "]", "{", "}", "|", "'"]

# REST API Constants
MESSAGE_LITERAL = 'message'

# Error response constants
ERROR_CODE = "error_code"
MESSAGE_ID = "message_id"

UNKNOWN_ERROR = 'UnknownError'
HTTP_ERROR = 'HttpError'

# file operation constants
DEFAULT_SUPPORT_BUNDLE_ROOT = BASE_DIR + '/bundle'
MGMT_TEMP_PATH = MGMT_PATH + "/temp"
MGMT_AUDIT_LOG = MGMT_TEMP_PATH + "/audit_logs/"
MGMT_TMP_FILE_CACHE_DIR = MGMT_TEMP_PATH + "/file_cache/transfer"