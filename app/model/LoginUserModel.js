Ext.define('app.model.LoginUserModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'login', type: 'string'},
        {name: 'password', type: 'string'}],
});