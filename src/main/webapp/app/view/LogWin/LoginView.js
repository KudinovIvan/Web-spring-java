var LoginVType = true;
var PasswordVType = true;

var passLoginFrontVType = {
    passLoginFront: function(val, field){
        return LoginVType;
    },
    passLoginFrontText: 'Неверный логин',
};

var passPasswordVType = {
    passPassword: function(val, field){
        return PasswordVType;
    },
    passPasswordText: 'Неверный пароль',
};
Ext.define('webapp.view.LogWin.LoginView',{
    extend: 'Ext.panel.Panel',
    viewModel:'login',
    id:'LoginShow',
    requires: [ 'webapp.controller.LoginController',
        'webapp.model.LoginUserModel'],
    controller: 'login',
    title:'Авторизация',
    fullscreen: true,
    frame : true,
    height : 200,
    width : 425,
    closable: false,
    resizable: false,
    titleCollapse: true,
    bodyPadding: 10,
    floating: true,
    autoShow:true,
    name:'log',
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Логин',
            id: 'login123',
            bind:'{login}',
            vtype:'passLoginFront',
            width : 370,
            maxLength: 12,
            minLength: 4,
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: 'Пароль',
            inputType: 'password',
            vtype:'passPassword',
            id: 'password',
            name: 'password',
            bind:'{password}',
            width : 370,
            maxLength: 12,
            minLength: 4,
            allowBlank: false
        }]
    },
        buttons:[
            {
                text: 'Войти',
                formBind: true,
                listeners:{
                    click: 'onLoginClick'
                }
            }
        ],
    })