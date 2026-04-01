export const ACCOUNT = {
  DEFAULTS: {
    SECURITY_COMPLIANCE: 0,
    PRIMARY_DATA_CENTER: 'DT',
    AUDIO_FORMAT: 'MP3',
    ACCOUNT_TYPE: 'REGULAR',
    MULTI_PROCESS: 'N',
    MULTI_PROCESS_AUTO_DIAL: 'N',
    MIGRATION_MODE: '',
    TEST_ACCOUNT: 'N',
    IVA_MANAGED_SERVICE: 'N',
    EXTERNALLY_MANAGED_ACCOUNT: 'N',
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

  BILLING_SYSTEM: [
    'Zuora',
    'ZuoraSandBox',
    'BillingTest',
  ],

    VAULT:{
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

    ACCOUNT_TYPE_OPTIONS:{
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
    { value: 'id',                 name: 'Id',                     type: '1' },
    { value: 'name',               name: 'Name',                   type: '1' },
    { value: 'company_name',       name: 'Company Name',           type: '1' },
    { value: 'status',             name: 'Status',                 type: '2' },
    { value: 'billing_production', name: 'Billing',                type: '2' },
    { value: 'cluster_node',       name: 'Cluster',                type: '2' },
    { value: 'tier',               name: 'Platform',               type: '2' },
    { value: 'license_seat_count', name: 'Active Seats',           type: '1' },
    { value: 'client_tier',        name: 'Customer Tier',          type: '2' },
    { value: 'sale_rep_id',        name: 'Account Representative', type: '2' },
    { value: 'csm_rep_id',         name: 'CSM Representative',     type: '2' },
    { value: 'voip_provider_env',  name: 'Voip Provider',          type: '2' },
    { value: 'account_type',       name: 'Account Type',           type: '2' },
  ],

  ORDER_BY_LIST: [
    { value: 'id',                 name: 'Id',           type: '1' },
    { value: 'name',               name: 'Name',         type: '1' },
    { value: 'company_name',       name: 'Company Name', type: '1' },
    { value: 'status',             name: 'Status',       type: '2' },
    { value: 'billing_production', name: 'Billing',      type: '2' },
    { value: 'cluster_node',       name: 'Cluster',      type: '2' },
  ],
};