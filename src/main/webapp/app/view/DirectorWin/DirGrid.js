Ext.define('webapp.view.DirectorWin.DirGrid', {
    extend: 'Ext.grid.Panel',
    requires: [ 'webapp.store.GridStore'],
    alias: 'widget.dirgrid',
    store: {type: 'gridstore'},
    frame: true,
    margin: '15, 500, 100, 500',
    columns: [
        { text: "Код конкурса",  flex:1, dataIndex: "code"},
        { text: "Название конкурса", flex: 2, dataIndex:"name"},
        { text: "Объект закупки", flex: 2, dataIndex:"object"},
        { text: "Статус закупки", flex: 2, dataIndex:"status"},
        { text: "Начальная цена", flex: 2, dataIndex:"price"},
        { text: "Субъект РФ", flex: 3, dataIndex:"subject"},
    ],
});