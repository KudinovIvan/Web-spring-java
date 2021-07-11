var ei = [
    [1, 'шт'],
    [2, 'л'],
];

var currency = [
    [1, '$'],
    [2, '₽'],
    [3, '€'],
    [4, '¥']
];
Ext.define('webapp.controller.DirectorController', {
    extend : 'Ext.app.ViewController',

    alias: 'controller.director',

    Login(){
        document.location.href = "http://localhost:8080"
    },

    Exit(){
        Ext.create('Ext.window.Window', {
            title: 'Предупреждение',
            items:[{
                xtype:'displayfield',
                value: 'Вы уверены, что хотите выйти из системы?',
                margin:'20,20,20,20'
            }],
            buttons:[{
                text:'Да',
                listeners: {
                    click: 'Login'
                }
            },{
                text:'Нет'
            }]
        }).show();
    },


})