Ext.define('V2POC.view.project.RisksDataview', {
    extend: 'Ext.Container',
    xtype: 'risksdataview',
    requires: [
        'Ext.dataview.DataView',
        'Ext.data.Store'
    ],

    initialize: function () {
        this.create();
    },

    create: function () {
        this.getData();
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
                {
                    xtype: 'dataview',
                    margin: '5 5 5 5',
                    id: 'theRisksDataview',
                    flex: 1,
                    listeners: {
                        scope: this,
                        itemtap: function (dataview, index, target, record, e, eOpts) {
                            alert(record.data.riskName);
                        }
                    },
                    singleSelect: true,
                    itemSelector: '.clickable',
                    itemTpl: new Ext.XTemplate(
                        '<hr style="margin:10px 0px 10px 0px">',
                        '<div style="display:table;width:100%">',
                             '<div style="display:table-cell;text-align:left;font-weight:bold">Risk #{riskSequence}</div>',
                             '<div style="display:table-cell;text-align:right;font-weight:bold">',
                             'S:{riskSeverity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O:{riskOccurrence}',
                                 '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="padding:5px 5px 5px 5px;width:30px;">R:</span>{[this.doVal(values.riskScore, values.riskOccurrence, values.riskSeverity )]}',
                             '</div>',
                             '</div>',
                             '<div class="clickable" style="white-space:normal !important;font-size:16px;margin:5px 0px 5px 0px"> {riskName} </div>',
                             '</div>',
                                {
                                    disableFormats: true,
                                    doVal: function (riskScore, o, s) {
                                        var rm = Ext.getCmp('dashboardPortletRiskMatrix');
                                        var color = '';
                                        var theColors = [
                                            ['insignificant', 'low', 'low', 'low', 'medium'],
                                            ['low', 'low', 'medium', 'medium', 'high'],
                                            ['low', 'medium', 'medium', 'high', 'high'],
                                            ['low', 'medium', 'high', 'high', 'extreme'],
                                            ['medium', 'high', 'high', 'extreme', 'extreme']
                                        ];
                                        if (o > 0 && s > 0) {
                                            var theColor = theColors[o - 1][s - 1];
                                            color = theColor + '-cell';
                                        }
                                        var theVal = '<span class="' + color + '" style="padding:5px 5px 5px 5px;width:30px;">' + riskScore + '</span> ';
                                        return theVal;
                                    }
                                }
                    )
                }
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                newActiveItem.down('#titleLabel').setHtml(com.getProjectId() + '-' + com.getProjectName());
                newActiveItem.down('#titleSubLabel').setHtml(newActiveItem.getTitle());


                try {
                    //var myContact = navigator.contacts.create({ "displayName": "Test User" });
                    //myContact.note = "This contact has a note.";
                    var myVar = setInterval(function () {
                        clearInterval(myVar);
                        var b = Ext.getCmp('requisitionsID');
                        var v = b.tab.getBadgeText();
                        if (v === null) {
                            v = 0;
                        }
                        theVal = parseInt(v);
                        theVal = theVal + 1;
                        b.tab.setBadgeText(theVal);
                        if (navigator.notification != undefined) {
                            navigator.notification.vibrate(1000);
                            navigator.notification.beep(1);
                        }

                        var data = [
                            { grsNo: 'R497464', grsAmt: '$52,240', supplier: 'Hitachi', days: 3, remaining: 1, next: 'mwill', "phone": "555-111-1224" },
                            { grsNo: 'R494652', grsAmt: '$360,053', supplier: 'Dassault', days: 4, remaining: 1, next: 'Nouaze1', "phone": "555-222-1234" },
                            { grsNo: 'R492812', grsAmt: '$42', supplier: 'SHI International', days: 1, remaining: 1, next: 'Kishino', "phone": "555-222-1244" },
                            { grsNo: 'R497464', grsAmt: '$100,000', supplier: 'Hitachi', days: 5, remaining: 1, next: 'MShah23', "phone": "281-513-7978" }
                        ];
                        Ext.getCmp('openGRS').setData(data);


                    }, 4000);
                }
                catch (exception) {
                }



            }
        }
    },

    getData: function () {
        var me1 = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
        var theParms = { type: 1, projectId: 97370 };
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            var storeRisks = Ext.create('Ext.data.Store', {
                fields: ['riskSequence', 'riskName', 'riskSeverity', 'riskOccurrence', 'riskScore', 'riskExposureCategorySequence', 'riskExposureCategoryName', 'placesUsed'],
                data: data.Risks
            });
            Ext.getCmp('theRisksDataview').setStore(storeRisks);
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});