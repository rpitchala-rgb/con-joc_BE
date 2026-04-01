export class DidOrdersUtility {
  constructor() {} 
    async getOptions() {
        
     const filterByList = [
      { value: 'id', name: 'ID', type: '1' },
      { value: 'account_id', name: 'Account ID', type: '1' },
      { value: 'name', name: 'Account Name', type: '1' },
      { value: 'type', name: 'Order Type', type: '2' },
      { value: 'number_type', name: 'Number Type', type: '2' },
      { value: 'total_price', name: 'Total', type: '1' },
      { value: 'total_num', name: '#DIDs', type: '1' },
      { value: 'num_processed', name: '# Processed', type: '1' },
      { value: 'num_processing', name: '# Processing', type: '1' },
      { value: 'num_errored', name: '# Errored', type: '1' },
      { value: 'num_imports', name: '# Imports', type: '1' },
      { value: 'status', name: 'Status', type: '2' },
      { value: 'payment_status', name: 'Payment Status', type: '2' },
    ];

    const orderByList = [
      { value: 'id', name: 'ID', type: '1' },
      { value: 'account_id', name: 'Account ID', type: '1' },
      { value: 'name', name: 'Account Name', type: '1' },
      { value: 'type', name: 'Order Type', type: '2' },
      { value: 'number_type', name: 'Number Type', type: '1' },
      { value: 'total_price', name: 'Total', type: '1' },
      { value: 'total_num', name: '#DIDs', type: '1' },
      { value: 'num_processed', name: '# Processed', type: '1' },
      { value: 'num_processing', name: '# Processing', type: '1' },
      { value: 'num_errored', name: '# Errored', type: '1' },
      { value: 'num_imports', name: '# Imports', type: '1' },
      { value: 'status', name: 'Status', type: '1' },
      { value: 'payment_status', name: 'Payment Status', type: '1' },
    ];

    const operators = [
      { value: '=', name: 'Equals' },
      { value: '!=', name: 'Not Equal' },
      { value: '>', name: 'Greater Than' },
      { value: '<', name: 'Less Than' },
      { value: '>=', name: 'Greater Than Or Equal' },
      { value: '<=', name: 'Less Than Or Equal' },
      { value: 'IN', name: 'In' },
      { value: 'IS NULL', name: 'Is Null' },
      { value: 'IS NOT NULL', name: 'Is Not Null' },
      { value: 'IS EMPTY', name: 'Is Empty' },
      { value: 'IS NOT EMPTY', name: 'Is Not Empty' },
      { value: 'NOT IN', name: 'Not In' },
    ];

    const date_type_options = [
      { name: 'Date', value: 'created_at' },
      { name: 'processing Start At', value: 'started_processing_at' },
      { name: 'processing End At', value: 'finished_processing_at' },
      { name: 'Updated At', value: 'updated_at' },
    ];

    const order_type = [
      { value: 'ALL', name: 'ALL' },
      { value: 'BUY', name: 'BUY' },
      { value: 'MOVE', name: 'MOVE' },
      { value: 'ORDERING', name: 'ORDERING' },
      { value: 'REPLACE', name: 'REPLACE' },
      { value: 'RELEASE', name: 'RELEASE' },
      { value: 'IMPORT', name: 'IMPORT' },
    ];

    const number_type = [
      { value: 'INBOUND', name: 'INBOUND' },
      { value: 'SMS', name: 'SMS' },
    ];

    const payment_status = [
      { value: 'UNPAID', name: 'UNPAID' },
      { value: 'PARTIAL_PAYMENT', name: 'PARTIAL_PAYMENT' },
      { value: 'PAID', name: 'PAID' },
    ];

    const status = [
      { value: 'NEW', name: 'NEW' },
      { value: 'PROCESSING', name: 'PROCESSING' },
      { value: 'PROCESSED', name: 'PROCESSED' },
      { value: 'PARTIAL_PROCESSED', name: 'PARTIAL_PROCESSED' },
      { value: 'FINISHED', name: 'FINISHED' },
      { value: 'ERROR', name: 'ERROR' },
    ];

    const filters = {
      sub_section: {
        plugins: ['remove_button'],
        options: [],
        create: false,
        sortField: 'text',
        valueField: 'value',
        labelField: 'text',
        maxItems: 20,
      },
      type: {
        plugins: ['remove_button'],
        options: order_type,
        create: false,
        sortField: 'text',
        valueField: 'value',
        labelField: 'name',
        maxItems: 20,
      },
      number_type: {
        plugins: ['remove_button'],
        options: number_type,
        create: false,
        sortField: 'text',
        valueField: 'value',
        labelField: 'name',
        maxItems: 20,
      },
      payment_status: {
        plugins: ['remove_button'],
        options: payment_status,
        create: false,
        sortField: 'text',
        valueField: 'value',
        labelField: 'name',
        maxItems: 20,
      },
      status: {
        plugins: ['remove_button'],
        options: status,
        create: false,
        sortField: 'text',
        valueField: 'value',
        labelField: 'name',
        maxItems: 20,
      },
    };

    return {
      filters,
      operators,
      date_type_options,
      orderByList,
      filterByList
    };
  }
}