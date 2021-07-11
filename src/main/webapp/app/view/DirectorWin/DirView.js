Ext.define('webapp.view.DirectorWin.DirView', {
    width:1000,
    extend: 'Ext.form.Panel',
    alias: 'widget.dirview',
    requires: [ 'webapp.controller.DirectorController',
        'webapp.model.GridModel'],
    /*title: {
        height:20,
    },*/
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
           /* items:[
                {
                    region: 'north',
                    height:85,
                }
            ],*/
            /*buttons:[{
                //text:"Выход",
                iconCls:'x-fa fa-power-off',
                height:56,
                weight: 100,
                margin:'0 200 0 0',
                listeners:{
                    click: 'Exit'
                }
            }]*/
        }, {
            xtype: 'dirgrid',
            region: 'center'
        }
    ],
    renderTo: Ext.getBody()
});