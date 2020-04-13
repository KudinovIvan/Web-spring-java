Ext.define('webapp.store.UserStore',{
    extend:'Ext.data.Store',
    alias:'store.userstore',
    requires : [
        'webapp.model.UserModel'
    ],
    model: 'webapp.model.UserModel',
   /* data: {
        items:[
            {id:'1', login: 'AA', password:'sda'},
            {id:'2', login: 'AA', password:'sda'},
            {id:'3', login: 'AA', password:'sda'},
            {id:'4', login: 'AA', password:'sda'},
            {id:'5', login: 'AA', password:'sda'},
            {id:'6', login: 'AA', password:'sda'},
            {id:'7', login: 'AA', password:'sda'},
            {id:'8', login: 'AA', password:'sda'},
            {id:'9', login: 'AA', password:'sda'},
            {id:'10', login: 'AA', password:'sda'},
            {id:'11', login: 'AA', password:'sda'},
            {id:'12', login: 'AA', password:'sda'},
            {id:'13', login: 'AA', password:'sda'},
            {id:'14', login: 'AA', password:'sda'},
            {id:'15', login: 'AA', password:'sda'},
            {id:'16', login: 'AA', password:'sda'},
            {id:'17', login: 'AA', password:'sda'},
            {id:'18', login: 'AA', password:'sda'},
            {id:'19', login: 'AA', password:'sda'},
            {id:'20', login: 'AA', password:'sda'},
        ]
    },
    proxy:{
        type: 'memory',
        reader:{
            type:'json',
            rootProperty:'items'
        }
    }*/
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'users',
            read: 'users',
            destroy: 'users',
            update: 'users'
        },
        reader: {
            type: 'json',
        //    url:'http://localhost:8080/users',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});