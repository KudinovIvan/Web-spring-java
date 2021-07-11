Ext.define('webapp.view.DirectorWin.DirectorWindow',{
    title: {
        height:10,
    },
    extend: 'Ext.form.Panel',
    layout: 'border',
    controller: 'user',
    items: [
        {
            xtype:'panel',
            region: 'center',
            //title: 'Панель',
            layout: 'border',
            height: 800,
            width: 1000,
            items: [
                {
                    region: 'north',
                    //title: 'Директор',
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
                        id:'rez_button',
                        margin:'0 0 0 5',
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
                },{
                    margin:'0 25 0 25',
                    region: 'west',
                    xtype: 'userview',
                    title: 'Пользователь',
                    height: 800,
                    width: 960,
                },
                {
                    margin:'0 25 0 25',
                    region: 'east',
                    title: 'Директор',
                    width: 850,
                    xtype: 'dirview',
                    height: 1000,
                },
            ],
        }
    ],
    renderTo: Ext.getBody()
});