Ext.define('webapp.view.UserWin.TableGridView', {
    extend: 'Ext.grid.Panel',
    requires: [ 'webapp.store.GridStore'],
    alias: 'widget.tableGridView',
    store: {type: 'gridstore'},
    frame: true,
    id: 'UserGrid',
    margin: '15 50 100 50',
    controller: 'user',
    columns: [
        { text: "Код конкурса",  flex:2, dataIndex: "code"},
        { text: "Название конкурса", flex: 2, dataIndex:"name"},
        { text: "Объект закупки", flex: 2, dataIndex:"namething"},
        { text: "Статус закупки", flex: 2, dataIndex:"status"},
        { text: "Начальная цена", flex: 2, dataIndex:"price"},
        { text: "Субъект РФ", flex: 3, dataIndex:"subject"},
        { dataIndex: "definition", hidden: true},
        { dataIndex: "phone", hidden: true},
        { dataIndex: "object", hidden: true},
        { dataIndex: "trademark", hidden: true},
        { dataIndex: "volume", hidden: true},
        {dataIndex: "date", hidden: true},
        {dataIndex: "valute", hidden: true},
        {dataIndex: "ei", hidden: true},
        {dataIndex:"name_org", hidden: true},
        {dataIndex:"inn", hidden: true},
        {dataIndex:"email", hidden:true},
        {dataIndex:"adres", hidden:true},
       // {text: "Этапы", flex: 3, dataindex:"dendStr"}
    ],
    listeners:{
        celldblclick:
            'ViewWindow'
    }
});