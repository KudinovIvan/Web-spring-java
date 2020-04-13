Ext.define('webapp.model.UserModel', {
    extend: 'Ext.data.Model',
    alias: 'viewmodel.usermodel',
    data: {
        check:{
            xtype:'checkbox',
        },
        fio: ''
    }
})