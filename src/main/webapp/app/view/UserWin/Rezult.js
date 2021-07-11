Ext.define('webapp.view.UserWin.Rezult', {
    extend: 'Ext.grid.Panel',
    requires: [ 'webapp.store.RezStore'],
    alias: 'widget.rezgrid',
    store: {type: 'rezstore'},
    frame: true,
    id: 'RezGrid',
    margin: '15 300 100 300',
    controller: 'user',
    columns: [
        { text: "Код конкурса",  flex:4, dataIndex: "code"},
        { text: "Название конкурса", flex: 4, dataIndex:"name"},
        { text: "Объект закупки", flex: 4, dataIndex:"object"},
        { text: "Статус закупки", flex: 4, dataIndex:"status"},
        { text: "Начальная цена", flex: 4, dataIndex:"price"},
        //{ text: "Результат", flex: 4, dataIndex:"rezultat"},
    ]
});