Ext.define('webapp.view.UserWin.Cap', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cap',
    layout: {
        type: 'hbox'
    },
    xtype: 'panel',
    title: 'Amdin',
    items:[{
        xtype:"button",
        iconCls: 'x-fa fa-search',
     //   width:35,
      //  height:35,
        margin:'35 0 0 0'
    },
    {
        xtype:"button",
        iconCls: 'x-fa fa-bell',
       // width:35,
        //height:35,
        margin:'35 0 0 0'
    },
    {
        xtype:"button",
        iconCls: 'x-fa fa-align-left',
        width:35,
        height:35,
        margin:'35 0 0 0'
    },
    ]
})