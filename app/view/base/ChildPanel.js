Ext.define('V2POC.view.base.ChildPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'childpanel',

    constructor: function (config) {
        alert(config);
        this.callParent();
    },

    initialize: function () {
        debugger;
        alert('initialize 1')
        var theItems = [];
        alert(this.p);
        var p = this.p;
        for (var i = 0; i < this.p.length; i++) {
            var theChild = {};
            theChild.xtype = p[i].panel;
            theChild.iconCls = 'void';
            theChild.title = p[i].title;
            theItems.push(theChild)
        }
        this.add(theItems);
        this.callParent();
        alert('initialize 2')
    },
    config: {
        items: [],
        iconCls: 'void',
        title: '',
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                alert('activate 1')
                var theMenu = [];
                var p = this.p;
                for (var i = 0; i < p.length; i++) {
                    var theButton = {};
                    theButton.panel = p[i].panel;
                    theButton.text = p[i].title;
                    theButton.targetPanel = this;
                    theMenu.push(theButton)
                }
                com.setMenu(theMenu);
                alert('activate 2')
            }
        },
        tabBar: { hidden: true }
    }
});