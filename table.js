Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['name', 'phone']
 });
 
 Ext.define('UserListController', {
     extend : 'Ext.app.ViewController',
     alias: 'controller.userlist',
 
     init: function(view) {
         this.userCount = 0;
         var users = [],
             i;
 
         for (i = 0; i < 5; ++i) {
             users.push(this.getUser());
         }
         view.getStore().add(users);
     },
 
     onAddClick: function() {
         this.addUser();
     },
 
     onDeleteClick: function() {
         var view = this.getView(),
             selected = view.getSelectionModel().getSelection()[0],
             store = view.getStore();
 
         store.remove(selected);
     },
 
     onSelectionChange: function(selModel, selections) {
         this.lookupReference('delete').setDisabled(selections.length === 0);
     },
 
     getUser: function() {
         ++this.userCount;
         return {
             name: 'User ' + this.userCount,
             phone: this.generatePhone()
         };
     },
 
     addUser: function() {
         this.getView().getStore().add(this.getUser());
     },
 
     generatePhone: function() {
         var num = '',
             i;
 
         for (i = 0; i < 7; ++i) {
             num += Ext.Number.randomInt(0, 9);
             if (num.length === 3) {
                 num += '-';
             }
         }
         return num;
     }
 });
 
 Ext.define('UserList', {
     extend: 'Ext.grid.Panel',
     controller: 'userlist',
 
     tbar: [{
         text: 'Add',
         listeners: {
             click: 'onAddClick'
         }
     }, {
         text: 'Delete',
         reference: 'delete',
         listeners: {
             click: 'onDeleteClick'
         }
     }],
     store: {
         model: 'User'
     },
     selModel: {
         type: 'rowmodel',
         listeners: {
             selectionchange: 'onSelectionChange'
         }
     },
     columns: [{
         flex: 1,
         dataIndex: 'name',
         text: 'Name'
     }, {
         flex: 1,
         dataIndex: 'phone',
         text: 'Phone'
     }]
 });
 

 Ext.onReady(function() {
     new UserList({
         renderTo: Ext.getBody(),
         width: 400,
         height: 200
     });
 });