//Ext.Msg.alert('Status', 'Changes saved successfully.')
Ext.define('webapp.view.UserWin.AppUser',{

    extend:'Ext.app.Application',
    requires:['webapp.view.UserWin.FrontView',
        'webapp.view.UserWin.ExtendSearch',
        'webapp.view.UserWin.TableGridView',
        'webapp.Application'
    ],

    store:[
        'webapp.store.UserStore',
        'webapp.store.GridStore'
    ],

    model:[
        'webapp.model.UserModel',
        'webapp.model.GridModel'
    ],

      mainView: 'webapp.view.UserWin.FrontView',

   /* launch() {
        const loginWin =Ext.create('webapp.view.UserWin.FrontView');
    },*/

    onLoginCloseUser(){
        document.location.href="http://localhost:8080/search1.html";
        //this.setMainView('webapp.view.UserWin.FrontView');
    },

    onLoginCloseAdmin(){
        this.setMainView('webapp.view.AdminWin.AdminView');
    },

    onLoginCloseDirector(){
        this.setMainView('webapp.view.DirectorWin.DirView');
    },
     onLoginAddAdmin(){
         console.log("asdasdasdas");
         this.setMainView('webapp.view.AdminWin.Add');
     }});