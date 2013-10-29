Ext.define('V2POC.com', {
    singleton: true,
    alternateClassName: 'com',

    theTest: true,

    ajaxUrl: function (theService, theMethod) {
        //return 'http://' + location.hostname + ':8095/' + 'api/' + theService + '/' + theMethod;
        return 'http://' + location.hostname + ':8095/' + theService + '.svc/json/' + theMethod;
    },

    ajaxObject: function (theUrl, theParms, theAsync) {
        if (theAsync === undefined) {
            theAsync = true;
        }
        return {
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode(theParms),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: theAsync
        };
    },

    setMenu: function (items) {
        var menu = Ext.create("Ext.Menu", {
            defaults: { xtype: "menubutton" },
            //width: '80%',
            width: '265px',
            scrollable: 'vertical',
            cls: 'mainmenu',
            layout: 'vbox',
            //style: {
            //    backgroundColor: 'green'
            //},
            items: items,


            //items: [{ margin: "85 0 0 0", text: "Schedule", ui: "mainmenu", href: "#sessions", iconCls: "ico-schedule" }, { text: "Speakers", ui: "mainmenu", href: "#speakers", iconCls: "ico-speakers" }, { text: "Sponsors", ui: "mainmenu", href: "#sponsors", iconCls: "ico-sponsors" }, { text: "Maps", ui: "mainmenu", iconCls: "ico-maps", href: "#maps" }, { text: "Conference Activities", ui: "mainmenu", iconCls: "ico-activities", href: "#activities" }, { text: "More Info", ui: "mainmenu", iconCls: "ico-info", href: "#info" }, { xtype: "component", cls: "divider", html: "Social" }, { text: "@SamsungDevUS", ui: "mainmenu", href: "#feed", iconCls: "ico-feed" }, { text: "#sdc13", ui: "mainmenu", href: "#tweets", iconCls: "ico-twitter" }],




            xitems: [
                {
                    xtype: 'dataview',
                    flex:1,
                    //width: 216,
                    //height: 300,
                    listeners: {
                        scope: this,
                        itemtap: function (dataview, record, item, index, e, eOpts) {
                            alert('hi');
                            //var store = this.down('grid').store;
                            //store.clearFilter();
                            //store.filter("riskSeverity", record.data.severity);
                            //store.filter("riskOccurrence", record.data.occurrence);
                        }
                    },
                    singleSelect: true,
                    //overItemCls: 'x-view-over',
                    itemSelector: '.clickable',
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
                    itemTpl: '<div class="clickable" style="color:#ff0000"> {severity} {occurrence} {count} </div>',

                    cctpl: new Ext.XTemplate(
                            '<tpl for=".">',
                            '<div>{severity} is {occurrence} years old</div>',
                            //'{[this.doVal(values.severity, values.occurrence, values.count)]}',
                            '</tpl>'
                        )
                }
            ]
        });
        Ext.Viewport.setMenu(menu, { side: 'left', reveal: true });
    },

    getHeader: function () {
        return  {
            xtype: "toolbar",
            dock: 'top',
            items: [
               {
                   iconCls: "list",
                   ui: "plain",
                   left: 0,
                   listeners: {
                       tap: function () {
                           Ext.Viewport.toggleMenu("left");
                       }
                   }
               }
            ]
        }
    },

    whatAmI: function () {
        var is = '';
        if (Ext.os.is.Tablet != undefined) {
            is += Ext.os.is.Tablet + ';';
        }
        if (Ext.os.is.Phone != undefined) {
            is += Ext.os.is.Phone + ';';
        }
        return is;
    }

});