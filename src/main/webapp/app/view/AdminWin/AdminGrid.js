Ext.define('webapp.view.AdminWin.AdminGrid', {
    extend: 'Ext.grid.Panel',
    //extend:'Ext.form.Panel',
    requires: [ 'webapp.store.UserStore'],
    alias: 'widget.admingrid',
    width: 400,
    height: 300,
    store: {type: 'userstore'},
    frame: true,
    margin: '15, 600, 100, 600',
    columns: [
        { text: "Check",  flex:2},
        { text: "ФИО", flex: 3, dataIndex:"fio"},
        ],
});