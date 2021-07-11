Ext.define('webapp.view.UserWin.TableBell', {
    extend: 'Ext.grid.Panel',
    requires: [ 'webapp.store.BellStore'],
    alias: 'widget.bellgrid',
    store: {type: 'bellstore'},
    frame: true,
    id: 'BellGrid',
    margin: '15 300 100 300',
    controller: 'user',
    columns: [
        { text: "Код конкурса",  flex:3, dataIndex: "code"},
        { text: "Название конкурса", flex: 4, dataIndex:"name"},
        { text: "Объект закупки", flex: 4, dataIndex:"object"},
        { text: "Статус закупки", flex: 4, dataIndex:"status"},
        { text: "Начальная цена", flex: 3, dataIndex:"price"},
        { text: "Конечная дата", flex: 4, dataIndex:"dendStr"},
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
        {dataIndex:"subject", hidden: true}
    ],
    listeners:{
        celldblclick:
            'CreateWindowBell'
    }
});