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
var code, date_end;
var FIOVType;
var start_price;
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};
var passFIOVType = {
    passFIO: function(val, field){
        var passFIORegex = /^[А-Я]{1}[а-я]*\s[А-Я]{1}[а-я]*(\s[А-Я]{1}[а-я]*)*$/;
        FIOVType = passFIORegex.test(val)
        return passFIORegex.test(val);
    },
    passFIOText: 'ФИО может содержать только русские символы. Каждое слово начинается с заглавной буквы. Минимум должны быть написаны Фамилия и Имя',
    passFIOMask: /[(А-Я)(а-я)\s]/
};
var StringVType;
var passStringVType = {
    passString: function(val, field){
        var passStringRegex = /^[А-Я]*[A-Z]*[а-я]*[a-z]*(\s[А-Я]*[A-Z]*[а-я]*[a-z]*)*$/;
        StringVType= passStringRegex.test(val);
        return passStringRegex.test(val);
    },
    passStringText: 'Любое количество русских или латинских букв. Заглавная буква среди слова запрещена!',
    passStringMask: /[(А-Я)(а-я)(A-Z)(a-z)\s]/
};
var IntVType;
var passIntVType = {
    passInt: function(val, field){
        var passIntRegex = /^\d*$/;
        IntVType = passIntRegex.test(val);
        return passIntRegex.test(val);
    },
    passIntMask: /[\d]/
};
var LoginVType;
var passLoginVType = {
    passLogin: function(val, field){
        var passLoginRegex = /^[A-Z]{0,10}[a-z]{1,10}[_]{1}\d{1,10}$/;
        LoginVType = passLoginRegex.test(val);
        return passLoginRegex.test(val);
    },
    passLoginText:'Логин создается по маске ("латинские буквы" "знак подчеркивания" "цифры")',
    passLoginMask: /[\w]/
};
Ext.define('webapp.controller.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    /*rotes:{
        'user_front': 'UserFront'
    },*/

    search() {
        console.log(Ext.getCmp('step').getValue());
        Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/key_word',
            params: {
                search: Ext.getCmp('key_word').getValue(),
                selection: Ext.getCmp('section').getValue(),
                status: Ext.getCmp('step').getValue(),
                subject: Ext.getCmp('subject').getValue(),
                adres: Ext.getCmp('adres1').getValue(),
                phere: Ext.getCmp('sphere').getValue(),
                price_from: Ext.getCmp('price_from').getValue(),
                price_to: Ext.getCmp('price_to').getValue(),
                valute1: Ext.getCmp('valute').getValue(),
                date_from: Ext.getCmp('date_from').getValue(),
                date_to: Ext.getCmp("date_to").getValue(),
                date_end_from: Ext.getCmp('date_end_from').getValue(),
                date_end_to: Ext.getCmp('date_end_to').getValue()
            }
        }).then(response => {
            Ext.getCmp('UserGrid').getStore().reload()
        })
    },

    Login() {
        document.location.href = "http://localhost:8080"
    },

    Bell() {
        Ext.getCmp('bell_button').setStyle(
            'background', '#3d0040ab'
        )
        Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/bell_color_count',
            params: {
                id: id_user,
            }
        }).then(response => {
            Ext.Ajax.request({
                method: 'post',
                url: 'http://localhost:8080/id_user',
                params: {
                    id: id_user,
                }
            }).then(response => {
                Ext.create('Ext.panel.Panel', {
                    alias: 'viewModel.add',
                    title: 'Напоминание о сроках окончания конкурса',
                    fullscreen: true,
                    frame: true,
                    height: 540,
                    width: 1100,
                    closable: true,
                    resizable: false,
                    titleCollapse: true,
                    bodyPadding: 10,
                    floating: true,
                    autoShow: true,
                    layout: {
                        type: 'vbox',
                    },
                    autoScroll: true,
                    items: [{
                        xtype: 'bellgrid',
                        width: 1000,
                        margin: '5 0 10 10',
                    }
                    ], renderTo: Ext.getBody()
                });
                Ext.getCmp('BellGrid').getView().getRowClass = function (row, index) {
                    var d = new Date();
                    var r = row.data.dend;
                    var month = r.substring(5, 7);
                    var day = r.substring(8, 10);
                    var year = r.substring(0, 4);
                    r = month + "." + day + "." + year;
                    var date1 = new Date(r);
                    var date2 = new Date(d);
                    if (date1 - 86400000 * 7 < date2)
                        return 'bell_close';
                    else return 'bell_far'
                };
            })
        })
    },

    Rez() {
        Ext.getCmp('rez_button').setStyle(
            'background', '#3d0040ab'
        );
        Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/rez_color_count',
            params: {
                id: id_user,
            }
        }).then(response => {
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/rez_id',
                "params": {
                    id: id_user
                }
            });
            Ext.create('Ext.panel.Panel', {
                alias: 'viewModel.add',
                title: 'Показ результатов',
                fullscreen: true,
                frame: true,
                height: 540,
                width: 1100,
                closable: true,
                resizable: false,
                titleCollapse: true,
                bodyPadding: 10,
                floating: true,
                autoShow: true,
                layout: {
                    type: 'vbox',
                },
                autoScroll: true,
                items: [{
                    xtype: 'rezgrid',
                    width: 1000,
                    margin: '5 0 10 10',
                }
                ], renderTo: Ext.getBody()
            });
            Ext.getCmp('RezGrid').getView().getRowClass = function (row, index) {
                if (row.data.rezultat === "Проиграл") {
                    return 'bell_close'
                }
                else if (row.data.rezultat === "Ожидается") {
                    return 'bell_far'
                }
                else if (row.data.rezultat === "Выиграл") {
                return 'bell_green'}
            };
        });
    },

    Exit(){
        Ext.create('Ext.window.Window', {
            title: 'Предупреждение',
            id:'Win',
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
                text:'Нет',
                handler: function () { this.up('window').close(); }
            }]
        }).show();
    },

    ViewWindow(){
        this.redirectTo('user_front');
        code=`Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code');`
        date_end=Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('date_end');
        Ext.create('Ext.panel.Panel',{
            alias: 'viewModel.add',
            title:'Просмотр заявки на закупку',
            fullscreen: true,
            frame : true,
            height : 540,
            width : 550,
            closable: true,
            resizable: false,
            titleCollapse: true,
            bodyPadding: 10,
            floating: true,
            autoShow: true,
            id:'ViewZak',
            layout: {
                type: 'vbox',
            },
            autoScroll: true,
            items: [{
                    xtype:'displayfield',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code'),
                    fieldLabel: 'Код конкурса',
                    id: "code",
                    margin: '0 0 0 10'
                }, {
                    xtype:'displayfield',
                    fieldLabel: 'Наименование конкурса',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('name'),
                    name: 'name',
                    id: "name",
                    margin: '0 0 0 10'
                }, {
                    xtype:'displayfield',
                    fieldLabel: 'Вид закупки',
                    name: 'object',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('object'),
                    id: "object",
                    margin: '0 0 0 10'
                }, {
                    layout:{
                        type: 'hbox'
                    },
                    items:[
                        {
                            xtype:'displayfield',
                            fieldLabel: 'Начальная Цена',
                            name: 'price',
                            value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('price'),
                            id: "price",
                            margin: '0 0 0 10'
                        }, {
                            xtype: 'displayfield',
                            value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('valute'),
                            name: 'currency',
                            id: "currency",
                            margin: '0 0 0 10'
                        }
                    ]},
                {
                    xtype:'displayfield',
                    fieldLabel: 'Статус',
                    name: 'status',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('status'),
                    id: "status",
                    margin: '0 0 0 10'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'Объект закупки',
                    name: 'name_thing',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('namething'),
                    id: "name_thing",
                    margin: '0 0 0 10'
                },
                {
                    xtype:'displayfield',
                    fieldLabel: 'Сведения об организаторе',
                    margin: '0 0 0 10'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'Название',
                    name: 'name_org',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('name_org'),
                    id: "name_org",
                    margin: '0 0 0 10'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'ИНН',
                    name: 'inn',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('inn'),
                    id: "inn",
                    margin: '0 0 0 10'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'Телефон',
                    name: 'phone',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('phone'),
                    id: "phone",
                    margin: '0 0 0 10'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'Почта',
                    name: 'email',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('email'),
                    id: "email",
                    margin: '0 0 0 10'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'Адрес',
                    name: 'adres',
                    value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('adres'),
                    id: "adres",
                    margin: '0 0 0 10'
                }
            ],

            buttons: [{
                text: 'Подать заявку',
                formBind: true,
                margin: '0 310 0 0',
                listeners:{
                    click:'CreateWindow'
                }
            },
                {
                    text: 'Выход',
                    formBind: true,
                    margin: '0 10 0 0',
                    handler: function () { this.up('panel').close(); }
                },
            ],renderTo: Ext.getBody()
        })
    },

    ViewWindowDirector(){
        var month = Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('date').substring(5,7);
        var day = Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('date').substring(8,10);
        var year = Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('date').substring(0,4);
        var date = month+"/"+day+"/"+year;
        Ext.create('Ext.panel.Panel',{
            alias: 'viewModel.add',
            title:'Просмотр заявки',
            fullscreen: true,
            frame : true,
            height : 500,
            width : 510,
            id:'View_zak',
            closable: true,
            resizable: false,
            titleCollapse: true,
            bodyPadding: 10,
            floating: true,
            autoShow:true,
            layout: {
                type: 'vbox',
            },
            autoScroll: true,
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: "Описание иных документов",
                    maxLength: 100,
                    value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('definition'),
                    id:"description",
                    margin: '0 0 0 10'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: "Иные документы",
                    margin: '0 20 0 10'
                },{
                    items:[
                        {
                            xtype: 'button',
                            iconCls:'x-fa fa-trash-alt',
                            text:'Удалить',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }, {
                            xtype: 'button',
                            iconCls:'x-fa fa-exchange-alt',
                            text:'Редактировать путь к файлу',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }
                    ]},
                {
                    xtype: 'displayfield',
                    fieldLabel: "Гарантийное письмо",
                    margin: '0 0 0 10'
                },{
                    items:[
                        {
                            xtype: 'button',
                            iconCls:'x-fa fa-trash-alt',
                            text:'Удалить',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }, {
                            xtype: 'button',
                            iconCls:'x-fa fa-exchange-alt',
                            text:'Редактировать путь к файлу',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }
                    ]},{
                    xtype:'displayfield',
                    value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('phone'),
                    fieldLabel: 'Телефон',
                    name: 'phone',
                    id: "phone",
                    allowBlank: false,
                    margin: '20 0 0 10'
                }, {
                    xtype:'displayfield',
                    fieldLabel: 'Наименование товара',
                    value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('name_thing'),
                    name: 'name_thing',
                    id: "name_thing",
                    maxLength: 100,
                    margin: '20 0 0 10',
                }, {
                    xtype:'displayfield',
                    fieldLabel: 'Торговая марка',
                    name: 'trademark',
                    value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('trademark'),
                    id: "trademark",
                    maxLength: 100,
                    margin: '20 0 0 10',
                }, {
                    layout: {
                        type: 'hbox'
                    }, items: [{
                        xtype: 'displayfield',
                        fieldLabel: 'Объём',
                        name: 'volume',
                        value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('volume'),
                        inputMask: '9999',
                        id: "volume",
                        allowBlank: false,
                        margin: '20 10 0 10'
                    }, {
                        xtype: 'displayfield',
                        id: "ei",
                        value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('ei'),
                        margin: '20 0 0 0'
                    }]
                },{
                    layout:{
                        type: 'hbox'
                    },
                    items:[
                        {
                            xtype:'displayfield',
                            fieldLabel: 'Цена',
                            name: 'price',
                            value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('price'),
                            id: "price",
                            allowBlank: false,
                            margin: '20 0 0 10'
                        }, {
                            xtype: 'displayfield',
                            value: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('valute'),
                            name: 'currency',
                            id: "currency",
                            margin: '20 0 0 10'
                        }
                    ]},{
                    xtype:'displayfield',
                    anchor: '100%',
                    value: date,
                    fieldLabel: 'Срок поставки',
                    name: 'date',
                    //maxValue: new Date(),
                    margin: '20 0 0 10'
                }
            ],

            buttons: [{
                text: 'Уточнить',
                formBind: true,
                margin: '0 300 0 0',
                handler: function() {
                    Ext.Ajax.request({
                        "method": 'post',
                        "url": 'http://localhost:8080/id_user',
                        "params": {
                            id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser'),
                        }
                    }).then(response => {
                        Ext.Ajax.request({
                            "method": 'post',
                            "url": 'http://localhost:8080/bells'
                        }).then(response => {
                            Ext.Ajax.request({
                                "method": 'post',
                                "url": 'http://localhost:8080/bell_user',
                                "params": {
                                    id_user: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser'),
                                    id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('zak')
                                }
                            }).then(response => {
                                Ext.Ajax.request({
                                    "method": 'post',
                                    "url": 'http://localhost:8080/bell_add',
                                    "params": {
                                        code: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('code'),
                                        name: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('name'),
                                        object: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('object'),
                                        status: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('status'),
                                        price1: Ext.getCmp('price').rawValue,
                                        subject: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('subject'),
                                        phone1: Ext.getCmp('phone').rawValue,
                                        name_thing1: Ext.getCmp('name_thing').rawValue,
                                        trademark1: Ext.getCmp('trademark').rawValue,
                                        volume1: Ext.getCmp('volume').rawValue,
                                        ei1: Ext.getCmp('ei').rawValue,
                                        valute1: Ext.getCmp('valute').rawValue,
                                        date: date,
                                        date_end: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('dend'),
                                        definition: Ext.getCmp('description').rawValue,
                                        bell_id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('zak'),
                                    }
                                }).then(response => {
                                    Ext.Ajax.request({
                                        "method": 'post',
                                        "url": 'http://localhost:8080/director_delete',
                                        "params": {
                                            id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('id')
                                        }
                                    }).then(response => {
                                        Ext.Ajax.request({
                                            "method": 'post',
                                            "url": 'http://localhost:8080/bell_color',
                                            "params": {
                                                id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser'),
                                            }
                                        }).then(response => {
                                            if(Number(Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser')) === id_user){
                                                Ext.getCmp('bell_button').setStyle(
                                                    'background', '#FF0100'
                                                )
                                            }
                                            Ext.getCmp('DirectorGrid').getStore().reload();
                                            Ext.Msg.alert("Успешно", "Заявка № " + Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('code') + " на участие была передана на доработку пользователю")
                                            Ext.getCmp('View_zak').close();
                                            Ext.getCmp('BellGrid').getStore().reload();
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
            },
                {
                    text: 'Отправить',
                    formBind: true,
                    margin: '0 10 0 0',
                    handler: function() {
                        Ext.Ajax.request({
                            "method": 'post',
                            "url": 'http://localhost:8080/id_user',
                            "params": {
                                id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser'),
                            }
                        }).then(response => {
                            Ext.Ajax.request({
                                "method": 'post',
                                "url": 'http://localhost:8080/site_add',
                                "params": {
                                    code: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('code'),
                                    name: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('name'),
                                    object: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('object'),
                                    status: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('status'),
                                    price1: Ext.getCmp('price').rawValue,
                                    subject: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('subject'),
                                    phone1: Ext.getCmp('phone').rawValue,
                                    name_thing1: Ext.getCmp('name_thing').rawValue,
                                    trademark1: Ext.getCmp('trademark').rawValue,
                                    volume1: Ext.getCmp('volume').rawValue,
                                    ei1: Ext.getCmp('ei').rawValue,
                                    valute1: Ext.getCmp('valute').rawValue,
                                    date: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('date'),
                                    dend: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('dend'),
                                    id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser')
                                    //description: Ext.getCmp('description').rawValue
                                }
                            }).then(response => {
                                console.log(Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser'));
                                console.log(id_user);
                                if(Number(Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('idUser'))===id_user){
                                    Ext.getCmp('rez_button').setStyle(
                                        'background', '#FF0100'
                                    );
                                }
                                Ext.getCmp('View_zak').close();
                                Ext.Msg.alert("Успешно", "Заявка на участие была отправлена на внешний источник");
                            });
                            Ext.Ajax.request({
                                "method": 'post',
                                "url": 'http://localhost:8080/director_delete',
                                "params": {
                                    id: Ext.getCmp('DirectorGrid').getSelectionModel().getSelection()[0].get('id')
                                }
                            }).then(response => {
                                Ext.getCmp('DirectorGrid').getStore().reload();
                                Ext.getCmp('RezGrid').getStore().reload();
                            });
                        })
                    }
                },
            ],renderTo: Ext.getBody()
        })
    },

    CreateWindowBell() {
        var date = Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('date');
        console.log(date);
        if (date!==null) {
        var month = Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('date').substring(5, 7);
        var day = Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('date').substring(8, 10);
        var year = Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('date').substring(0, 4);
        date = month + "/" + day + "/" + year;
    }
        Ext.apply(Ext.form.field.VTypes, passStringVType);
        Ext.apply(Ext.form.field.VTypes, passIntVType);
        Ext.create('Ext.panel.Panel',{
            alias: 'viewModel.add',
            title:'Просмотр заявки',
            fullscreen: true,
            frame : true,
            height : 500,
            id:'BellWindow',
            width : 510,
            closable: true,
            resizable: false,
            titleCollapse: true,
            bodyPadding: 10,
            floating: true,
            autoShow:true,
            layout: {
                type: 'vbox',
            },
            autoScroll: true,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: "Описание иных документов",
                    maxLength: 100,
                    value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('definition'),
                    id:"description",
                    margin: '0 0 0 10',
                    vtype:'passString'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: "Иные документы",
                    margin: '0 20 0 10'
                },{
                    items:[
                        {
                            xtype: 'button',
                            iconCls:'x-fa fa-trash-alt',
                            text:'Удалить',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }, {
                            xtype: 'button',
                            iconCls:'x-fa fa-exchange-alt',
                            text:'Редактировать путь к файлу',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }
                    ]},
                {
                    xtype: 'displayfield',
                    fieldLabel: "Гарантийное письмо",
                    margin: '0 0 0 10'
                },{
                    items:[
                        {
                            xtype: 'button',
                            iconCls:'x-fa fa-trash-alt',
                            text:'Удалить',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }, {
                            xtype: 'button',
                            iconCls:'x-fa fa-exchange-alt',
                            text:'Редактировать путь к файлу',
                            allowBlank: false,
                            margin: '10 0 0 10'
                        }
                    ]},{
                    xtype: 'textfield',
                    fieldLabel: 'Телефон',
                    name: 'phone',
                    placeholder: '(xxx)-xxx-xx-xx',
                    inputMask: '+7-(999)-999-99-99',
                    value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('phone'),
                    id: "phone1",
                    allowBlank: false,
                    margin: '20 0 0 10'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Наименование товара',
                    name: 'name_thing',
                    value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('namething'),
                    id: "name_thing1",
                    maxLength: 100,
                    margin: '20 0 0 10',
                    vtype:'passString'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Торговая марка',
                    value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('trademark'),
                    name: 'trademark',
                    id: "trademark1",
                    maxLength: 100,
                    margin: '20 0 0 10',
                    vtype:'passString'
                }, {
                    layout: {
                        type: 'hbox'
                    }, items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Объём',
                        name: 'volume',
                        value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('volume'),
                        width: 200,
                        maxLength: 10,
                        vtype:'passInt',
                        id: "volume1",
                        allowBlank: false,
                        margin: '20 0 0 10'
                    }, {
                        xtype: 'combobox',
                        value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('ei'),
                        name: 'ei',
                        store: new Ext.data.SimpleStore({
                            id: 0,
                            fields:
                                [
                                    'myId',   //числовое значение - номер элемента
                                    'myText' //текст
                                ],
                            data: ei
                        }),
                        valueField: 'myId',
                        id: "ei1",
                        width:70,
                        displayField: 'myText',
                        queryMode: 'local',
                        margin: '20 0 0 10'
                    }]
                },{
                    layout:{
                        type: 'hbox'
                    },
                    items:[
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Цена',
                            width: 200,
                            maxLength: 10,
                            name: 'price',
                            value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('price'),
                            vtype:'passInt',
                            id: "price1",
                            allowBlank: false,
                            margin: '20 0 0 10'
                        }, {
                            xtype: 'combobox',
                            value: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('valute'),
                            name: 'valute1',
                            store: new Ext.data.SimpleStore({
                                id: 0,
                                fields:
                                    [
                                        'myId',   //числовое значение - номер элемента
                                        'myText' //текст
                                    ],
                                data: currency
                            }),
                            valueField: 'myId',
                            id: "valute1",
                            width:70,
                            displayField: 'myText',
                            queryMode: 'local',
                            margin: '20 0 0 10'
                        }
                    ]},{
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Срок поставки',
                    name: 'date',
                    value: date,
                    id:'date',
                    //maxValue: new Date(),
                    margin: '20 0 0 10'
                }
            ],

            buttons: [{
                text: 'Сохранить',
                formBind: true,
                margin: '0 300 0 0',
                listeners:{
                    click: 'SaveBell'
                }
            },
                {
                    text: 'Отправить',
                    formBind: true,
                    margin: '0 10 0 0',
                    listeners:{
                        click: 'Add_zak_user_From_Bell'
                    }
                },
            ],renderTo: Ext.getBody()
        })
    },

    CreateWindow(){
        Ext.apply(Ext.form.field.VTypes, passStringVType);
        Ext.apply(Ext.form.field.VTypes, passIntVType);
        start_price = Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('price')
        Ext.Ajax.request({
            "method": 'post',
            "url": 'http://localhost:8080/zak_rez_code',
            "params": {
                code: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code'),
                id_user: id_user
            }
        }).then(response => {
            if(response.responseText !== ""){
                Ext.Msg.alert("Ошибка", "Заявка этого конкурса уже была отправлена на внешний источник. Ждите результатов.")
            }
            else{
                Ext.Ajax.request({
                    "method": 'post',
                    "url": 'http://localhost:8080/zak_user_code',
                    "params": {
                        code: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code'),
                        id_user: id_user
                    }
                }).then(response => {
                    if (response.responseText !== "") {
                        Ext.Msg.alert("Ошибка", "Заявка этого конкурса уже была отправлена директору");
                    } else {
                        Ext.getCmp('ViewZak').close();
                        Ext.create('Ext.panel.Panel', {
                            alias: 'viewModel.add',
                            title: 'Просмотр заявки',
                            fullscreen: true,
                            frame: true,
                            height: 500,
                            width: 510,
                            closable: true,
                            id:'Add_zak',
                            resizable: false,
                            titleCollapse: true,
                            bodyPadding: 10,
                            floating: true,
                            autoShow: true,
                            layout: {
                                type: 'vbox',
                            },
                            autoScroll: true,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: "Описание иных документов",
                                maxLength: 100,
                                id: "description1",
                                margin: '0 0 0 10',
                                vtype:'passString'
                            },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: "Иные документы",
                                    margin: '0 20 0 10'
                                }, {
                                    items: [
                                        {
                                            xtype: 'button',
                                            iconCls: 'x-fa fa-trash-alt',
                                            text: 'Удалить',
                                            allowBlank: false,
                                            margin: '10 0 0 10'
                                        }, {
                                            xtype: 'button',
                                            iconCls: 'x-fa fa-exchange-alt',
                                            text: 'Редактировать путь к файлу',
                                            allowBlank: false,
                                            margin: '10 0 0 10'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: "Гарантийное письмо",
                                    margin: '0 0 0 10'
                                }, {
                                    items: [
                                        {
                                            xtype: 'button',
                                            iconCls: 'x-fa fa-trash-alt',
                                            text: 'Удалить',
                                            allowBlank: false,
                                            margin: '10 0 0 10'
                                        }, {
                                            xtype: 'button',
                                            iconCls: 'x-fa fa-exchange-alt',
                                            text: 'Редактировать путь к файлу',
                                            allowBlank: false,
                                            margin: '10 0 0 10'
                                        }
                                    ]
                                }, {
                                    xtype: 'textfield',
                                    fieldLabel: 'Телефон',
                                    name: 'phone',
                                    placeholder: '(xxx)-xxx-xx-xx',
                                    inputMask: '+7-(999)-999-99-99',
                                    id: "phone1",
                                    allowBlank: false,
                                    margin: '20 0 0 10'
                                }, {
                                    xtype: 'textfield',
                                    fieldLabel: 'Наименование товара',
                                    name: 'name_thing',
                                    id: "name_thing1",
                                    maxLength: 100,
                                    margin: '20 0 0 10',
                                    vtype:'passString'
                                }, {
                                    xtype: 'textfield',
                                    fieldLabel: 'Торговая марка',
                                    name: 'trademark',
                                    id: "trademark1",
                                    maxLength: 100,
                                    margin: '20 0 0 10',
                                    vtype:'passString'
                                }, {
                                    layout: {
                                        type: 'hbox'
                                    }, items: [{
                                        xtype: 'textfield',
                                        fieldLabel: 'Объём',
                                        name: 'volume',
                                        width: 200,
                                        maxLength: 10,
                                        id: "volume1",
                                        allowBlank: false,
                                        margin: '20 0 0 10',
                                        vtype: 'passInt'
                                    }, {
                                        xtype: 'combobox',
                                        value: 'шт',
                                        name: 'ei',
                                        store: new Ext.data.SimpleStore({
                                            id: 0,
                                            fields:
                                                [
                                                    'myId',   //числовое значение - номер элемента
                                                    'myText' //текст
                                                ],
                                            data: ei
                                        }),
                                        valueField: 'myId',
                                        id: "ei1",
                                        width: 70,
                                        displayField: 'myText',
                                        queryMode: 'local',
                                        margin: '20 0 0 10'
                                    }]
                                }, {
                                    layout: {
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Цена',
                                            width: 200,
                                            maxLength: 10,
                                            name: 'price',
                                            value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('price'),
                                            vtype:'passInt',
                                            id: "price1",
                                            allowBlank: false,
                                            margin: '20 0 0 10'
                                        }, {
                                            xtype: 'combobox',
                                            value: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('valute'),
                                            name: 'valute1',
                                            store: new Ext.data.SimpleStore({
                                                id: 0,
                                                fields:
                                                    [
                                                        'myId',   //числовое значение - номер элемента
                                                        'myText' //текст
                                                    ],
                                                data: currency
                                            }),
                                            valueField: 'myId',
                                            id: "valute1",
                                            width: 70,
                                            displayField: 'myText',
                                            queryMode: 'local',
                                            margin: '20 0 0 10'
                                        }
                                    ]
                                }, {
                                    xtype: 'datefield',
                                    anchor: '100%',
                                    fieldLabel: 'Срок поставки',
                                    name: 'date',
                                    id: 'date',
                                    //maxValue: new Date(),
                                    margin: '20 0 0 10'
                                }
                            ],

                            buttons: [{
                                text: 'Уточнить',
                                formBind: true,
                                margin: '0 300 0 0',
                                listeners: {
                                    click: 'AddBell'
                                }
                            },
                                {
                                    text: 'Отправить',
                                    formBind: true,
                                    margin: '0 10 0 0',
                                    listeners: {
                                        click: 'Add_zak_user'
                                    }
                                },
                            ], renderTo: Ext.getBody()
                        })
                    }
                })
            }
        });
    },

    SaveBell(){
        Ext.Ajax.request({
            "method": 'post',
            "url": 'http://localhost:8080/bell_save',
            "params": {
                code: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('code'),
                name: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('name'),
                object: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('object'),
                status: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('status'),
                price1: Ext.getCmp('price1').rawValue,
                subject: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('subject'),
                phone1: Ext.getCmp('phone1').rawValue,
                name_thing1: Ext.getCmp('name_thing1').rawValue,
                trademark1: Ext.getCmp('trademark1').rawValue,
                volume1: Ext.getCmp('volume1').rawValue,
                ei1: Ext.getCmp('ei1').rawValue,
                valute1: Ext.getCmp('valute1').rawValue,
                date: Ext.getCmp('date').rawValue,
                date_end: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('dend'),
                definition: Ext.getCmp('description').rawValue,
                id: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('userid'),
                bell_id: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('bell')
            }
        }).then(response => {
            console.log(response.responseText);
            //var dend = Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('dend');
            //var month = dend.substring(5,7);
            //var  day = dend.substring(8,10);
            //var  year = dend.substring(0,4);
            //dend = month+"/"+day+"/"+year;
            Ext.Msg.alert("Успешно", "Сохранения успешны");
            Ext.getCmp('BellGrid').getStore().reload();
        });
    },

    AddBell(){
        Ext.Ajax.request({
            "method": 'post',
            "url": 'http://localhost:8080/id_user',
            "params": {
                id: id_user,
            }
        }).then(response => {
            console.log(Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('userid'));
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/bells'
            }).then(response =>{
                Ext.Ajax.request({
                    "method": 'post',
                    "url": 'http://localhost:8080/bell_user',
                    "params": {
                        id_user: id_user,
                        id: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('userid')
                    }
                }).then(response => {
                    if (response.responseText === "1"){
                        Ext.Msg.alert("Ошибка", "Заявка этого конкурса уже была отправлена на доработку");
                    }
                    else {
                        Ext.Ajax.request({
                            "method": 'post',
                            "url": 'http://localhost:8080/bell_add',
                            "params": {
                                code: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code'),
                                name: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('name'),
                                object: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('object'),
                                status: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('status'),
                                price1: Ext.getCmp('price1').rawValue,
                                subject: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('subject'),
                                phone1: Ext.getCmp('phone1').rawValue,
                                name_thing1: Ext.getCmp('name_thing1').rawValue,
                                trademark1: Ext.getCmp('trademark1').rawValue,
                                volume1: Ext.getCmp('volume1').rawValue,
                                ei1: Ext.getCmp('ei1').rawValue,
                                valute1: Ext.getCmp('valute1').rawValue,
                                date: Ext.getCmp('date').rawValue,
                                date_end: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('dend'),
                                definition: Ext.getCmp('description1').rawValue,
                                bell_id: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('userid'),
                                //start_price: start_price
                            }
                        }).then(response => {
                            Ext.Ajax.request({
                                "method": 'post',
                                "url": 'http://localhost:8080/bell_color',
                                "params": {
                                    id: id_user
                                }
                            }).then(response => {
                                Ext.getCmp('bell_button').setStyle(
                                    'background', '#FF0100'
                                );
                                var dend = Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('dend');
                                var month = dend.substring(5, 7);
                                var day = dend.substring(8, 10);
                                var year = dend.substring(0, 4);
                                dend = month + "/" + day + "/" + year;
                                Ext.getCmp('Add_zak').close();
                                Ext.Msg.alert("Успешно", 'Заявка на участие № ' + Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code') + ' была передана на уточнение.' +
                                    'Не забудьте дополнить ее до ' + dend);
                                Ext.getCmp('BellGrid').getStore().reload();
                            });
                        });
                    }
                });
            });
        });
    },

    Add_zak_user(){
        if(Ext.getCmp('phone1').rawValue.length==18) {
            if (Ext.getCmp('description1').rawValue === "" || Ext.getCmp('phone1').rawValue === "" ||
                Ext.getCmp('name_thing1').rawValue === "" || Ext.getCmp('trademark1').rawValue === "" ||
                Ext.getCmp('volume1').rawValue === "" || Ext.getCmp('price1').rawValue === "" || Ext.getCmp('date').rawValue === "") {
                Ext.Msg.alert("Ошибка", "Заполните все поля");
            } else {
                if (Ext.getCmp('price1').rawValue > start_price) {
                    Ext.Msg.alert("Ошибка", "Заданная цена должна быть меньше начальной!");
                } else {
                    Ext.Ajax.request({
                        method: 'post',
                        url: 'http://localhost:8080/id_user',
                        params: {
                            id: id_user,
                        }
                    }).then(response => {
                        Ext.Ajax.request({
                            method: 'post',
                            "url": 'http://localhost:8080/zak_user',
                            "params": {
                                code: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code'),
                                name: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('name'),
                                object: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('object'),
                                status: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('status'),
                                price1: Ext.getCmp('price1').rawValue,
                                subject: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('subject'),
                                phone1: Ext.getCmp('phone1').rawValue,
                                name_thing1: Ext.getCmp('name_thing1').rawValue,
                                trademark1: Ext.getCmp('trademark1').rawValue,
                                volume1: Ext.getCmp('volume1').rawValue,
                                ei1: Ext.getCmp('ei1').rawValue,
                                valute1: Ext.getCmp('valute1').rawValue,
                                date: Ext.getCmp('date').rawValue,
                                dend: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('dend'),
                                description: Ext.getCmp('description1').rawValue,
                                login_user: id_user,
                                bell: Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('userid'),
                                start_price: start_price
                            }
                        }).then(response => {
                            Ext.getCmp('Add_zak').close();
                            Ext.Msg.alert("Успешно", "Заявка на участие № " + Ext.getCmp('UserGrid').getSelectionModel().getSelection()[0].get('code') + " была отправлена на проверку директору.");
                            Ext.getCmp('DirectorGrid').getStore().reload();
                            return Ext.decode(response.responseText)
                        })
                    });
                }
            }
        }
},
    Add_zak_user_From_Bell(){
        if(Ext.getCmp('description').rawValue === "" || Ext.getCmp('phone1').rawValue === "" ||
            Ext.getCmp('name_thing1').rawValue === "" || Ext.getCmp('trademark1').rawValue === "" ||
            Ext.getCmp('volume1').rawValue === "" || Ext.getCmp('price1').rawValue === "" || Ext.getCmp('date').rawValue === ""){
            Ext.Msg.alert("Ошибка", "Заполните все поля");
        }
        else {
            if (Ext.getCmp('price1').rawValue > start_price) {
                Ext.Msg.alert("Ошибка", "Заданная цена должна быть меньше начальной!");
            } else {
                Ext.Ajax.request({
                    method: 'post',
                    url: 'http://localhost:8080/id_user',
                    params: {
                        id: id_user,
                    }
                }).then(response => {
                    Ext.Ajax.request({
                        method: 'post',
                        "url": 'http://localhost:8080/zak_user',
                        "params": {
                            code: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('code'),
                            name: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('name'),
                            object: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('object'),
                            status: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('status'),
                            price1: Ext.getCmp('price1').rawValue,
                            subject: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('subject'),
                            phone1: Ext.getCmp('phone1').rawValue,
                            name_thing1: Ext.getCmp('name_thing1').rawValue,
                            trademark1: Ext.getCmp('trademark1').rawValue,
                            volume1: Ext.getCmp('volume1').rawValue,
                            ei1: Ext.getCmp('ei1').rawValue,
                            valute1: Ext.getCmp('valute1').rawValue,
                            date: Ext.getCmp('date').rawValue,
                            dend: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('dend'),
                            description: Ext.getCmp('description').rawValue,
                            login_user: id_user,
                            bell: Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('bell'),
                        }
                    }).then(response => {
                        Ext.getCmp('BellWindow').close();
                        Ext.Msg.alert("Успешно", "Заявка на участие № " + Ext.getCmp('BellGrid').getSelectionModel().getSelection()[0].get('code') + " была отправлена на проверку директору.");
                        Ext.getCmp('DirectorGrid').getStore().reload();
                        Ext.getCmp('BellGrid').getStore().reload();
                        return Ext.decode(response.responseText)
                    })
                });
            }
        }
    },

    AddWindow(){
        Ext.apply(Ext.form.field.VTypes, passFIOVType);
        Ext.apply(Ext.form.field.VTypes, passLoginVType);
        var randomstring = Math.random().toString(36).slice(-8);
        Ext.create('Ext.panel.Panel',{
            alias: 'viewModel.add',
            title:'Добавление пользователя',
            fullscreen: true,
            frame : true,
            height : 430,
            width : 350,
            closable: true,
            resizable: false,
            titleCollapse: true,
            bodyPadding: 10,
            floating: true,
            autoShow:true,
            id:'add123',
            layout: {
                type: 'vbox',
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ФИО',
                    name: 'fio',
                    id: "fio",
                    vtype:'passFIO',
                    allowBlank: false,
                    margin: '20 0 0 30'
                }, {
                    xtype: 'textfield',
                    maxLength:12,
                    minLength:4,
                    fieldLabel: 'Логин',
                    name: 'login',
                    id: "login",
                    vtype:'passLogin',
                    allowBlank: false,
                    margin: '20 0 0 30'
                },{
                    xtype:'displayfield',
                    fieldLabel: 'Пароль',
                    value: randomstring,
                    id: "password",
                    allowBlank: false,
                    margin: '20 0 0 30'
                }, {
                    xtype: 'displayfield',
                    value: "Внимание: Обязательно запишите пароль",
                    fieldStyle: 'color: #820009cc',
                    margin: '0 0 0 30'
                }, {
                    fieldLabel: 'Роль',
                    xtype: 'combobox',
                    value: 'Пользователь',
                    name: 'role',
                    store: new Ext.data.SimpleStore({
                        id: 0,
                        fields:
                            [
                                'myId',   //числовое значение - номер элемента
                                'myText' //текст
                            ],
                        data: rights
                    }),
                    valueField: 'myId',
                    id: "user_right",
                    displayField: 'myText',
                    queryMode: 'local',
                    margin: '20 0 0 30'
                },
            ],

            buttons: [{
                text: 'ОК',
                formBind: true,
                listeners:{
                    click: 'AddUser'
                },
            }
            ],renderTo: Ext.getBody()
        })
    },
    AddUser() {
        if(FIOVType !== false && LoginVType !== false) {
            login = Ext.getCmp("login").getValue(),
                fio = Ext.getCmp("fio").getValue(),
                password = Ext.getCmp("password").getValue(),
                user_right = Ext.getCmp("user_right").getValue()
            if (user_right === 1) {
                user_right = "Администратор"
            } else if (user_right === 2) {
                user_right = "Пользователь"
            } else if (user_right === 3) {
                user_right = "Директор"
            }
            if (fio === "" || password === "" || login === "") {
                Ext.Msg.alert("Ошибка", "Не все ячейки заполнены");
            } else {
                this.checkLoginAndPassword({
                    login: login,
                    password: password
                }).then(result => {
                    if (result.success) {
                        Ext.Msg.alert("Ошибка", "Пользователь с данным логином уже есть в системе");
                    } else {
                        this.addUser();
                        Ext.Msg.alert("Успешно", "Пользователь добавлен в систему");
                        Ext.getCmp('AdminGrid').getStore().reload();
                        Ext.getCmp('add123').close();
                    }
                }).otherwise(console.error);
            }
        }
    },
    DeleteWindow(){
        var i =0, str ="Вы уверены, что хотите удалить этих пользователей?";
        if (fio_del !== [] && id_del !== []) {fio_del=[]; id_del=[]}
        while(Ext.getCmp('AdminGrid').getSelectionModel().getSelection()[i] != null) {
            fio_del[i] =Ext.getCmp('AdminGrid').getSelectionModel().getSelection()[i].get('fio');
            id_del[i] =Ext.getCmp('AdminGrid').getSelectionModel().getSelection()[i].get('id');
            i=i+1;
        }
        if(fio_del.length === 0){
            Ext.Msg.alert("Ошибка", "Выберите пользователей для удаления");
        }
        else {
            if(fio_del.length === 1) {
                str = "Вы уверены, что хотите удалить этого пользователя?";
                str_final = "Пользователь удален из системы";
            }
            Ext.create('Ext.panel.Panel', {
                alias: 'viewModel.delete',
                title: 'Удаление пользователей',
                fullscreen: true,
                frame: true,
                height: 400,
                width: 350,
                closable: true,
                resizable: false,
                titleCollapse: true,
                bodyPadding: 10,
                floating: true,
                autoShow: true,
                autoScroll: true,
                layout: {
                    type: 'vbox',
                },
                items: [
                    {
                        xtype: 'displayfield',
                        value: str,
                        margin: '20 0 0 40'
                    },
                    {
                        xtype: 'displayfield',
                        width: 250,
                        value: fio_del,
                        margin: '20 0 0 40'
                    }
                ],
                buttons: [{
                    text: 'Да',
                    formBind: true,
                    margin: '0 140 0 0',
                    handler: function () {
                        var i=0;
                        var id=[];
                        console.log(id_del);
                        while(i<id_del.length) {
                            id[i]=id_del[i];
                            i=i+1;
                        }
                        console.log(id);
                        Ext.Ajax.request({
                            method: 'post',
                            url: 'http://localhost:8080/delete',
                            params: {
                                id
                            }
                        });
                        Ext.Msg.alert("Успешно", str_final);
                        Ext.getCmp('AdminGrid').getStore().reload();
                        this.up('panel').close();
                    },
                },{
                    text: 'Нет',
                    formBind: true,
                    handler: function () { this.up('panel').close(); }
                }
                ], renderTo: Ext.getBody()
            });
        }
    },

    ChangeWindow(){
        var i=0;
        var id_change="";
        while(Ext.getCmp('AdminGrid').getSelectionModel().getSelection()[i] != null) {
            user_right =Ext.getCmp('AdminGrid').getSelectionModel().getSelection()[i].get('user_right');
            id_change =Ext.getCmp('AdminGrid').getSelectionModel().getSelection()[i].get('id');
            i=i+1;
        }
        if(i>1)
            Ext.Msg.alert("Ошибка", "Необходимо выбрать только одного пользователя");
        else if (i===0)
            Ext.Msg.alert("Ошибка", "Нужный пользователь не выбран");
        else {
            console.log(user_right);
            console.log(id_change);
            var disable1=false;
            var disable2=false;
            var disable3=false;
            if(user_right ==="Пользователь"){
                disable1=true
            }
            else  if(user_right ==="Директор"){
                disable2=true
            }
            else  if(user_right ==="Администратор"){
                disable3=true
            }
            Ext.create('Ext.panel.Panel', {
                id: 'change_status',
                title: 'Изменение статуса',
                fullscreen: true,
                frame: true,
                height: 200,
                width: 250,
                closable: true,
                resizable: false,
                titleCollapse: true,
                bodyPadding: 10,
                floating: true,
                autoShow: true,
                layout: {
                    type: 'vbox',
                },
                items: [
                    {
                        xtype: 'radiogroup',
                        id:'radio',
                        vertical: true,
                        columns: 1,
                        items: [
                            {
                                margin: '0 0 0 10',
                                boxLabel: 'Пользователь',
                                checked: true,
                                disabled: disable1,
                                name: 'topping',
                                inputValue: '1',
                                id: 'checkbox1'
                            }, {
                                margin: '0 0 0 10',
                                boxLabel: 'Директор',
                                disabled: disable2,
                                name: 'topping',
                                inputValue: '2',
                                id: 'checkbox2'
                            }, {
                                margin: '0 0 0 10',
                                boxLabel: 'Администратор',
                                name: 'topping',
                                disabled: disable3,
                                inputValue: '3',
                                id: 'checkbox3'
                            }
                        ]
                    }
                ],
                buttons: [{
                    text: 'Да',
                    formBind: true,
                    margin: '0 80 0 0',
                    handler: function () {
                        box="";
                        if(Ext.getCmp('checkbox1').getValue())
                            box = Ext.getCmp('checkbox1').boxLabel
                        else if(Ext.getCmp('checkbox2').getValue())
                            box = Ext.getCmp('checkbox2').boxLabel
                        else if(Ext.getCmp('checkbox3').getValue())
                            box = Ext.getCmp('checkbox3').boxLabel
                        console.log(box)
                        Ext.Ajax.request({
                            method: 'post',
                            url: 'http://localhost:8080/change',
                            params: {
                                user_right: box,
                                id: id_change,
                            }
                        })
                        Ext.Msg.alert("Успешно", "Права пользователя изменены");
                        Ext.getCmp('AdminGrid').getStore().reload();
                        this.up('panel').close();
                    },
                }, {
                    text: 'Выход',
                    formBind: true,
                    handler: function () { this.up('panel').close(); }
                }
                ], renderTo: Ext.getBody()
            })
        }
    },

    updateUser({id, login, password, fio}) {
        return Ext.Ajax.request({
            "method": 'post',
            "url": 'http://localhost:8080/update',
            "params": {
                id,
                login,
                password,
                fio
            }
        }).then(response => {
            console.log(response.responseText);
            return Ext.decode(response.responseText)
        })
    },

    checkLoginAndPassword({login, password}) {
        return Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/login',
            params: {
                login,
                password
            }
        }).then(response => {
            console.log(response.responseText);
            return Ext.decode(response.responseText)
        })
    },

    deleteUsers() {
        var i=0;
        var id=[];
        console.log(id_del);
        while(i<id_del.length) {
            id[i]=id_del[i];
            i=i+1;
        }
        console.log(id);
        Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/delete',
            params: {
                id,
                // i
            }
        });
        Ext.Msg.alert("Успешно", str_final);
        Ext.getCmp('AdminGrid').getStore().reload();
    },

    addUser() {
        return Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/add',
            params: {
                login,
                password,
                fio,
                user_right
            }
        }).then(response => {
            return Ext.decode(response.responseText)
        })

    },

    Search() {
        login = Ext.getCmp('search').getValue();
        return Ext.Ajax.request({
            method: 'post',
            url: 'http://localhost:8080/search',
            params: {
                login
            }
        }).then(response => {

            if(login === "" || response.responseText !== "[]"){
                Ext.getCmp('AdminGrid').getStore().reload()
            }
            else {
                Ext.Msg.alert("Ошибка","Пользователя с данным логином в системе нет");
                Ext.getCmp('AdminGrid').getStore().reload()
            }
        })
    },
});