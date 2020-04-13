var rights = [
    [1, 'Администратор'],
    [2, 'Пользователь'],
    [3, 'Директор']
];

Ext.define('webapp.view.AdminWin.AdminView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.adminview',
    viewmodel: 'admin',
    requires: [ 'webapp.controller.AdminController',
        'webapp.model.UserModel'],
    controller: 'admin',
    title: {
        height:50
    },
    width: 200,
    layout: {
        type: 'border'
    },
    items:[{
        xtype:'form',
        region:'north',
        layout:{
            type: 'hbox'
        },
     items:[
        {
            xtype: 'textfield',
            margin:'30 0 0 700',
            width: 500,
            animatedShadow: true
        },{
            xtype: 'button',
            iconCls: 'x-fa fa-search',
            margin:'30 0 0 0'
        },{
            xtype: 'button',
            iconCls:'x-fa fa-plus',
            margin:'30 0 0 0',
             formBind: false,
           //  listeners: {
                 handler: function() {
                     Ext.create('Ext.window.Window', {
                         height: 500,
                         width: 400,
                         layout: {
                             type: 'vbox',
                         },
                         items: [
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'ФИО',
                                 name: 'fio',
                                 bind: '{fio}',
                                 allowBlank: false,
                                 margin: '20 0 0 40'
                             }, {
                                 xtype: 'textfield',
                                 fieldLabel: 'Логин',
                                 name: 'login',
                               //  bind: '{log}',
                                 allowBlank: false,
                                 margin: '20 0 0 40'
                             }, {
                                 xtype: 'textfield',
                                 fieldLabel: 'Пароль',
                               //  bind: '{password}',
                                 margin: '20 0 0 40'
                             }, {
                                 xtype: 'displayfield',
                                 fieldLabel: 'Внимание:',
                                 value: "Обязательно запишите пароль",
                                 margin: '20 0 0 40'
                             }, {
                                 fieldLabel: 'Роль',
                                 xtype: 'combobox',
                                 value: 'Пользователь',
                                 name: 'role',
                                 store: new Ext.data.SimpleStore({
                                     id: 0,
                                     fields:
                                         [
                                             'myId',   //числовое значение - номер элемента
                                             'myText' //текст
                                         ],
                                     data: rights
                                 }),
                                 valueField: 'myId',
                                 displayField: 'myText',
                             //    bind:{valueField: 2},
                                 queryMode: 'local',
                                 margin: '20 0 0 40'
                             },
                         ],
                         buttons: [{
                             text: 'ОК',
                             formBind: true,
                             listeners: {
                                 click: 'AddUser'
                             }
                         }
                         ]
                     }).show();

               //  }
             }
             },  {
            xtype:'button',
            iconCls:'x-fa fa-pen',
            margin:'30 0 0 0',
                 handler: function () {
                     Ext.create('Ext.window.Window', {
                         height: 320,
                         width: 350,
                         layout: {
                             type: 'vbox',
                         },
                         items: [
                             {
                                 xtype: 'radiogroup',
                                 vertical: true,
                                 columns: 1,
                                 items: [
                                     {
                                         margin: '0 0 0 30' ,
                                         boxLabel: 'Пользователь',
                                         name: 'topping',
                                         inputValue: '1',
                                         id: 'checkbox1'
                                     }, {
                                         "margin": '0 0 0 30' ,
                                         "boxLabel": 'Директор',
                                         "name": 'topping',
                                         "inputValue": '2',
                                         "checked": true,
                                         "id": 'checkbox2'
                                     }, {
                                         "margin": '0 0 0 30',
                                         "boxLabel": 'Администратор',
                                         "name": 'topping',
                                         "inputValue": '3',
                                         "id": 'checkbox3'
                                     }
                                 ]
                             }
                         ],
                         buttons: [{
                             text: 'Да',
                             formBind: true,
                             margin: '0 180 0 0',
                             listeners: {
                                 click: 'delete',
                             }
                         }, {
                             text: 'Выход',
                             formBind: true,
                             listeners: {

                             }
                         }
                         ]
                     }).show();
                 }
        }
    ]}, {
            xtype:'admingrid',
            region:'center'
        }
    ],
    buttons:[
        {
            margin: '50 600 0 0',
            text: 'Удалить',
            formBind: true,
                handler: function () {
                    Ext.create('Ext.window.Window', {
                        "height": 350,
                        "width": 400,
                        "layout": {
                            "type": 'vbox',
                        },
                        "items": [
                            {
                                "xtype": 'displayfield',
                                "value": "Вы уверены, что хотите удалить этих пользователей?",
                                "margin": '20 0 0 40'
                            }
                        ],
                        "buttons": [{
                            "text": 'Да',
                            "formBind": true,
                            "margin": '0 230 0 0',
                            "listeners": {
                                "click": 'delete',
                            }
                        }, {
                            "text": 'Нет',
                            "formBind": true,
                            "listeners": {
                                "click": 'DeleteUsers'
                            }
                        }
                        ]
                    }).show();
                }
        }

    ],
});