Ext.define('V2POC.view.project.Team', {
    extend: 'Ext.Panel',
    xtype: 'team',

    initialize: function () {
        this.create();
    },

    create: function () {
        this.items.items[0].setTitle(this.getTitle());
        this.getData();
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
             {
                 xtype: "toolbar",
                 title: 'Project Team',
                 items: [
                    {
                        iconCls: "list",
                        ui: "plain",
                        left: 0,
                        listeners: {
                            tap: function () {
                                Ext.Viewport.toggleMenu("left");
                            }
                        }
                    }
                 ]
             },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    { xtype: 'container', html: '1' },
                    { xtype: 'container', html: '2' }

                ]
            }
        ]
    }
});
