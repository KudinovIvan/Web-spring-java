Ext.define('webapp.view.LogWin.LoginView',{
    extend: 'Ext.panel.Panel',
    viewModel:'login',
    requires: [ 'webapp.controller.LoginController',
        'webapp.model.LoginUserModel'],
    controller: 'login',
    //alias: 'viewmodel.login',
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
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Логин',
            name: 'login',
            bind:'{login}',
            width : 370,
            maxLength: 12,
            minLength: 4,
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Пароль',
            inputType: 'password',
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