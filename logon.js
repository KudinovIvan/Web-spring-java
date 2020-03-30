Ext.application({

    name: 'Login',



    appFolder:'app',

    launch: function(){  Ext.create('Ext.form.Panel', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    extend: 'Ext.window.MessageBox', 
    extend: 'Ext.Action', 
    extend:'table.js',
    fullscreen: true,
    frame : true,
    html:'ВЫ ВОШЛИ В СИСТЕМУ',
    height : 150,
    width : 425,
    bodyPadding: 10,
    floating: true,

        buttons:[
            {
             text: 'Выйти',
             listeners: {
                click: function(){
                   window.location.assign('index.html');
                }
            }
            }
   
        ],
    })
    }
});