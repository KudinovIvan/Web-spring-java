Ext.application({
    name: 'AAA38',

    views: [
        'Cap',
        'FrontView',
        'TableGridView',
        'ExtendSearch'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'frontView'
            }
        });
    }
});