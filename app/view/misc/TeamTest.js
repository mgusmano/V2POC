Ext.define('V2POC.view.misc.TeamTest', {
    extend: 'Ext.Panel',
    xtype: 'teamtest',
    requires: [
    ],
    initialize: function () {
        this.create();
    },

    create: function () {
        this.down('grid').getTitleBar().hide();
        this.getData();
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                xtype: 'grid',
                flex: 1,
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'email', 'phone'],
                    data: [
                            { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                            { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                            { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                            { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" }
                        ]
                }),
                columns: [
                    { text: 'Name', dataIndex: 'name', width: 200 },
                    { text: 'Email', dataIndex: 'email', width: 250 },
                    { text: 'Phone', dataIndex: 'phone', width: 200 }
                ]
            }
        ],
        listeners: {
            scope: this,
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {

                var me = newActiveItem;
                com.setTitle(me);

                try {
                    var myContact = navigator.contacts.create({ "displayName": "Test User" });
                    myContact.note = "This contact has a note.";

                    var myVar = setInterval(function () {
                        var b = Ext.getCmp('requisitionsID');
                        var v = b.tab.getBadgeText();
                        if (v === null) {
                            v = 0;
                        }
                        theVal = parseInt(v);
                        theVal = theVal + 1;
                        b.tab.setBadgeText(theVal);
                        navigator.notification.vibrate(2000);
                        navigator.notification.beep(3);
                        clearInterval(myVar);
                    }, 10000);
                }
                catch(exception) {
                }
            }
        }
    },

    getData: function () {
    }
});