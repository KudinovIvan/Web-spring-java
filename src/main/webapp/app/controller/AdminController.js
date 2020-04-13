Ext.define('webapp.controller.AdminController', {
    extend : 'Ext.app.ViewController',

    alias: 'controller.admin',


    AddUser() {

        this.checkLoginAndPassword({
            login: this.getViewModel().get('fio'),
            password: this.getViewModel().get('fio')
            }).then(result => {
            if (result.success) {
                 Ext.Msg.alert("Ошибка", "Данный пользователь уже есть в системе");
            } else {
                 this.addUser({"login": login, "password": "123456", "fio": fio, "user_right": valueField(1)})
                   }
                }).otherwise(console.error);
               },


    "UpdateUser"() {

    },

    "onLoginSuccessAdmin"() {
         this.fireViewEvent('logincloseadmin');
         this.getView().close();
    },
    "onLoginSuccessUser"() {
         this.fireViewEvent('logincloseuser');
         this.getView().close();
    },
        "onLoginSuccessDirector"() {
            /*this.fireViewEvent('loginclose');
            this.getView().close();
        */
            console.log("Director");
        },

    "updateUser"({id, login, password, fio}) {
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

        "onLoginFailure"() {
            Ext.Msg.alert("Ошибка", "Данного пользователя нет в системе");
        },

        "checkLoginAndPassword"({login, password}) {
            return Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/login',
                "params": {
                    login,
                    password
                }
            }).then(response => {
                console.log(response.responseText);
                return Ext.decode(response.responseText)
            })
        },

        "addUser"({id, login, password, fio}) {
            return Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/add',
                "params": {
                    login,
                    password,
                    fio
                }
            }).then(response => {
                console.log(response.responseText);
                return Ext.decode(response.responseText)
            })
       // }
    },


    "DeleteUsers"() {

    }
})