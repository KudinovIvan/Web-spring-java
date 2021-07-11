var rights = [
    [1, 'Администратор'],
    [2, 'Пользователь'],
    [3, 'Директор']
];
var fio_del=[];
var id_del=[];
var user_right;

Ext.define('webapp.view.AdminWin.AdminGrid', {
    extend: 'Ext.grid.Panel',
    requires: [ 'webapp.store.UserStore'],
    alias: 'widget.admingrid',
    width: 400,
    height: 300,
    resizable: false,
    store: {type: 'userstore'},
    frame: true,
    margin: '15 100 15 100',
    columns: [
        { text: 'Логин', flex:1, dataIndex: 'login'},
        { text: "ФИО", flex: 3, dataIndex:'fio'}
    ],
    selModel:{
        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel'
    },
    id: 'AdminGrid',
    buttons:[
        {
            text: 'Убрать все флажки',
            handler: function () {
                Ext.getCmp('AdminGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Удалить',
            iconCls: 'x-fa fa-user-slash',
            formBind: true,
            listeners: {
                click: 'DeleteWindow'
            }
        }
    ]
});
Ext.define('webapp.view.AdminWin.AdminView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.adminview',
   // viewmodel: 'admin',
    viewmodel: {
        type: 'test'
    },
    requires: [ 'webapp.controller.AdminController',
        'webapp.model.UserModel'],
    controller: 'user',
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
            id:'search',
            margin:'20 0 0 200',
            width: 500,
            animatedShadow: true
        },{
            xtype: 'button',
            iconCls: 'x-fa fa-search',
            margin:'20 0 0 0',
             listeners:{
                 click: 'Search'
             }
        },{
            xtype: 'button',
            iconCls:'x-fa fa-user-plus',
            margin:'20 0 0 0',
             listeners:{
                 click: 'AddWindow'
             }
         },  {
            xtype:'button',
            iconCls:'x-fa fa-user-edit',
            margin:'20 0 0 0',
             listeners: {
                 click: 'ChangeWindow'
             }
        }
    ]}, {
            xtype:'admingrid',
            region:'center'
        }
    ]
});