Ext.define('V2POC.view.project.Summary', {
    extend: 'Ext.Container',
    xtype: 'summary',

    initialize: function () {
        this.create();
    },

    create: function () {
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'container',
                        id: 'theDataSummary',
                        margin: '10 10 10 10',
                        tpl: [

                            '<div style="display:table;width:100%;margin:10px 0px 0px 0px;">',
                                '<div style="display:table-row">',
                                    '<div style="display:table-cell;text-align:left"><span style="font-weight:bold;">{projectId} &ndash; {projectName}</span></div>',
                                '</div>',
                            '</div>',

                            '<div style="display:table;width:100%;margin:25px 0px 0px 0px;">',
                                '<div style="display:table-row">',
                                    '<div style="display:table-cell;text-align:left"><span style="font-weight:bold;">Parent:</span> {parentProjectId} &ndash; {parentProjectName} </div>',
                                '</div>',
                            '</div>',

                            '<div style="display:table;width:100%;margin:15px 0px 0px 0px;">',
                                '<div style="display:table-row">',
                                    '<div style="display:table-cell;text-align:left"><span style="font-weight:bold;">Project Manager:</span> {projectManager} </div>',
                                '</div>',
                            '</div>',

                            '<div style="display:table;width:100%;margin:15px 0px 0px 0px;">',
                                '<div style="display:table-row">',
                                    '<div style="display:table-cell;text-align:left"><span style="font-weight:bold;">Product Champion:</span> {productChampion} </div>',
                                '</div>',
                            '</div>',

                            '<div style="display:table;width:100%;margin:15px 0px 0px 0px;">',
                                '<div style="display:table-row">',
                                    '<div style="display:table-cell;text-align:left"><span style="font-weight:bold;">Product Group: </span> {productGroupCode} </div>',
                                '</div>',
                            '</div>',

                            '<div style="display:table;width:100%;margin:15px 0px 0px 0px;">',
                                '<div style="display:table-row">',
                                    '<div style="display:table-cell;text-align:left"><span style="font-weight:bold;">Updated: </span> {timeSpanFromLastUpdate} </div>',
                                '</div>',
                            '</div>'
                        ]
                    }
                ]
            }
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
            },
            show: function (me, eOpts) {
            },
            painted: function (element, eOpts) {
                var me = this;
                me.getData();

                com.setTitle(me);
                try {
                }
                catch (exception) {
                }
            }
        }
    },

    getParams: function () {
        var sParams = {
            "filter": {
                "loadAuditInfo": true,
                "loadBaseAttributes": true,
                "loadDfxKpis": false,
                "loadLevelInfo": true,
                "loadManagement": true,
                "loadPmtKpis": false,
                "loadUrls": false,
                "projectId": com.getProjectId(),
                "rollUpThresholdId": 1,
                "rollUpSubProjectIds": [1]
            }
        };
        return sParams;
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProject';
        var theParms = this.getParams();
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            Ext.getCmp('theDataSummary').setData(data);
            //com.setProjectId(data.projectId);
            //com.setProjectName(data.projectName);
            //com.setTitle(me);

        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});