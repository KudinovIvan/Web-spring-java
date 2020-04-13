Ext.define('webapp.controller.LoginController', {
    extend : 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginClick() {

        this.checkLoginAndPassword({
            login: this.getViewModel().get('login'),
            password: this.getViewModel().get('password')
        }).then(result => {
            if (result.success) {
                if (result.login === "Admin"){
                    this.onLoginSuccessAdmin();
                }
                else if (result.login === "Director"){
                    this.onLoginSuccessDirector();
                }
                else{
                    this.onLoginSuccessUser();
                }
            } else {
                this.onLoginFailure();
            }
        }).otherwise(console.error);

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
            /*this.fireViewEvent('loginclose');
            this.getView().close();
        */
            console.log("Director");
            },

        onLoginFailure(){
            Ext.Msg.alert("Ошибка","Данного пользователя нет в системе");
        },
        checkLoginAndPassword({login, password}){
        return  Ext.Ajax.request({
                method: 'post',
                url:'http://localhost:8080/login',
                params:{
                    login,
                    password
                }
            }).then(response => {
                console.log(response.responseText);
                return Ext.decode(response.responseText)
        })
        }
    }
});