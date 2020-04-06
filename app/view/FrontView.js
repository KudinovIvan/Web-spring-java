Ext.define('AAA38.view.FrontView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.frontView',
    layout: 'border',
    items: [
        {
            xtype: 'panel',
            region: 'north',
            layout: {
                type: 'vbox'
            },
            items:[ 
                {    xtype:'cap',
                region: 'north',
    
             },
           {
               xtype:'panel',
               layout: {
                type: 'hbox'
              },
              items:[{
                  width:600,
              },{
                  xtype: 'extendSearch',
                  text:"Расширенный поиск",
                  width: 650,
                  collapsible: true,
                  collapsed: true,
                  title:{
                        xtype:'textfield',
                        html:"Расширенный поиск",
                        maxLength: 100,
                    
                  }
              }, {
                  xtype: 'button',
                  text:"Найти",
                  height:44,
                  width: 100,
              }]
           }
            ], 
    }, {
        xtype: 'tableGridView',
        region: 'center'
    }
    ],
    renderTo: Ext.getBody()
});