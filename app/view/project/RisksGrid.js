Ext.define('V2POC.view.project.RisksGrid', {
    extend: 'Ext.Container',
    xtype: 'risksgrid',
    requires: [
        'Ext.dataview.DataView',
        'Ext.data.Store'
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
                id: 'theRisksGrid',
                flex: 1,
                columns: [
                    { text: '#', dataIndex: 'riskSequence', width: 50 },
                    { text: 'Name', width: 600, xtype:'templatecolumn', tpl:'<div>line 2</div><div style="font-size:10px">{riskSequence} ({riskName})</div>'},
                    { text: 'Name', width: 600, xtype: 'templatecolumn', tpl: '<div style="white-space:normal !important;font-size:11px">{riskSequence} ({riskName})</div><div>line 2</div>' },
                    { text: 'Name', width: 600, xtype: 'templatecolumn', tpl: '<div style="font-size:12px">{riskSequence} ({riskName})</div><div>line 2</div>' },
                    {
                        text: 'Name', dataIndex: 'riskName', width: 600, renderer: function (value, record, rowindex) {
                           // var r = '<div style="font-size:11px">' + record.data.riskSequence + '-' + record.data.riskName + '</div><div>line 2</div>';
                            var r = '<h1>hi</h1>';
                            return r;
                        }
                    },
                    { text: 'S', dataIndex: 'riskSeverity', width: 50 },
                    { text: 'O', dataIndex: 'riskOccurrence', width: 50 },
                    { text: 'R', dataIndex: 'riskScore', width: 50 }
                ]
            }
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
                com.setTitle(me);
                try {
                }
                catch (exception) {
                }
            }
        }
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
        var theParms = { type: 1, projectId: 97370 };
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            var storeRisks = Ext.create('Ext.data.Store', {
                fields: ['riskSequence', 'riskName', 'riskSeverity', 'riskOccurrence', 'riskScore', 'riskExposureCategorySequence', 'riskExposureCategoryName', 'placesUsed'],
                data: data.Risks
            });
            Ext.getCmp('theRisksGrid').setStore(storeRisks);
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});