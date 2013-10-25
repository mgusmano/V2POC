Ext.define('V2POC.view.base.MenuButton', {
    extend: 'Ext.Button',
    xtype: 'menubutton',
    config: {
        text: null,
        targetPanel: null,
        panel: null,
        listeners: {
            tap: function () {
                var targetPanel = this.getTargetPanel();
                targetPanel.setActiveItem(this.getPanel());
                Ext.Viewport.hideAllMenus();
            }
        }
    }
});