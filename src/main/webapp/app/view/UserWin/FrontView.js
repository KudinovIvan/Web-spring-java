Ext.define('webapp.view.UserWin.FrontView',{
    extend: 'Ext.form.Panel',
    alias: 'widget.userview',
    viewmodel: 'user',
    requires: [ 'webapp.controller.UserController',
        'webapp.model.UserModel'],
    controller: 'user',
    layout: {
        type: 'border'
    },
    items: [
        {
            xtype: 'panel',
            width:1000,
            region: 'north',
            layout: {
                type: 'vbox'
            },
            items:[
                {
                    margin:'0 100 0 100',
                    xtype:'panel',
                    items:[{
                        xtype:'panel',
                        layout: {
                            type: 'hbox'
                        },
                        items:[{
                            margin: '20 0 0 0',
                            xtype:'textfield',
                            id: 'key_word',
                            width: 650,
                            maxLength: 650,
                        },{
                            xtype: 'button',
                            margin: '20 0 0 0',
                            iconCls: 'x-fa fa-search',
                            height: 30,
                            width: 30,
                            listeners: {
                                click: 'search'
                            }
                        }],
                    },{
                        xtype: 'extendSearch',
                        text: "Расширенный поиск",
                        width: 650,
                        collapsible: true,
                        collapsed: true,
                        id: 'key_word1'
                    }]
                }
            ],
        }, {
            xtype: 'tableGridView',
            region: 'center'
        }
    ],
    renderTo: Ext.getBody(),
});