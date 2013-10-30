Ext.define('V2POC.view.misc.TextArea', {
    extend: 'Ext.Container',
    xtype: 'textarea',
    requires: [
    ],

    initialize: function () {
        this.create();
    },

    create: function () {
        this.items.items[0].setTitle(this.getTitle());
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
                {
                    xtype: 'textareafield',
                    //label: 'Bio',
                    //maxRows: 4,
                    flex: 1,
                    id: 'theTextArea',
                    name: 'bio',
                    margin: '5 5 5 5'
                }
        ]
    }
});