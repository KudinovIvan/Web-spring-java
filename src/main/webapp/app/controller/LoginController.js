
Ext.define('webapp.controller.LoginController', {
    extend : 'Ext.app.ViewController',

    alias: 'controller.login',

    rotes:{
        'user_front': 'UserFront'
    },

    onLoginClick() {

        login_title = Ext.getCmp('login123').getValue();
        this.checkLogin({
            login: Ext.getCmp('login123').getValue()
        }).then( result => {
            if (result.success) {
                this.checkpassword({
                    login: Ext.getCmp('login123').getValue()},
                {
                    password: Ext.getCmp('password').getValue()
                }).then(result => {
                    if (result.success) {
                        id_user = result.id;
                        if (result.users_right === "Администратор") {
                            this.onLoginSuccessAdmin();
                        } else if (result.users_right === "Директор") {
                            this.onLoginSuccessDirector();
                        } else if (result.users_right === "Пользователь") {
                            this.onLoginSuccessUser();
                        }
                    } else {
                        this.onPasswordFailure();
                    }
                }).otherwise(console.error)
            }
            else{
                this.onLoginFailure();
            }
        })
    },


    UserFront(){
        this.getView().close();
    },

    privates:{
        onLoginSuccessAdmin(){
            this.fireViewEvent('logincloseadmin');
            this.getView().close();
           },
        onLoginSuccessUser(){
           this.fireViewEvent('logincloseuser');
            this.getView().close();
        },
        onLoginSuccessDirector(){
            this.fireViewEvent('loginclosedirector');
            this.getView().close();
            },

        onLoginFailure(){
            Ext.Msg.alert("Ошибка","Пользователя с данным логином нет в системе, попробуйте еще раз");
            LoginVType = false;
            PasswordVType = true;
         },
        onPasswordFailure(){
            Ext.Msg.alert("Ошибка","Неверный пароль, попробуйте еще раз");
            LoginVType = true;
            PasswordVType = false;
        },
        checkLogin(login){
            return  Ext.Ajax.request({
                method: 'post',
                url:'http://localhost:8080/login',
                waitMsg : 'Please wait...',
                params:{
                    login
                }
            }).then(response => {
                return Ext.decode(response.responseText)
            })
        },
        checkpassword(login,password){
            return  Ext.Ajax.request({
                method: 'post',
                url:'http://localhost:8080/password',
                waitMsg : 'Please wait...',
                params:{
                    login,
                    password
                }
            }).then(response => {
                return Ext.decode(response.responseText)
            })
        }
    }
});