var phone
Ext.define('webapp.view.DirectorWin.DirGrid', {
    extend: 'Ext.grid.Panel',
    requires: [ 'webapp.store.Grid_userStore'],
    alias: 'widget.dirgrid',
    store: {type: 'grid_userstore'},
    frame: true,
    id: 'DirectorGrid',
    //margin: '15 50 600 70',
    controller: 'user',
    columns: [
        { text: "Код конкурса",  flex:2, dataIndex: "code"},
        { text: "Название конкурса", flex: 2, dataIndex:"name"},
        { text: "Объект закупки", flex: 2, dataIndex:"object"},
        { text: "Статус закупки", flex: 2, dataIndex:"status"},
        { text: "Начальная цена", flex: 2, dataIndex:"price"},
        { text: "Субъект РФ", flex: 3, dataIndex:"subject"},
        { dataIndex: "definition", hidden: true},
        { dataIndex: "phone", hidden: true},
        { dataIndex: "name_thing", hidden: true},
        { dataIndex: "trademark", hidden: true},
        { dataIndex: "volume", hidden: true},
        {dataIndex: "date", hidden: true},
        {dataIndex: "valute", hidden: true},
        {dataIndex: "ei", hidden: true},
        {dataIndex:"name_org", hidden: true},
        {dataIndex:"inn", hidden: true},
        {dataIndex:"email", hidden:true},
        {dataIndex:"adres", hidden:true},
        {dataIndex:"dend", hidden: true},
        {dataIndex: "idUser", text: "ID пользователя"}
    ],
    listeners:{
        celldblclick:
        'ViewWindowDirector'
    }
});