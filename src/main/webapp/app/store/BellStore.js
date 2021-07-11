Ext.define('webapp.store.BellStore',{
    extend:'Ext.data.Store',
    alias:'store.bellstore',
    requires : [
        'webapp.model.GridModel'
    ],
    model: 'webapp.model.GridModel',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        api: {
            create: 'bells',
            read: 'bells',
            destroy: 'bells',
            update: 'bells'
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