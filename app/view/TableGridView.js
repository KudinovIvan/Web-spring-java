
Ext.define('AAA38.view.TableGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tableGridView',
    width: 400,
    height: 300,
    frame: true,
    store: [
        {
            "ID": 5462,
            "name": "ЗАКУПКА1",
            "object": "Хим. продукция",
            "status": 'В процессе',
            "price": '6 000 000',
            "step": 'Размещено',
            "subject":'19 Хакассия'
        }, {
            "ID": 5321,
            "name": "ЗАКУПКА2",
            "object": "Хим. продукция",
            "status": 'В процессе',
            "price": '10 000 000',
            "step": "Окончание подачи заявки",
            "subject":'47 Ленинградская область'
        }, {
            "ID": 7892,
            "name": "ЗАКУПКА3",
            "object": "Хим. продукция",
            "status": 'В процессе',
            "price": '1 000 000',
            "step": 'Обновлено',
            "subject":'27 Хабаровский край'
        }
    ],
    columns: [
        { text: 'Код конкурса', flex: 1, dataIndex:"ID"},
        { text: 'Название конкурса',flex: 1, dataIndex: 'name'},
        { text: 'Объект закупки', flex: 1,dataIndex: 'object'},
        { text: 'Статус закупки', flex: 1,dataIndex: 'status'},
        { text: 'Начальная цена', flex: 1,dataIndex: 'price'},
        { text: 'Этапы', flex: 1,dataIndex: 'step'},
        { text: 'Субъект РФ', flex: 1,dataIndex: 'subject'},
    ],
});