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
        this.items.items[0].setTitle(this.getTitle());
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


                    itemTpl: new Ext.XTemplate(
                        '<p>Kids: ',
                            '{[this.doVal(values.riskSeverity, values.riskOccurrence, values.riskScore)]}',
                            '<p>{#}. {riskName}</p>',  // use current array index to autonumber
                                {
                                    disableFormats: true,
                                    doVal: function (r, c, v) {
                                        return 'hi ' + v;
                                    }
                                }


                    ),

                    itemTpl2: '<div style="display:table;width:100%">' + 
                             '<div style="display:table-cell;text-align:left;font-weight:bold">Risk #{riskSequence}</div>' +
                             '<div style="display:table-cell;text-align:right;font-weight:bold">' +
                             'S:{riskSeverity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O:{riskOccurrence}' +
                             '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span xstyle="background-color:blue;color:white">R:{riskScore}' +
                             '</div>' +
                             '</div>' +
                             '<div class="clickable" style="white-space:normal !important;font-size:16px;margin:5px 0px 5px 0px"> {riskName} </div>' +
                             '</div><hr style="margin:10px 0px 10px 0px">'
                }
        ]
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