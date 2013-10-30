Ext.define('V2POC.view.project.Summary', {
    extend: 'Ext.Container',
    xtype: 'summary',

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
                items: [
                    {
                        xtype: 'container',
                        id: 'theDataSummary',
                        //flex: 1,
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


                        //    '<div class="project-header">',
                        //    '<tpl if="level &gt; 1">',
                        //        '<div class="row">',
                        //            '<tpl if="isParentAccessible==true">',
                        //                '<div class="parent-project"><p><a href="/sites/{parentProjectId}/Portal.aspx"><span class="pdd-id">{parentProjectId} &ndash; </span> {parentProjectName}</a></p></div>',
                        //            '<tpl else>',
                        //                '<div class="parent-project" style="white-space:normal !important;font-size:16px;margin:5px 0px 5px 0px"><p><span class="pdd-id">{parentProjectId} &ndash; </span> {parentProjectName}</p></div>',
                        //            '</tpl>',
                        //        '</div>',
                        //    '</tpl>',
                        //    '<div class="row">',
                        //        '<div class="project-title <tpl if="level &gt; 1">has-parent</tpl>"><h2><span>{projectId} &ndash; </span> {projectName} <span class="product-group">{productGroupCode}</span></h2></div>',
                        //        '<div class="project-last-update"><span class="label">Updated:</span> <span class="value">{timeSpanFromLastUpdate}</span> </div>',
                        //    '</div>',
                        //    '<div class="row">',
                        //        '<div class="pm-pc">',
                        //            '<span class="label">Project Manager:</span> <span class="value">{projectManager}</span>',
                        //            '<span class="spacer">&nbsp;</span>',
                        //            '<span class="label">Product Champion:</span> <span class="value">{productChampion}</span>',
                        //        '</div>',
                        //    '</div>',
                        //'</div>'
                        ]
                    }
                ]
            }
        ]
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
                "projectId": 97370,
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
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }

});