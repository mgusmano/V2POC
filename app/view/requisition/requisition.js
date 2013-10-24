Ext.define('V2POC.view.requisition.Requisition', {
    extend: 'Ext.tab.Panel',
    id: 'theRequisition',
    xtype: 'requisition',
    initialize: function () {

    },
    config: {
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var menu = Ext.create("Ext.Menu", {
                    defaults: {
                        xtype: "button"
                    },
                    width: '80%',
                    scrollable: 'vertical',
                    items: [
                        {
                            text: 'View Requisitions',
                            listeners: {
                                tap: function () {
                                    Ext.getCmp('theRequisition').setActiveItem('viewrequisitions');
                                    Ext.Viewport.hideAllMenus();
                                }
                            }
                        },
                        {
                            text: 'View Approvals',
                            listeners: {
                                tap: function () {
                                    Ext.getCmp('theRequisition').setActiveItem('viewapprovals');
                                    Ext.Viewport.hideAllMenus();
                                }
                            }
                        }
                    ]
                });

                Ext.Viewport.setMenu(menu, {
                    side: 'left',
                    reveal: true
                });
            }
        },
        hideAnimation: 'fade',
        tabBar: {
            hidden: true,
            dock: 'left',
            scroll: 'horizontal',
            sortable: true,
            layout: {
                pack: 'left'
            }
        },
        items: [
            { xtype: 'viewrequisitions' },
            { xtype: 'viewapprovals' }
        ]
    }
});