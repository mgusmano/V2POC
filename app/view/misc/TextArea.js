Ext.define('V2POC.view.misc.TextArea', {
    extend: 'Ext.Container',
    xtype: 'textarea',
    requires: [
    ],

    initialize: function () {
        this.create();
    },

    create: function () {
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
                {
                    xtype: 'textareafield',
                    flex: 1,
                    id: 'theTextArea',
                    name: 'bio',
                    margin: '5 5 5 5'
                }
        ]
    }
});