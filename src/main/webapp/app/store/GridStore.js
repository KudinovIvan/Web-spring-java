Ext.define('webapp.store.GridStore',{
    extend:'Ext.data.Store',
    alias:'store.gridstore',
    requires : [
        'webapp.model.GridModel'
    ],
    model: 'webapp.model.GridModel',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        api: {
            create: 'grids',
            read: 'grids',
            destroy: 'grids',
            update: 'grids'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});