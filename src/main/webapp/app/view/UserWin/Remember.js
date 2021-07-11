url = "http://localhost:8080/bell";
console.log("LLLL");
Ext.define('webapp.view.UserWin.Remember',{
    extend: 'Ext.form.Panel',
    alias: 'widget.rememberview',
    viewmodel: 'remember',
    requires: [ 'webapp.controller.UserController',
        'webapp.model.UserModel'],
    controller: 'user',
    title: {
        height:20,
    },
    layout: {
        type: 'border'
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            layout: {
                type: 'vbox'
            },
            title: 'login_title',
            items:[
                {
                    layout:{
                        type: 'hbox'
                    },
                    region: 'north',
                    height:40,
                    items:[{
                        margin:'5 0 10 600',
                        xtype: 'displayfield'
                    },{
                        xtype: 'button',
                        iconCls: 'x-fa fa-search',
                        margin:'5 0 10 634'
                    },{
                        xtype: 'button',
                        iconCls:'x-fa fa-bell',
                        margin:'5 0 10 5',
                    },{
                        xtype: 'button',
                        iconCls:'x-fa fa-align-justify',
                        margin:'5 0 10 5',
                    }
                    ],
                },
                {
                    margin:'0 600 0 600',
                    xtype:'panel',
                    layout: {
                        type: 'hbox'
                    },
                    items:[{
                        xtype: 'button',
                        //text:"Выход",
                        iconCls:'x-fa fa-power-off',
                        height:56,
                        width: 100,
                        margin: '0 0 0 300',
                        listeners:{
                            click: 'Exit'
                        }
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