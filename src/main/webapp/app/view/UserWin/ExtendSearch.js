
var sek = [
    [1, 'Государственные закупки 44-ФЗ'],
   [2, 'Закупки по 223-ФЗ']
];

var step = [
    [1, 'Прием заявок'],
   [2, 'Работа комиссии']
];

var reg = [
    [1, '19 Хакассия'],
   [2, '22 Алтайский край'],
   [3, '25 125 Приморский край'],
   [4, '27 Хабаровский край'],
   [5, '47 Ленинградскай область'],
   [6, '78 98 178 Санкт-Петербург'],
];

var sphere = [
    [1, '10 Производство пищевых продуктов'],
   [2, '36	Забор, очистка и распределение воды'],
   [3, '41	Строительство зданий'],
   [4, '43.1 Разборка и снос зданий, подготовка строительного участка']
];

var cash = [
    [1, '$'],
   [2, '₽'],
   [3, '€'],
   [4, '£']
];

Ext.define('webapp.view.UserWin.ExtendSearch', {
    extend: 'Ext.form.Panel',
    alias: 'widget.extendSearch',
    bodyPadding: 10,
    layout:{
        type:'vbox'
    },
    title: "Расширенный поиск",
    width: 900,
    items: [
        {
            layout:{
            type:'hbox'
        },
        items:[
        {
            
            xtype: 'combobox',
            value: 'Секции',
            store: new Ext.data.SimpleStore({
                id:0,
               fields:
               [
                'myId',   //числовое значение - номер элемента
                'myText' //текст
               ],
               data:sek
           }),
           valueField:'myId',
            displayField:'myText',
            queryMode:'local'
        },
        {
            
            xtype: 'combobox',
            value: 'Этапы',
            store: new Ext.data.SimpleStore({
                id:0,
               fields:
               [
                'myId',   //числовое значение - номер элемента
                'myText' //текст
               ],
               data:step
           }),
           valueField:'myId',
            displayField:'myText',
            queryMode:'local'
        },
        {
            
            xtype: 'combobox',
            value: 'Регионы',
            store: new Ext.data.SimpleStore({
                id:0,
               fields:
               [
                'myId',   //числовое значение - номер элемента
                'myText' //текст
               ],
               data:reg
           }),
           valueField:'myId',
            displayField:'myText',
            queryMode:'local'
        },],
    },
        {
            layout:{
            type:'hbox'
        },
        items:[{
            xtype: 'textfield',
            emptyText:'Адреса места поставки',
            maxLength: 100,
        }, {
            
            xtype: 'combobox',
            value: 'Сфера деятельности',
            store: new Ext.data.SimpleStore({
                id:0,
               fields:
               [
                'myId',   //числовое значение - номер элемента
                'myText' //текст
               ],
               data:sphere
           }),
           valueField:'myId',
            displayField:'myText',
            queryMode:'local'
        },{
            width:25,
        },
        
        {
            xtype: 'textfield',
            fieldLabel: 'с',
            labelWidth: 'auto',
            emptyText:'Начальная цена',
            maxLength: 100,
        }]
    },
    {
        layout:{
        type:'hbox'
    },
    items:[{
        xtype: 'textfield',
            fieldLabel: 'по',
            labelWidth: 'auto',
            emptyText:'Конечная цена цена',
            maxLength: 100,
    }, {
        
        xtype: 'combobox',
        value: 'Валюта',
        store: new Ext.data.SimpleStore({
            id:0,
           fields:
           [
            'myId',   //числовое значение - номер элемента
            'myText' //текст
           ],
           data:cash
       }),
       valueField:'myId',
        displayField:'myText',
        queryMode:'local'
    },{
        width:25,
    },{
        xtype: 'datefield',
        anchor: '100%',
        fieldLabel: 'с',
        labelWidth: 'auto',
        name: 'from_date',
        emptyText: "Дата публикации",
        maxValue: new Date() // Ограничено вводом текущей даты или ранее
    }
]
}, {
    layout:{
    type:'hbox'
},
items:[{
    xtype: 'datefield',
    anchor: '100%',
    fieldLabel: 'по',
    labelWidth: 'auto',
    name: 'from_date',
    emptyText: "Дата публикации",
    maxValue: new Date() // Ограничено вводом текущей даты или ранее
}, {
    width:25,
},{
    xtype: 'datefield',
    anchor: '100%',
    fieldLabel: 'с',
    labelWidth: 'auto',
    name: 'from_date',
    emptyText: "Дата окончания",
    maxValue: new Date() // Ограничено вводом текущей даты или ранее
}, {
    width:25,
},{
    xtype: 'datefield',
    anchor: '100%',
    fieldLabel: 'по',
    labelWidth: 'auto',
    name: 'from_date',
    emptyText: "Дата окончания",
    maxValue: new Date() // Ограничено вводом текущей даты или ранее
}
]
},
    ]
});