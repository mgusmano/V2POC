Ext.define('V2POC.view.Tomatos', {
    extend: 'Ext.Container',
    xtype: 'tomatos',

    config: {
        iconCls: 'action',
        title: 'Tomatos',  
        //badgeText: '6',
        listeners: {
            activate: function () {
                //this.getData();
            }
        },
        items: [

			{ 
				xtype: 'dataview',
				//height: 500,
				//width: 500,
				//fullscreen: true,
				//emspeedlayout: 'fit',
				store: {
					autoLoad: true,
					fields: ['id', 'title', 'synopsis',
						{
							name:'thumbnail_image',
							convert: function(v, record) {return record.raw.posters.thumbnail; }
						}
						],
					proxy: {
						type: 'jsonp',
						// Modify this line with your API key, pretty please...
						url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=hbjgfgryw8tygxztr5wtag3u&q=Horror',

						reader: {
							type: 'json',
							rootProperty: 'movies'
						}
					}
				},
				itemTpl: '<img src="{thumbnail_image}" /><p>{title}</p><p>{synopsis}</p>'
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
            me.down('container').setData(data);
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    }
});
