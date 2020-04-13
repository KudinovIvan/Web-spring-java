Ext.application({
    name: 'webapp',

    views: [
        'UserWin.Cap',
        'UserWin.FrontView',
        'UserWin.TableGridView',
        'UserWin.ExtendSearch'
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