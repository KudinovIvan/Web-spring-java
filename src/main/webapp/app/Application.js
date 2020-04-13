Ext.define('webapp.Application',{

    extend:'Ext.app.Application',
    requires:['webapp.view.LogWin.LoginView',
        'webapp.view.UserWin.FrontView',
        'webapp.view.UserWin.Cap',
        'webapp.view.UserWin.ExtendSearch',
        'webapp.view.UserWin.TableGridView',
        'webapp.view.AdminWin.AdminView',
        'webapp.view.AdminWin.AdminGrid',
    ],

    store:[
        'webapp.store.UserStore'
    ],

    model:[
        'webapp.model.UserModel'
    ],

   // mainView: 'webapp.view.AdminWin.AdminView',

    launch() {
        const loginWin =Ext.create('webapp.view.LogWin.LoginView');
        loginWin.on('logincloseuser', 'onLoginCloseUser', this);
        loginWin.on('logincloseadmin', 'onLoginCloseAdmin', this);
    },

    onLoginCloseUser(){
        this.setMainView('webapp.view.UserWin.FrontView');
    },

    onLoginCloseAdmin(){
        this.setMainView('webapp.view.AdminWin.AdminView');
    },
});