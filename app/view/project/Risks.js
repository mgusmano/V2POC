Ext.define('V2POC.view.project.Risks', {
    extend: 'Ext.Container',
    id: 'theRiskMatrix',
    requires: ['Ext.dataview.DataView'],
    xtype: 'risks',

    initialize: function () {
        this.items.items[0].setTitle(this.title);
        this.callParent();
        //this.getData();
    },

    create: function () {
    },

    theColors: [
        ['insignificant', 'low', 'low', 'low', 'medium'],
        ['low', 'low', 'medium', 'medium', 'high'],
        ['low', 'medium', 'medium', 'high', 'high'],
        ['low', 'medium', 'high', 'high', 'extreme'],
        ['medium', 'high', 'high', 'extreme', 'extreme']
    ],

    clickableColors: ['insignificant', 'low', 'medium', 'high', 'extreme'],
    currColor: 'high', //'extreme',
    currentSelection: { insignificant: false, low: false, medium: false, high: true, extreme: true },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
        var theParms = { type: 1, projectId: 97370 };
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            var storeMatrix = Ext.create('Ext.data.Store', {
                fields: ['count', 'occurrence', 'severity'],
                data: data.Matrix
            });
            Ext.getCmp('theRiskData').setStore(storeMatrix);
            //Ext.getCmp('theRiskData').refresh();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    },

    config: {
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                        {

                            xtype: 'dataview',
                            id: 'theRiskData',
                            width: 216,
                            height: 300,
                            listeners: {
                                scope: this,
                                itemclick: function (dataview, record, item, index, e, eOpts) {
                                    var store = this.down('grid').store;
                                    store.clearFilter();
                                    store.filter("riskSeverity", record.data.severity);
                                    store.filter("riskOccurrence", record.data.occurrence);
                                }

                            },
                            singleSelect: true,
                            overItemCls: 'x-view-over',
                            itemSelector: '.clickable',
                            emptyText: 'No data available',
                            deferInitialRefresh: false,

                            //itemTpl: '<div> {severity} {occurrence} {count} </div>',

            //                store: {
            //                    fields: ['severity', 'occurrence', 'count'],

            //                },


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
            },
            {
                "severity": 1,
                "occurrence": 4,
                "count": 0
            },
            {
                "severity": 1,
                "occurrence": 5,
                "count": 0
            },
            {
                "severity": 2,
                "occurrence": 1,
                "count": 3
            },
            {
                "severity": 2,
                "occurrence": 2,
                "count": 4
            },
            {
                "severity": 2,
                "occurrence": 3,
                "count": 6
            },
            {
                "severity": 2,
                "occurrence": 4,
                "count": 4
            },
            {
                "severity": 2,
                "occurrence": 5,
                "count": 0
            },
            {
                "severity": 3,
                "occurrence": 1,
                "count": 15
            },
            {
                "severity": 3,
                "occurrence": 2,
                "count": 13
            },
            {
                "severity": 3,
                "occurrence": 3,
                "count": 28
            },
            {
                "severity": 3,
                "occurrence": 4,
                "count": 3
            },
            {
                "severity": 3,
                "occurrence": 5,
                "count": 0
            },
            {
                "severity": 4,
                "occurrence": 1,
                "count": 7
            },
            {
                "severity": 4,
                "occurrence": 2,
                "count": 8
            },
            {
                "severity": 4,
                "occurrence": 3,
                "count": 3
            },
            {
                "severity": 4,
                "occurrence": 4,
                "count": 2
            },
            {
                "severity": 4,
                "occurrence": 5,
                "count": 0
            },
            {
                "severity": 5,
                "occurrence": 1,
                "count": 7
            },
            {
                "severity": 5,
                "occurrence": 2,
                "count": 2
            },
            {
                "severity": 5,
                "occurrence": 3,
                "count": 2
            },
            {
                "severity": 5,
                "occurrence": 4,
                "count": 0
            },
            {
                "severity": 5,
                "occurrence": 5,
                "count": 2
            }
                                ],


                            tpl: new Ext.XTemplate(
                                '<div class="matrix">',
                                '<tpl for=".">',
                                '<div>{severity} is {occurrence} years old</div>',
                                //'{[this.doVal(values.severity, values.occurrence, values.count)]}',
                                '</tpl>',
                                '<div class="filter">',
                                    '<span>Filters</span>',
                                    '<ul>',
                                        '<li class="insignificant" data-e-value="insignificant">&nbsp;</li>',
                                        '<li class="low" data-e-value="low">&nbsp;</li>',
                                        '<li class="medium" data-e-value="medium">&nbsp;</li>',
                                        '<li class="high" data-e-value="high">&nbsp;</li>',
                                        '<li class="extreme" data-e-value="extreme">&nbsp;</li>',
                                    '</ul>',
                                '</div>',
                                '</div>',
                                {
                                    disableFormats: true,
                                    doVal: function (r, c, v) {
                                        //debugger;
                                        var rm = Ext.getCmp('theRiskMatrix');
                                        var s = '';
                                        if (c === 1) {
                                            s = s + '<ul class="row">';
                                        }
                                        if (v === 0) {
                                            s = s + '<li data-e-value="' + rm.theColors[r - 1][c - 1] + '" class="clickable ' + rm.theColors[r - 1][c - 1] + '">&nbsp;' + '' + '&nbsp;</li>';
                                        } else {
                                            s = s + '<li data-e-value="' + rm.theColors[r - 1][c - 1] + '" class="clickable ' + rm.theColors[r - 1][c - 1] + '">&nbsp;' + v + '&nbsp;</li>';
                                        }
                                        if (c === 5) {
                                            s = s + '</ul>';
                                        }
                                        return s;
                                    }
                                }
                            )
                        }
                ]
            }
        ]
    }
});

$(function () {

    $('body').on('click', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value'),
            rm = Ext.getCmp('dashboardPortletRiskMatrix');

        rm.currentSelection[type] = !rm.currentSelection[type];
        rm.updateFilter(rm);

    });

    $('body').on('click', '.matrix ul.row li', function () {
        var color = $(this).attr('data-e-value');
        clearSelection();

        $(this).addClass('the-selected-' + color);

    });

    // filters
    $('body').on('mouseover', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value');
        $('.matrix ul.row li.' + type).addClass('the-hover-' + type);

    }).on('mouseout', '.matrix .filter li', function () {
        var type = $(this).attr('data-e-value');
        $('.matrix ul.row li.' + type).removeClass('the-hover-' + type);
    });

    var clearSelection = function () {
        rm = Ext.getCmp('dashboardPortletRiskMatrix');

        for (var item in rm.currentSelection) {
            rm.currentSelection[item] = false;
        }

        $('.matrix li').removeClass(function (index, classNames) {
            var currentClasses = classNames.split(" "),
                classesToRemove = [];

            $.each(currentClasses, function (index, className) {
                if (/the-selected.*/.test(className)) {
                    classesToRemove.push(className);
                }
            });

            return classesToRemove.join(" ");
        });

    };

});
