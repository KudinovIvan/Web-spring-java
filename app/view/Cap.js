Ext.define('AAA38.view.Cap', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cap',
    layout: {
        type: 'hbox'
    },
    items:[{
        html: '<div style="font: normal 18px cursive"><left><font size = "7"><u>Admin</u></font></center></style></div>',
        height:70,
        width:1300,
        margin:'35px'
    },{
        xtype:"button",
        iconCls: "icon-search",
        text:"Поиск",
        width:150,
        height:70,
        margin:'35 0 0 0'
    },
    {
        xtype:"button",
        iconCls: "icon-bell",
        text:"Оповещения",
        width:150,
        height:70,
        margin:'35 0 0 0'
    },
    {
        xtype:"button",
        iconCls: "icon-result",
        text:"Результаты конкурса",
        width:150,
        height:70,
        margin:'35 0 0 0'
    },
    ]
})