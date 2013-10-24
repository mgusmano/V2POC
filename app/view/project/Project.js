Ext.define('V2POC.view.project.Project', {
    extend: 'Ext.tab.Panel',
    id: 'theProject',
    xtype: 'project',

    initialize: function () {

    },

    config: {
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                alert('Tablet: ' + Ext.os.is.Tablet);
                alert('Phone: ' + Ext.os.is.Phone);

                var menu = Ext.create("Ext.Menu", {
                    defaults: {
                        xtype: "button"
                    },
                    width: '80%',
                    scrollable: 'vertical',
                    items: [
                        {
                            text: 'Project Summary',
                            listeners: {
                                tap: function () {
                                    Ext.getCmp('theProject').setActiveItem('summary');
                                    Ext.Viewport.hideAllMenus();
                                }
                            }
                        },
                        {
                            text: 'Project Team',
                            listeners: {
                                tap: function () {
                                    Ext.getCmp('theProject').setActiveItem('team');
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
            { xtype: 'summary' },
            { xtype: 'team' }
        ]
    }

});


    //    items: [

    //         {
    //             xtype: "toolbar",
    //             layout: {
    //                 type: 'hbox',
    //                 pack: 'center'
    //             },
    //             title: 'team',
    //             items: [
    //                {
    //                    iconCls: "list",
    //                    ui: "plain",
    //                    left: 0,
    //                    listeners: {
    //                        tap: function () {
    //                            Ext.Viewport.toggleMenu("left");
    //                        }
    //                    }
    //                },
    //                {
    //                    iconCls: "list",
    //                    ui: "plain",
    //                    left: 30,
    //                    listeners: {
    //                        tap: function () {
    //                            Ext.Viewport.toggleMenu("right");
    //                        }
    //                    }
    //                }
    //             ]
    //         },

    //        {
    //            xtype: 'container',
    //            layout: 'hbox',
    //            items: [


    //                { xtype: 'container', html: '1' },
    //                { xtype: 'container', html: '2' }

    //            ]
    //        }
    //    ]

    //    //listeners: {
    //    //    activate: function () {
    //    //        this.getData();
    //    //    }
    //    //}
    //},





