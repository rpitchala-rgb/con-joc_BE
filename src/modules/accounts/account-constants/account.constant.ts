export const ACCOUNT = {
  DEFAULTS: {
    SECURITY_COMPLIANCE: 0,
    LOCAL_GMT: '-8.00',
    PRIMARY_DATA_CENTER: 'DT',
    AUDIO_FORMAT: 'MP3',
    ACCOUNT_TYPE: 'REGULAR',
    MULTI_PROCESS: 'N',
    MULTI_PROCESS_AUTO_DIAL: 'N',
    MIGRATION_MODE: '',
    TEST_ACCOUNT: 'N',
    BILLING_PRODUCTION: 'Y',
    IVA_MANAGED_SERVICE: 'N',
    EXTERNALLY_MANAGED_ACCOUNT: 'N',
    STATUS: 'NEW',
    TIER: 2,
    VOIP_PROVIDER_ENV: 'TRR_BETA',
    PASSWORD_COMPLEXITY: 4,
    VOSO_AI_CSM_ID: 0,
    REMOTE_SESSION: 'YES',
    PASSWORD_ALGO: 'sha256',
    FALLBACK_MEMBER_ID: 9999999,
  },

  JSON_SETTINGS: {
    ATTESTATION_LEVEL: 'attestation_level',
    ENABLE_PASSWORD_ROTATION: 'enable_password_rotation',
    ENABLE_CONTACT_EMAIL_VALIDATION: 'enable_contact_email_validation',
    ENABLE_MULTI_FACTORED_AUTHENTICATION:
      'enable_multi_factored_authentication',
    DEFAULT_FLAG: 'Y',
    TEST_ACCOUNT_ATTESTATION_LEVEL: 'C',
    DEFAULT_ATTESTATION_LEVEL: 'B',
  },

  TALKPRO_OBJECT_LIMITATIONS: {
    campaign: {
      default: 5,
      multiplier: 2,
      label: 'Campaign',
    },
    list: {
      default: 10,
      multiplier: 10,
      label: 'List',
    },
    queue: {
      default: 5,
      multiplier: 3,
      label: 'Queue',
    },
    pbx_queue: {
      default: 5,
      multiplier: 2,
      label: 'PBX Queue',
    },
    pbx_ringroup: {
      default: 5,
      multiplier: 2,
      label: 'PBX Ring Group',
    },
    pbx_ivr: {
      default: 5,
      multiplier: 2,
      label: 'PBX IVR',
    },
    pbx_conference: {
      default: 5,
      multiplier: 2,
      label: 'PBX Conference',
    },
    dnc_lead_capacity: {
      default: 1000000,
      multiplier: 40000,
      label: 'DNC Lead Capacity',
    },
    additional_channels: {
      default: 1,
      multiplier: 1.2,
      label: 'Additional Channels',
    },
    list_mix: {
      default: 0,
      multiplier: 0,
      label: 'List Mix',
    },
    user_capacity: {
      default: 400,
      multiplier: 0,
      label: 'User Capacity',
    },
  },

  STATUS: {
    NEW: 'NEW',
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    DEMO: 'DEMO',
    ACTIVE_DEMO: 'ACTIVE_DEMO',
    INACTIVE_DEMO: 'INACTIVE_DEMO',
    DELINQUENT: 'DELINQUENT',
    ACTIVE_OVERRIDE: 'ACTIVE_OVERRIDE',
    TEST_ACCOUNT: 'TEST_ACCOUNT',
    ACTIVE_TRIAL: 'ACTIVE_TRIAL',
    INACTIVE_TRIAL: 'INACTIVE_TRIAL',
    DELETED: 'DELETED',
    REJECTED: 'REJECTED',
    DELINQUENT_DEMO: 'DELINQUENT_DEMO',
  },

  ACCOUNT_TYPE: {
    REGULAR: 'REGULAR',
    DIVR: 'DIVR',
    VB: 'VB',
    RVM: 'RVM',
    RINGLESS_VOICEMAIL: 'Ringless Voicemail',
    CALL_CATALYST: 'CALL_CATALYST',
  },

  BILLING_SYSTEM: ['Zuora', 'ZuoraSandBox', 'BillingTest'],

  VAULT: {
    ACCOUNT_ID: 103045,
    CLUSTER: 17,
  },

  TRR_ENV: {
    DEV: 'TRR_DEV',
    STAGING: 'TRR_STAGING',
    PROD: 'TRR_PROD',
    BETA: 'TRR_BETA',
  },

  VOIP_PROVIDER: {
    TRR_DEV: 'TRR (Development)',
    TRR_STAGING: 'TRR (Staging)',
    TRR_PROD: 'TRR (Production)',
    TRR_BETA: 'TRR (Beta)',
    CYNERIC: 'Cyneric',
  },

  OPTIONS: {
    TRR_ENVIRONMENT: {
      TRR_DEV: 'TRR (Development)',
      TRR_STAGING: 'TRR (Staging)',
      TRR_PROD: 'TRR (Production)',
      TRR_BETA: 'TRR (Beta)',
    },

    OPERATORS: [
      { value: '=', name: '=' },
      { value: '!=', name: '!=' },
      { value: '>=', name: '>=' },
      { value: '<=', name: '<=' },
      { value: '>', name: '>' },
      { value: '<', name: '<' },
      { value: 'IN', name: 'In' },
    ],

    CLUSTER_NODE: {
      'mysqldb01-cluster05': 'Cluster 5',
      'mysqldb01-cluster07': 'Cluster 7',
      'mysqldb01-cluster08': 'Cluster 8',
      'mysqldb01-cluster09': 'Cluster 9',
      'mysqldb01-cluster10': 'Cluster 10',
      'mysqldb01-cluster11': 'Cluster 11',
      'mysqldb01-cluster12': 'Cluster 12',
      'mysqldb01-cluster13': 'Cluster 13',
    },

    BILLING_PRODUCTION: {
      N: 'No',
      Y: 'Yes',
    },

    TEST_ACCOUNT: {
      N: 'No',
      Y: 'Yes',
      A: 'Test Automation',
    },

    STATUS_OPTIONS: {
      NEW: 'New',
      ACTIVE: 'Active',
      INACTIVE: 'Inactive',
      DELETED: 'Deleted',
    },

    TIER: {
      1: 'Turnkey',
      2: 'Omni',
    },
  },

  DEFAULT_GMT: {
    '1.00': 'Central European',
    '2.00': 'Eastern European',
    '3.00': 'Baghdad',
    '4.00': 'Moscow, Russia',
    '5.00': 'Pakistan / Uzbekistan',
    '6.00': 'Bangladesh / Sri Lanka',
    '7.00': 'Cambodia / Vietnam',
    '8.00': 'China Coast',
    '9.00': 'Japan Standard',
    '10.00': 'Guam Standard',
    '11.00': 'Solomon Islands',
    '12.00': 'New Zealand Standard',
    '13.00': 'Samoa',
    '14.00': 'Kiribati',
    '0.00': 'Greenwich, England',
    '-1.00': 'SE Greenland',
    '-2.00': 'Atlantic Ocean',
    '-3.00': 'Greenland',
    '-4.00': 'Atlantic',
    '-5.00': 'Eastern',
    '-6.00': 'Central',
    '-7.00': 'Mountain',
    '-8.00': 'Pacific',
    '-9.00': 'Alaska',
    '-10.00': 'Hawaii',
    '-11.00': 'Pacific Asia',
    '-12.00': 'Midway, Midway Atoll',
    '-13.00': 'Honolulu, Hawaii',
  },

  COUNTRY: [
    { value: '1', name: 'United States' },
    { value: '44', name: 'United Kingdom' },
    { value: '61', name: 'Australia' },
  ],

  BILLING_PRODUCTION: {
    N: 'No',
    Y: 'Yes',
  },

  TEST_ACCOUNT: {
    N: 'No',
    Y: 'Yes',
    A: 'Test Automation',
  },

  TIER: {
    1: 'Turnkey',
    2: 'Omni',
  },

  MULTI_PROCESS: {
    N: 'No',
    Y: 'Yes',
  },

  MULTI_PROCESS_AUTO_DIAL: {
    N: 'No',
    Y: 'Yes',
  },

  SECURITY_COMPLIANCE: {
    0: 'No Restrictions',
    1: 'Listen to Audio Restriction',
  },

  EXTEND_DELINQUENT_PERIOD: {
    '1': '1 Day',
    '2': '2 Days',
    '3': '3 Days',
    '4': '4 Days',
    '5': '5 Days',
    '6': '6 Days',
    '7': '7 Days',
    '8': '8 Days',
    '9': '9 Days',
    '10': '10 Days',
    '11': '11 Days',
    '12': '12 Days',
    '13': '13 Days',
    '14': '14 Days',
  },

  DEFAULT_AUDIO_FORMAT: {
    MP3: 'MP3',
  },

  MIGRATION_MODE: {
    '': 'No',
    IVA: 'Yes',
  },

  IVA_MANAGED_SERVICE: {
    N: 'No',
    Y: 'Yes',
  },

  EXTERNALLY_MANAGED_ACCOUNT: {
    N: 'No',
    Y: 'Yes',
  },

  ACCOUNT_TYPE_OPTIONS: {
    REGILAR: 'Regular',
    DIVR: 'DIVR|VB|RVM',
    CALL_CATALYST: 'Call Catalyst',
  },

  // Full status options matching PHP $status_options
  FULL_STATUS_OPTIONS: {
    NEW: 'New',
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    DEMO: 'Demo',
    ACTIVE_DEMO: 'Active Demo',
    INACTIVE_DEMO: 'Inactive Demo',
    ACTIVE_TRIAL: 'Active Trial',
    INACTIVE_TRIAL: 'Inactive Trial',
    DELINQUENT: 'Delinquent',
    ACTIVE_OVERRIDE: 'Active Override',
    TEST_ACCOUNT: 'Test Account',
    DELETED: 'Deleted',
    DELINQUENT_DEMO: 'Delinquent Demo',
  },

  // Full account type options matching PHP $account_type_options
  FULL_ACCOUNT_TYPE_OPTIONS: {
    REGULAR: 'Regular',
    DIVR: 'DIVR|VB|RVM',
    CALL_CATALYST: 'Call Catalyst',
  },

  // Cluster server names matching PHP Constant::$cluster_server
  CLUSTER_SERVER: [
    'cluster_5',
    'cluster_7',
    'cluster_8',
    'cluster_9',
    'cluster_10',
    'cluster_11',
    'cluster_12',
    'cluster_13',
  ],

  FILTER_BY_LIST: [
    { value: 'id', name: 'Id', type: '1' },
    { value: 'name', name: 'Name', type: '1' },
    { value: 'company_name', name: 'Company Name', type: '1' },
    { value: 'status', name: 'Status', type: '2' },
    { value: 'billing_production', name: 'Billing', type: '2' },
    { value: 'cluster_node', name: 'Cluster', type: '2' },
    { value: 'tier', name: 'Platform', type: '2' },
    { value: 'license_seat_count', name: 'Active Seats', type: '1' },
    { value: 'client_tier', name: 'Customer Tier', type: '2' },
    { value: 'sale_rep_id', name: 'Account Representative', type: '2' },
    { value: 'csm_rep_id', name: 'CSM Representative', type: '2' },
    { value: 'voip_provider_env', name: 'Voip Provider', type: '2' },
    { value: 'account_type', name: 'Account Type', type: '2' },
  ],

  ORDER_BY_LIST: [
    { value: 'id', name: 'Id', type: '1' },
    { value: 'name', name: 'Name', type: '1' },
    { value: 'company_name', name: 'Company Name', type: '1' },
    { value: 'status', name: 'Status', type: '2' },
    { value: 'billing_production', name: 'Billing', type: '2' },
    { value: 'cluster_node', name: 'Cluster', type: '2' },
  ],
};

export const ACCOUNT_INFO = {
  DEFAULTS: {
    PASSWORD_COMPLEXITY: '4',
    PREVIEW_DIAL_RESTRICTION: 'N',
    ADDITIONAL_LEAD_FIELD: 'N',
    IS_IN_TESTBED: 'N',
    LOG_LEAD_CHANGES: 'N',
    EXCLUDE_FROM_REVENUE_REPORT: 'N',
    SHOW_TOS_ON_AGENT_APP: 'N',
    HOPPER_CUSTOM_ORDER: 'N',
    ATTESTATION_LEVEL: 'B',
    TEST_ATTESTATION_LEVEL: 'C',
    PASSWORD_ROTATION: 'Y',
    CONTACT_EMAIL_VALIDATION: 'Y',
    MULTI_FACTORED_AUTHENTICATION: 'Y',
  },
  PASSWORD_COMPLEXITY_OPTIONS: [
    { value: '1', name: 'Level 1' },
    { value: '2', name: 'Level 2' },
    { value: '3', name: 'Level 3' },
    { value: '4', name: 'Level 4' },
  ],
  PREVIEW_DIAL_RESTRICTION_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ADDITIONAL_LEAD_FIELD_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  LOG_LEAD_CHANGES_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  EXCLUDE_FROM_REVENUE_REPORT_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  IS_IN_TESTBED_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  SHOW_TOS_ON_AGENT_APP_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  HOPPER_CUSTOM_FIELD_ORDER_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_SMS_TESTING_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_DEBOUNCE_SMS_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_IVA_REACT_UI_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_DEDICATED_SMS_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_OVERLAY_MATCHING_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_CONTACT_EMAIL_VALIDATION_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_MULTI_FACTORED_AUTHENTICATION_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_PASSWORD_ROTATION_OPTIONS: [
    { value: 'N', name: 'No' },
    { value: 'Y', name: 'Yes' },
  ],
  ENABLE_CAMP_REG_STAGING_OPTIONS: [
    { value: 'Y', name: 'ON' },
    { value: 'N', name: 'OFF' },
  ],
  ATTESTATION_LEVEL_OPTIONS: [
    { value: 'A', name: 'A (Full)' },
    { value: 'B', name: 'B (Partial)' },
    { value: 'C', name: 'C (Gateway)' },
  ],
  // Fields that map directly to account columns (FIEL_TYPE_1 = model choices)
  FIELD_TYPE_MODEL_CHOICES: [
    'default_gmt',
    'billing_production',
    'test_account',
    'status',
    'security_compliance',
    'extend_delinquent_period',
    'default_audio_format',
    'migration_mode',
    'externally_managed_account',
  ],
  // All updatable account fields (excludes 'id' which is FIEL_TYPE_9 / no_update)
  UPDATABLE_FIELDS: [
    'id',
    'name',
    'company_name',
    'website',
    'default_caller_id',
    'default_gmt',
    'billing_production',
    'test_account',
    'status',
    'delinquent_at',
    'cluster_node',
    'security_compliance',
    'extend_delinquent_period',
    'address',
    'city',
    'state',
    'zipcode',
    'country',
    'default_audio_format',
    'migration_mode',
    'externally_managed_account',
  ],
};

