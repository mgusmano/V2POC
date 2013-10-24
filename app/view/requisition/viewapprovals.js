Ext.define('V2POC.view.requisition.ViewApprovals', {
    extend: 'Ext.Panel',
    xtype: 'viewapprovals',
    config: {
        layout: 'vbox',
        iconCls: 'void',
        items: [
             {
                 xtype: "toolbar",
                 title: 'View Approvals',
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
