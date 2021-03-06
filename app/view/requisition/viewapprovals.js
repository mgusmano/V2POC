Ext.define('V2POC.view.requisition.ViewApprovals', {
    extend: 'Ext.Panel',
    xtype: 'viewapprovals',

    initialize: function () {
        this.create();
    },

    create: function () {
        this.getData();
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    { xtype: 'container', html: '' },
                    { xtype: 'container', html: '' }

                ]
            }
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
                com.setTitle(me);
                try {
                }
                catch (exception) {
                }
            }
        }
    }
});
