Ext.define('V2POC.view.base.ChildPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'childpanel',

    initialize: function () {
        this.create();
    },

    create: function () {
        var theItems = [];
        var p = this.getP();
        for (var i = 0; i < p.length; i++) {
            var theChild = {};
            theChild.xtype = p[i].panel;
            theChild.iconCls = 'void';
            theChild.title = p[i].title;
            theItems.push(theChild)
        }
        this.add(theItems);
    },

    config: {
        p: {},
        items: [],
        iconCls: 'void',
        title: null,
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var theMenu = [];
                var p = this.getP();
                for (var i = 0; i < p.length; i++) {
                    var theButton = {};
                    theButton.panel = p[i].panel;
                    theButton.text = p[i].title;
                    theButton.targetPanel = this;
                    theMenu.push(theButton)
                }
                com.setMenu(theMenu);
            }
        },
        tabBar: { hidden: true }
    }
});