Ext.define('webapp.store.Grid_userStore',{
    extend:'Ext.data.Store',
    alias:'store.grid_userstore',
    requires : [
        'webapp.model.GridModel'
    ],
    model: 'webapp.model.GridModel',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        api: {
            create: 'grids_user',
            read: 'grids_user',
            destroy: 'grids_user',
            update: 'grids_user'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});