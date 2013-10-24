Ext.define('V2POC.view.base.MenuButton', {
    extend: 'Ext.Button',
    xtype: 'menubutton',
    listeners: {
        tap: function () {
            this.targetPanel.setActiveItem(this.panel);
            Ext.Viewport.hideAllMenus();
        }
    }
});