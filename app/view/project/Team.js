Ext.define('V2POC.view.project.Team', {
    extend: 'Ext.Container',
    xtype: 'team',
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
                margin: '15 5 5 5',
                id: 'theTeamTestDataview',
                flex: 1,
                itemTpl: new Ext.XTemplate(
                    '<div class="teamRoot" style="display:table;width:100%">',
                            '<div style="display:table-cell;text-align:left;font-weight:bold;padding:0px 0px 0px 0px;">{riskName} {lastName}</div>',
                    '</div>',

                    '<div class="teamRoot" style="display:table;width:100%">',
                            '<div style="display:table-cell;text-align:left;padding:0px 0px 20px 0px;">Engineer</div>',
                    '</div>',
                    '<div class="teamRoot" style="display:table;width:100%">',
                        '<div pn="{phoneNumber}"  style="display:table-cell;text-align:right;font-weight:bold">',
                            '<span style="background-color:blue;color:white;padding:10px 10px 10px 10px;" class="teamEmail" em="{eMail}">email</span>&nbsp;&nbsp;&nbsp;',
                            '<span style="background-color:blue;color:white;padding:10px 10px 10px 10px;" class="teamSMS" pn="{phoneNumber}">text</span>&nbsp;&nbsp;&nbsp;',
                            '<span style="background-color:blue;color:white;padding:10px 10px 10px 10px;" class="teamCall" pn="{phoneNumber}">call</span>',
                        '</div>',
                    '</div>',

                    '<hr style="margin:20px 0px 5px 0px">'
                )
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
        var theData = [
            { riskName: 'Marc', lastName: 'Gusmano', riskScore: 25, phoneNumber: '847-331-2020', eMail: 'mgusmano@outlook.com' },
            { riskName: 'Nick', lastName: 'Gusmano', riskScore: 22, phoneNumber: '847-331-2022', eMail: 'mgusmano@outlook.com' },
            { riskName: 'Andy', lastName: 'Gusmano', riskScore: 20, phoneNumber: '847-331-2023', eMail: 'mgusmano@outlook.com' }
        ];
        var storeRisks = Ext.create('Ext.data.Store', {
            fields: ['riskName', 'lastName', 'riskScore', 'phoneNumber', 'eMail'],
            data: theData
        });
        Ext.getCmp('theTeamTestDataview').setStore(storeRisks);
    }
});

$(function () {
    $('body').on('click', '.teamSMS', function () {
        var pn = $(this).attr('pn');
        document.location.href = 'SMS:' + pn + '?body=message %0D%0A here';
    });

    $('body').on('click', '.teamCall', function () {
        var pn = $(this).attr('pn');
        document.location.href = 'tel:' + pn;
    });

    $('body').on('click', '.teamEmail', function () {
        var em = $(this).attr('em');
        document.location.href = 'mailto:' + em + '?subject=the subject&body=hello%0D%0Athere'
    });
});