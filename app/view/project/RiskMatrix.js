Ext.define('V2POC.view.project.RiskMatrix', {
    extend: 'Ext.Container',
    id: 'theRiskMatrix',
    xtype: 'riskmatrix',
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
                xtype: 'container',
                layout: 'hbox',
                margin: '5px 5px 5px 5px',

                listeners: {
                    scope: this,
                    itemtap: function (dataview, index, target, record, e, eOpts) {
                        alert('hi');
                        //alert(record.data.severity);
                        //var store = this.down('grid').store;
                        //store.clearFilter();
                        //store.filter("riskSeverity", record.data.severity);
                        //store.filter("riskOccurrence", record.data.occurrence);
                    }
                },
                items: [

                        {
                            xtype: 'container',
                            id: 'dashboardPortletRiskMatrix',
                            itemSelector: '.clickable',
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
                                '{[this.doVal(values.severity, values.occurrence, values.count)]}',
                                '</tpl>',
                                '</div>',
                                {
                                    disableFormats: true,
                                    doVal: function (r, c, v) {
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
                                        console.log(s);
                                        return s;

                                    }
                                }
                                )
                        }

                ]
            }
        ]
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
            //Ext.getCmp('theRiskMatrixData').setStore(storeMatrix);
            //Ext.getCmp('theRiskData').refresh();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }

});

$(function () {

    $('body').on('click', '.matrix .filter li', function () {
        var type = $(this).attr('theRiskMatrix-e-value'),
            rm = Ext.getCmp('dashboardPortletRiskMatrix');
        alert('jhi');
        rm.currentSelection[type] = !rm.currentSelection[type];
        rm.updateFilter(rm);

    });

    $('body').on('click', '.matrix ul.row li', function () {
        var color = $(this).attr('data-e-value');
        alert('jhi2');
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
