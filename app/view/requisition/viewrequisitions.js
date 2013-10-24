Ext.define('V2POC.view.requisition.ViewRequisitions', {
    extend: 'Ext.Panel',
    xtype: 'viewrequisitions',
    config: {
        layout: 'vbox',
        iconCls: 'void',
        items: [
             {
                 xtype: "toolbar",
                 title: 'View Requisitions',
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
