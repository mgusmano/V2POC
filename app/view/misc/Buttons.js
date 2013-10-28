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
                text: 'Phone', xtype: "button", width: 250, height: 50,
                listeners: {
                    tap: function () {
                        document.location.href = 'tel:+1-847-331-2020';
                    }
                }
            },
            {
                text: 'Notfication', xtype: "button", width: 250, height: 50,
                listeners: {
                    tap: function () {
                        function alertDismissed() {
                            // do something
                        }

                        navigator.notification.alert(
                            'You are the winner!',  // message
                            alertDismissed,         // callback
                            'Game Over',            // title
                            'Done'                  // buttonName
                        );



                    }
                }
            },
            {
                text: 'Beep', xtype: "button", width: 250, height: 50,
                listeners: {
                    tap: function () {
                        navigator.notification.beep(3);
                    }
                }
            },
            {
                text: 'Beep', xtype: "button", width: 250, height: 50,
                listeners: {
                    tap: function () {
                        navigator.notification.vibrate(2000);
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
            },

                {
                    xtype: 'dataview',
                    width: 216,
                    height: 300,
                    listeners: {
                        scope: this,
                        itemclick: function (dataview, record, item, index, e, eOpts) {
                            //var store = this.down('grid').store;
                            //store.clearFilter();
                            //store.filter("riskSeverity", record.data.severity);
                            //store.filter("riskOccurrence", record.data.occurrence);
                        }
                    },
                    //singleSelect: true,
                    //overItemCls: 'x-view-over',
                    //itemSelector: '.clickable',
                    //emptyText: 'No data available',
                    //deferInitialRefresh: false,

                    store: {
                        fields: ['severity', 'occurrence', 'count'],
                        data: [
                            {
                                "severity": 1,
                                "occurrence": 1,
                                "count": 9
                            },
                            {
                                "severity": 1,
                                "occurrence": 2,
                                "count": 1
                            },
                            {
                                "severity": 1,
                                "occurrence": 3,
                                "count": 0
                            }
                        ]
                    },
                    itemTpl: 'd<div> {severity} {occurrence} {count} </div>',

                    cctpl: new Ext.XTemplate(
                            '<tpl for=".">',
                            '<div>{severity} is {occurrence} years old</div>',
                            //'{[this.doVal(values.severity, values.occurrence, values.count)]}',
                            '</tpl>'
                        )
                }



        ]
    }
});