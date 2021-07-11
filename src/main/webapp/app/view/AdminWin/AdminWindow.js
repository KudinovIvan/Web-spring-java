
Ext.define('webapp.view.AdminWin.AdminWindow', {
    title: {
    },
    extend: 'Ext.form.Panel',
    layout: 'border',
    controller: 'user',
    id:'form',
    items: [
        {
            xtype:'panel',
            region: 'center',
            layout: 'border',
            height: 800,
            width: 1000,
            items: [
                {
                    region: 'north',
                    width: 50,
                    xtype: 'panel',
                    height: 50,
                    items:[ {
                        xtype: 'button',
                        iconCls:'x-fa fa-bell',
                        margin:'0 0 0 1700',
                        id:'bell_button',
                        listeners:{
                            click: 'Bell'
                        }
                    },{
                        xtype: 'button',
                        iconCls:'x-fa fa-align-justify',
                        margin:'0 0 0 5',
                        id:'rez_button',
                        listeners:{
                            click: 'Rez'
                        }
                    },{
                            xtype: 'button',
                            //text:"Выход",
                            margin:'0 0 0 5',
                            iconCls:'x-fa fa-power-off',
                            listeners:{
                                click: 'Exit'
                            }
                        },
                    ],
                },
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    height: 800,
                    width: 973,
                    region: 'west',
                    items:[
                        {   collapsible: true,
                            margin:'0 25 0 0',
                           // region: 'west',
                            xtype: 'adminview',
                            title: 'Администратор',
                            height: 800,
                            width: 973,
                            }, {
                            //region: 'east',
                            title: 'Директор',
                            margin:'0 60 0 0',
                            xtype: 'dirgrid',
                            height: 800,
                            width: 973,
                        }]
        },
                {
                    region: 'east',
                    xtype: 'userview',
                    //title: 'Пользователь',
                    height: 800,
                    width: 960,
                },
            ],
        }
    ],
    renderTo: Ext.getBody()
});