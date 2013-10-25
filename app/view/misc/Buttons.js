Ext.define('V2POC.view.misc.Buttons', {
    extend: 'Ext.Panel',
    xtype: 'buttons',

    initialize: function () {
        this.create();
    },

    create: function () {
        this.items.items[0].setTitle(this.getTitle());
        this.getData();
    },


    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                text: 'New Window', xtype: "button", width: 250, height: 50,
                listeners: {
                    tap: function () {
                        var ref = window.open('http://mjguitester.azurewebsites.net/sites/97370/Portal.aspx', '_blank', 'location=no');
                    }
                }
            },
            {
                text: 'Set Badge Text', xtype: "button", width: 250, height: 50,
                listeners: {
                    tap: function () {
                        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
                        var theParms = { type: 1, projectId: 97370 };
                        var me = this;
                        $.ajax(com.ajaxObject(theUrl, theParms, false))
                        .fail(function (data) { throw data.status + '-' + data.statusText + ': ' + theUrl; })
                        .done(function (data) {
                            var b = Ext.getCmp('miscID');
                            var v = b.tab.getBadgeText();
                            if (v === null) {
                                v = 0;
                            }
                            theVal = parseInt(v);
                            theVal = theVal + 1;
                            b.tab.setBadgeText(theVal);
                        });
                    }
                }
            }
        ]
    }
});