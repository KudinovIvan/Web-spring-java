Ext.define('webapp.store.RezStore',{
    extend:'Ext.data.Store',
    alias:'store.rezstore',
    requires : [
        'webapp.model.GridModel'
    ],
    model: 'webapp.model.GridModel',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        api: {
            create: 'rez',
            read: 'rez',
            destroy: 'rez',
            update: 'rez'
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