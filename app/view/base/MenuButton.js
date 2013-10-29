Ext.define('V2POC.view.base.MenuButton', {
    extend: 'Ext.Button',
    xtype: 'menubutton',
    config: {
        text: null,
        targetPanel: null,
        //ui: 'plain',
        //labelCls: 'e-button-label',
        //cls: 'x-button-mainmenu',
        panel: null,
        listeners: {
            tap: function () {
                Ext.Viewport.hideAllMenus();
                var targetPanel = this.getTargetPanel();
                targetPanel.setActiveItem(this.getPanel());
            }
        }
    }
});