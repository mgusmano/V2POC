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
                    {
                        xtype: 'container',
                        html:
                            '<img src="resources/images/award.png" alt="Smiley face" width="135" height="75" >' +
                            '<div>04 Nov 2013 - The winner of the 2013 CEO\'s Award - top prize in the annual Performed by Schlumberger program - was announced on Friday, November 1.</div>' 
                    }

                ]
            }
        ]
    }
});
