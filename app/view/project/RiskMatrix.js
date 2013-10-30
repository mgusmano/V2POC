Ext.define('V2POC.view.project.RiskMatrix', {
    extend: 'Ext.Panel',
    id: 'dashboardPortletRiskMatrix',
    xtype: 'riskmatrix',
    requires: [
        'Ext.dataview.DataView',
        'Ext.data.Store'
    ],

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

    updateFilter: function (rm) {
        var store = Ext.getCmp('theRisksDataview2').getStore();

        store.clearFilter();
        store.filterBy(function (r) {
            if (r.raw.riskSeverity === null) {
                return false;
            }
            if (r.raw.riskOccurrence === null) {
                return false;
            }

            var theRow = r.raw.riskSeverity - 1,
                theColumn = r.raw.riskOccurrence - 1;

            for (var item in rm.currentSelection) {
                if (rm.currentSelection[item]) {
                    if (rm.theColors[r.raw.riskOccurrence - 1][r.raw.riskSeverity - 1] == item) {
                        return true;
                    }
                }
            }


            return false;
        });

        for (var item in rm.currentSelection) {
            if (rm.currentSelection[item]) {
                $('.matrix ul.row li.' + item).addClass('the-selected-' + item);
                $('.matrix .filter li.' + item).addClass('the-selected-' + item);
            } else {
                $('.matrix ul.row li.' + item).removeClass('the-selected-' + item);
                $('.matrix .filter li.' + item).removeClass('the-selected-' + item);
            }
        }
    },


    //constructor: function (config) {
    //    this.initConfig(config);
    //},

    initialize: function () {
        //Ext.Viewport.on('orientationchange', 'handleOrientationChange', this);
        this.create();
    },

    create: function () {
        this.items.items[0].setTitle(this.getTitle());
        this.getData();
    },

    config: {
        title: 'Risk Matrix',
        layout: 'vbox',
        items: [
            com.getHeader(),

            { 
                xtype: 'container', 
                layout: 'hbox',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        dock: 'top',
                        listeners: {
                            swipe: {
                                fn: function (event, node, options, eOpts) {
                                    //Ext.Msg.alert('swipe direction', event.direction);
                                    if (event.direction === 'up') {
                                        Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setHeight(25);
                                        //Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setMargin('-200 5 5 5');
                                        document.getElementById('theMatrix').style.display = 'none'
                                        //document.getElementById('theRiskMatrix').setHeight(100);
                                        //Ext.getCmp('theFilter').setMargin('800 0 0 0');
                                        //this.redraw();
                                    }

                                    //Ext.Msg.alert('swipe direction', event.direction);
                                    if (event.direction === 'left') {
                                        Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setHeight(0);
                                        //Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setMargin('-200 5 5 5');
                                        document.getElementById('theFilter').style.display = 'none'
                                        document.getElementById('theOverall').style.display = 'none'
                                        //Ext.getCmp('theFilter').setMargin('800 0 0 0');
                                        //this.redraw();
                                    }


                                    if (event.direction === 'down') {
                                        //Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setHeight(250);
                                        //Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setMargin('5 5 5 5');
                                        Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setHeight(250);
                                        document.getElementById('theOverall').style.display = 'block'
                                        document.getElementById('theMatrix').style.display = 'block'
                                        document.getElementById('theFilter').style.display = 'block'
                                    }
                                },
                                element: 'element'
                            }
                        },



                       // margin: '5px 5px 5px 5px',
                        id: 'theRiskMatrix',
                        margin: '5 5 5 5',
                        height: 250,
                        tpl: new Ext.XTemplate(
                            '<div class="matrix" id="theOverall" >',
                            '<div id="theMatrix" >',
                            '<tpl for=".">',
                            '{[this.doVal(values.severity, values.occurrence, values.count)]}',
                            '</tpl>',
                            '</div>',
                            '<div class="filter" id="theFilter">',
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
                                    var rm = Ext.getCmp('dashboardPortletRiskMatrix');

                                    var theColors = [
                                        ['insignificant', 'low', 'low', 'low', 'medium'],
                                        ['low', 'low', 'medium', 'medium', 'high'],
                                        ['low', 'medium', 'medium', 'high', 'high'],
                                        ['low', 'medium', 'high', 'high', 'extreme'],
                                        ['medium', 'high', 'high', 'extreme', 'extreme']
                                    ];
                                    var s = '';
                                    if (c === 1) {
                                        s = s + '<ul class="row">';
                                    }
                                    if (v === 0) {
                                        s = s + '<li' + ' r="' + r + '" ' + ' c="' + c + '" ' + ' v="' + v + '" ' + 'data-e-value="' + theColors[r - 1][c - 1] + '" class="clickable ' + theColors[r - 1][c - 1] + '">&nbsp;' + '' + '&nbsp;</li>';
                                    } else {
                                        s = s + '<li' + ' r="' + r + '" ' + ' c="' + c + '" ' + ' v="' + v + '" ' + 'data-e-value="' + theColors[r - 1][c - 1] + '" class="clickable ' + theColors[r - 1][c - 1] + '">&nbsp;' + v + '&nbsp;</li>';
                                    }
                                    if (c === 5) {
                                        s = s + '</ul>';
                                    }
                                    return s;
                                }
                            }
                        )
                    },
                    {
                        xtype: 'dataview',
                        margin: '5 5 5 5',
                        id: 'theRisksDataview2',
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

                ]
            }



        ]
    },






    getData: function () {

        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
        var theParms = { type: 1, projectId: 97370 };
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            Ext.getCmp('theRiskMatrix').setData(data.Matrix);

            var storeRisks = Ext.create('Ext.data.Store', {
                fields: ['riskSequence', 'riskName', 'riskSeverity', 'riskOccurrence', 'riskScore', 'riskExposureCategorySequence', 'riskExposureCategoryName', 'placesUsed'],
                data: data.Risks
      
            });
            Ext.getCmp('theRisksDataview2').setStore(storeRisks);


            //var storeMatrix = Ext.create('Ext.data.Store', {
            //    fields: ['count', 'occurrence', 'severity'],
            //    data: data.Matrix
            //});
            //Ext.getCmp('dashboardPortletRiskMatrix').setStore(storeMatrix);
            //Ext.getCmp('theRiskData').refresh();
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
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

        var me = Ext.getCmp('theRisksDataview2');
        var store = me.getStore();
        store.clearFilter();
        store.filter("riskSeverity", $(this).attr('r'));
        store.filter("riskOccurrence", $(this).attr('c'));
        //me.updateFilter(me);
         
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
