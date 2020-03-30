Ext.application({

    name: 'Login',



    appFolder:'app',

    launch: function(){  Ext.create('Ext.form.Panel', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    extend: 'Ext.window.MessageBox', 
    extend: 'Ext.Action', 
    extend:'table.js',
    fullscreen: true,
    frame : true,
    title:'Авторизация',
    height : 150,
    width : 425,
    bodyPadding: 10,
    floating: true,
    items: [{
            xtype: 'textfield',
            fieldLabel: 'Login',
            width:350,
            id:"login",
            name: 'login',
            maxLength: 12,
            minLength: 4,
            allowBlank: false
         }, {
            xtype: 'textfield',
            fieldLabel: 'Password',
            name:'password',
            id:"password",
            width:350,
            maxLength: 10,
            minLength: 6,
            inputType:'password',
            allowBlank: false
         }
    ],
        buttons:[
            {
             text: 'Войти',
             listeners: {
                click: function(){
                    if ((Ext.getCmp("login").getValue()=="Admin")&&(Ext.getCmp("password").getValue()=="123456"))
                   window.location.assign('Вошли в систему.html');
                    else
                    alert("Данного пользователя нет в системе");
                }
            }
            }
   
        ],
    })
    }
});