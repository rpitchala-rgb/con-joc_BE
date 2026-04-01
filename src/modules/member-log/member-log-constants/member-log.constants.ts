export const MEMBER_LOG = {
    action_options: {
        "SAVE": "Save",
        "DELETE": "Delete"
    },
    filters_base: {
        sub_section: {
            plugins: ['remove_button'],
            options: [],
            create: false,
            sortField: 'text',
            valueField: 'value',
            labelField: 'text',
            maxItems: 20,
        },
        section: {
            plugins: ['remove_button'],
            options: [],
            create: false,
            sortField: 'text',
            valueField: 'value',
            labelField: 'text',
            maxItems: 20,
        },
        member_id: {
            plugins: ['remove_button'],
            options: [],
            create: false,
            sortField: 'text',
            valueField: 'value',
            labelField: 'text',
            maxItems: 20,
        },
    },
    filterByList: {
        ip_address:  { value: 'ip_address',  name: 'IP Address',  type: '1' },
        section:     { value: 'section',     name: 'Section',     type: '2' },
        sub_section: { value: 'sub_section', name: 'Subsection',  type: '2' },
        account_id:  { value: 'account_id',  name: 'Account ID',  type: '1' },
        member_id:   { value: 'member_id',   name: 'Members',     type: '2' },
    },
    orderByList: {
        created_at:  { value: 'created_at',  name: 'Date',        type: '1' },
        ip_address:  { value: 'ip_address',  name: 'IP Address',  type: '1' },
        sub_section: { value: 'sub_section', name: 'Subsection',  type: '2' },
        account_id:  { value: 'account_id',  name: 'Account ID',  type: '1' },
        section:     { value: 'section',     name: 'Section',     type: '2' },
    },
}
