Ext.define('V2POC.view.misc.TeamTest', {
    extend: 'Ext.Container',
    xtype: 'teamtest',
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
                    id: 'theTeamTestDataview',
                    flex: 1,
                    itemTpl: new Ext.XTemplate(
                        '<hr style="margin:10px 0px 10px 0px">',
                        '<div class="teamRoot" style="display:table;width:100%">',
                             '<div style="display:table-cell;text-align:left;font-weight:bold">{riskName}</div>',
                             '<div pn="{phoneNumber}"  style="display:table-cell;text-align:right;font-weight:bold"><span class="teamSMS" pn="{phoneNumber}">text</span>&nbsp;&nbsp;&nbsp;<span class="teamCall" pn="{phoneNumber}">call</span></div>',
                        '</div>'
                    )
                }
        ]
    },

    getData: function () {

        var theData = [
            { riskName: 'marc', riskScore: 25, phoneNumber: '847-331-2020' },
            { riskName: 'nick', riskScore: 22, phoneNumber: '847-331-2022' },
            { riskName: 'andy', riskScore: 20, phoneNumber: '847-331-2023' },
        ];

        var storeRisks = Ext.create('Ext.data.Store', {
            fields: ['riskName', 'riskScore', 'phoneNumber'],
            data: theData
        });
        Ext.getCmp('theTeamTestDataview').setStore(storeRisks);
    }
});

$(function () {

    $('body').on('click', '.teamRoot .teamSMS', function () {
        //debugger;
        var pn = $(this).attr('pn');
        //alert(pn);
        document.location.href = 'SMS:' + pn + '?body=message %0D%0A here';
    });

    $('body').on('click', '.teamRoot .teamCall', function () {
        //debugger;
        var pn = $(this).attr('pn');
        //alert(pn);
        document.location.href = 'tel:' + pn;
    });

});