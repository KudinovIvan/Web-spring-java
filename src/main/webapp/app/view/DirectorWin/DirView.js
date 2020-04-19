Ext.define('webapp.view.DirectorWin.DirView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.dirview',
    viewmodel: 'admin',
    requires: [ 'webapp.controller.AdminController',
        'webapp.model.GridModel'],
    controller: 'admin',
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
            items:[
                {
                    layout:{
                        type: 'hbox'
                    },
                    region: 'north',
                    height:40,
                        margin:'5 0 10 600',
                        xtype: 'displayfield',
                        value: "Director",

                },
                {
                    margin:'0 600 0 600',
                    xtype:'panel',
                    layout: {
                        type: 'hbox'
                    },
                }
            ],
        }, {
            xtype: 'dirgrid',
            region: 'center'
        }
    ],
    renderTo: Ext.getBody()
});