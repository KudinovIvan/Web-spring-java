var login_title, id_user ;
Ext.define('webapp.Application',{

    extend:'Ext.app.Application',
    requires:['webapp.view.LogWin.LoginView',
        'webapp.view.UserWin.FrontView',
        'webapp.view.UserWin.ExtendSearch',
        'webapp.view.UserWin.TableGridView',
        'webapp.view.UserWin.UserWindow',
        'webapp.view.AdminWin.AdminView',
        'webapp.view.AdminWin.AdminGrid',
        'webapp.view.AdminWin.AdminWindow',
        "webapp.view.DirectorWin.DirView",
        'webapp.view.DirectorWin.DirGrid',
        "webapp.view.UserWin.TableBell",
        "webapp.view.UserWin.Rezult",
        'webapp.view.DirectorWin.DirectorWindow'
    ],

    store:[
        'webapp.store.UserStore',
        'webapp.store.GridStore'
    ],

    model:[
        'webapp.model.UserModel',
        'webapp.model.GridModel'
    ],

  //  mainView: 'webapp.view.DirectorWin.DirView',

    launch() {
        Ext.apply(Ext.form.field.VTypes, passLoginFrontVType);
        Ext.apply(Ext.form.field.VTypes, passPasswordVType);
        const loginWin =Ext.create('webapp.view.LogWin.LoginView');
        loginWin.on('logincloseuser', 'onLoginCloseUser', this);
        loginWin.on('logincloseadmin', 'onLoginCloseAdmin', this);
        loginWin.on('loginclosedirector', 'onLoginCloseDirector', this);
    },

    onLoginCloseUser(){
        {
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/bell_color_user',
                "params": {
                    id: id_user,
                }
            }).then(response => {
                   if(response.responseText === "red"){
                console.log(response.responseText);
                Ext.getCmp('bell_button').setStyle(
                    'background', '#FF0100'
                )
                 }
            });
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/rez_color_user',
                "params": {
                    id: id_user,
                }
            }).then(response => {
                if(response.responseText === "red"){
                    console.log(response.responseText);
                    Ext.getCmp('rez_button').setStyle(
                        'background', '#FF0100'
                    )
                }
            });
        }
        this.setMainView('webapp.view.UserWin.UserWindow');
    },
    onLoginCloseAdmin(){
        {
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/bell_color_user',
                "params": {
                    id: id_user,
                }
            }).then(response => {
                   if(response.responseText === "red"){
                       Ext.getCmp('bell_button').setStyle(
                           'background', '#FF0100')
                   }
            });
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/rez_color_user',
                "params": {
                    id: id_user,
                }
            }).then(response => {
                if(response.responseText === "red"){
                    console.log(response.responseText);
                    Ext.getCmp('rez_button').setStyle(
                        'background', '#FF0100'
                    )
                }
                this.setMainView('webapp.view.AdminWin.AdminWindow');
            });
        }

    },

    onLoginCloseDirector(){
        {
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/bell_color_user',
                "params": {
                    id: id_user,
                }
            }).then(response => {
                   if(response.responseText === "red"){
                console.log(response.responseText);
                Ext.getCmp('bell_button').setStyle(
                    'background', '#FF0100'
                )
                 }
            });
            Ext.Ajax.request({
                "method": 'post',
                "url": 'http://localhost:8080/rez_color_user',
                "params": {
                    id: id_user,
                }
            }).then(response => {
                if(response.responseText === "red"){
                    console.log(response.responseText);
                    Ext.getCmp('rez_button').setStyle(
                        'background', '#FF0100'
                    )
                }
            });
        }
        this.setMainView('webapp.view.DirectorWin.DirectorWindow');
    },
   /* onLoginAddAdmin(){
        console.log("asdasdasdas");
        this.setMainView('webapp.view.AdminWin.Add');
    }*/});