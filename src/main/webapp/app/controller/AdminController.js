var fio, login, password, user_right,box, res;
var str_final = "Пользователи удалены из системы";
Ext.define('webapp.controller.AdminController', {
    extend : 'Ext.app.ViewController',

    alias: 'controller.admin',

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

    AddUser() {
        login = Ext.getCmp("login").getValue(),
            fio = Ext.getCmp("fio").getValue(),
            password = Ext.getCmp("password").getValue(),
            user_right = Ext.getCmp("user_right").getValue()
            if(user_right === 1){
                user_right = "Администратор"
            }
            else if(user_right === 2){
                user_right = "Пользователь"
            }
            else if (user_right === 3){
                user_right = "Директор"
            }
            if(fio === "" || password === "" || login === "") {
                Ext.Msg.alert("Ошибка", "Не все ячейки заполнены");
            }
            else {
                this.checkLoginAndPassword({
                    login: login,
                    password: password
                }).then(result => {
                    if (result.success) {
                        Ext.Msg.alert("Ошибка", "Данный пользователь уже есть в системе");
                    } else {
                        this.addUser()
                        Ext.Msg.alert("Успешно", "Пользователь добавлен в систему");
                        Ext.getCmp('AdminGrid').getStore().reload();
                    }
                }).otherwise(console.error);
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
                        listeners: {
                            click: 'deleteUsers'
                        }
                    }, {
                        text: 'Нет',
                        formBind: true,
                        /*listeners: {
                            click: 'DeleteUsers'
                        }*/
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
                    },
                }, {
                    text: 'Выход',
                    formBind: true,
                  //  closeAction: 'hide'
                }
                ], renderTo: Ext.getBody()
            })
        }
    },

    AddWindow(){
        var randomstring = Math.random().toString(36).slice(-8);
        Ext.create('Ext.panel.Panel',{
            alias: 'viewModel.add',
            title:'Добавление пользователя',
            fullscreen: true,
            frame : true,
            height : 410,
            width : 350,
            closable: true,
            resizable: false,
            titleCollapse: true,
            bodyPadding: 10,
            floating: true,
            autoShow:true,
            layout: {
                type: 'vbox',
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ФИО',
                    inputMask: '',
                    name: 'fio',
                    id: "fio",
                    allowBlank: false,
                    margin: '20 0 0 30'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Логин',
                    name: 'login',
                    id: "login",
                    allowBlank: false,
                    margin: '20 0 0 30'
                }, {
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
                listeners: {
                    click: 'AddUser'
                },
            }
            ],renderTo: Ext.getBody()
        })
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
            if(response.responseText ===""){
                Ext.Msg.alert("Ошибка","Пользователя с данным логином в системе нет");
                Ext.getCmp('AdminGrid').getView().getRow(1).style.display = 'none';
                console.log(Ext.getCmp('AdminGrid'));
            }
            else {
                //res = response.responseText;
                //Ext.Msg.alert("Нашлось", "Результат поиска "+res);
            }
        })
    },

    DeleteUsers() {

    }

})