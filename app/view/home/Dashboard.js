Ext.define('V2POC.view.home.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'dashboard',

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
            //{
            //    xtype: 'container',
            //    margin: '5 0 0 0',
            //    style: { textAlign: 'center', borderColor: 'red' },
            //    html: "Today's News"
            //},

            //{
            //    xtype: 'carousel',
            //    flex: 1,
            //    style: { textAlign: 'center', borderColor: 'red' },
            //    border: 5,
            //    margin: '5 5 5 5',
            //    bufferSize: 2,
            //    direction: 'horizontal',
            //    items: [
            //        {
            //            xtype: 'container', border: 1, style: { backgroundColor: 'blue', color: 'white' },
            //            html: [
            //                '<div style="margin:15px 5px 5px 5px">',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:center;font-weight:bold">',
            //                          'Oilfield Review</br>Now Available on the iPad',
            //                        '</div>',
            //                    '</div>',
            //                    '</br>',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:left">',
            //                            'Download the Oilfield Review app in the App Store or on iTunes to access animation- and video-enhanced articles, as well as archived issues of this premier E&P technical journal.',
            //                        '</div>',
            //                    '</div>',
            //                '</div>'
            //                ].join('')
            //        },


            //        {
            //            xtype: 'container', border: 1, style: { backgroundColor: 'blue', color: 'white' },
            //            html: [
            //                '<img src="resources/images/award.png" alt="Smiley face" width="135" height="75" >' +
            //                '<div>04 Nov 2013 - The winner of the 2013 CEO\'s Award - top prize in the annual Performed by Schlumberger program - was announced on Friday, November 1.</div>' 
            //            ]
            //        },


            //        {
            //            xtype: 'container', border: 1, style: { backgroundColor: 'green', color: 'white' },
            //            html: [
            //                '<div style="margin:15px 5px 5px 5px">',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:center;font-weight:bold">',
            //                          'Join us at OTC Brasil 2013',
            //                        '</div>',
            //                    '</div>',
            //                    '</br>',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:left">',
            //                            'Learn how we can help you produce hydrocarbons more efficiently and safely in today\'s dynamic, ever-changing deepwater conditions.',
            //                        '</div>',
            //                    '</div>',
            //                '</div>'
            //            ].join('')
            //        },
            //        {
            //            xtype: 'container', border: 1, style: { backgroundColor: 'red', color: 'white' },
            //            html: [
            //                '<div style="margin:15px 5px 5px 5px">',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:center;font-weight:bold">',
            //                          'Join us at OTC Brasil 2013',
            //                        '</div>',
            //                    '</div>',
            //                    '</br>',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:left">',
            //                            'Learn how we can help you produce hydrocarbons more efficiently and safely in today\'s dynamic, ever-changing deepwater conditions.',
            //                        '</div>',
            //                    '</div>',
            //                '</div>'
            //            ].join('')
            //        },
            //        {
            //            xtype: 'container', border: 1, style: { backgroundColor: 'yellow', color: 'black' },
            //            html: [
            //                '<div style="margin:15px 5px 5px 5px">',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:center;font-weight:bold">',
            //                          'Join us at OTC Brasil 2013',
            //                        '</div>',
            //                    '</div>',
            //                    '</br>',
            //                    '<div style="display:table;width:100%">',
            //                        '<div style="display:table-cell;text-align:left">',
            //                            'Learn how we can help you produce hydrocarbons more efficiently and safely in today\'s dynamic, ever-changing deepwater conditions.',
            //                        '</div>',
            //                    '</div>',
            //                '</div>'
            //            ].join('')
            //        }
            //    ]
            //},


		{
		    xtype: 'cover',
		    flex: 1,
		    itemCls: 'my-cover-item',
		    //These are just for demo purposes.
		    id: 'homeCover',
		    height:  300 ,
		    width:  '100%' ,

		    //height: (Ext.os.deviceType !== 'Phone')? 300: undefined,
		    //width: (Ext.os.deviceType !== 'Phone')? 800: undefined,
		    //end-demo
		    itemTpl : [
				'<div>',
					//'<div class="dev">{firstName} {lastName}</div>',
					//'<div class="company">{company}</div>',
					'<div class="image"><tpl if="image"><img  src="{image}"></tpl></div>',
				'</div>'
		    ],
		    store : {
		        fields: ['firstName', 'lastName', 'company', 'image', 'url' ],
		        data: [
{ image: 'resources/images/BluePrint.png', url: 'http://hub.slb.com/news/you_and_your_career/2013_sep25_slp3_qa_stephanie_cox.aspx' },
//{ image: 'resources/images/CEOAward.png', url: 'http://hub.slb.com/news/events/2013/2013_nov04_pbs_chairman_gold_award.aspx' },
{ image: 'resources/images/GearingUp.png', url: 'http://hub.slb.com/news/hse/2013/2013_0ct30_global_journey_management.aspx' },
{ image: 'resources/images/GoingGlobal.png', url: 'http://hub.slb.com/news/our_organization/areas_geomarkets/2013/2013_oct11_local_content.aspx' },
//{ image: 'resources/images/GoldWinners.png', url: 'http://hub.slb.com/news/today/2013_sep12_today_pbs_gold_winners_announced.aspx' },
//{ image: 'resources/images/GroupSymposia.png', url: 'http://hub.slb.com/news/events/2013/2013_sep23_group_symposia_results.aspx' },
//{ image: 'resources/images/InTouch.png', url: 'http://hub.slb.com/news/resources/2013/2013_oct23_15_years_of_staying_intouch.aspx' },
{ image: 'resources/images/InventionAwards.png', url: 'http://hub.slb.com/news/events/2013/2013_oct18_slb_invention_awards_2013_open_for_submissions.aspx' },
//{ image: 'resources/images/JeffSpath.png', url: 'http://hub.slb.com/news/today/2013_oct2_jeff_spath_spe_prez.aspx' },
//{ image: 'resources/images/NorthSeaReorg.png', url: 'http://hub.slb.com/news/our_organization/areas_geomarkets/2013/2013_oct03_north_sea_gm_reorg.aspx' },
{ image: 'resources/images/StopTheJob.png', url: 'http://hub.slb.com/news/hse/hse_hotspot/2013_sep17_hotspot_stop_the_job.aspx' }
//{ image: 'resources/images/Transformation.png', url: 'http://hub.slb.com/news/executive_messages/2013/2013_sept12_transformation.aspx' }
		        ]
		    },
		    selectedIndex: 2,
		    listeners:{
		        itemdoubletap: function(){
		            console.log('itemdbltap', arguments);
		        },
		        itemtap: function(cover, idx){
		            console.log('itemtap', arguments);
		        },
		        scope: this
		    }
		},

            {
                xtype: 'container',
                margin: '5 5 0 5',
                style: { textAlign: 'center', xborderColor: 'red', xbackgroundColor: '#333333', xcolor: '#000000' },
                html: "Most Recent Projects"
            },

            {
                xtype: 'list',
                ui: 'round',
                height: 200,
                margin: ' 0 0 0 0',
                padding: '0 0 0 0',

                pinHeaders: false,

                listeners: {
                    itemtap: function (list, index, target, record, e, eOpts) {
                        com.setProjectId(record.data.projectId);
                        com.setProjectName(record.data.projectName);
                        Ext.getCmp('projectsID').setActiveItem('summary');
                        Ext.getCmp('main').setActiveItem(Ext.getCmp('projectsID'));
                    }
                    //keyup: this.onSearchKeyUp
                },
                variableHeights: true,

                itemTpl: [
                //'<div style="display:table;width:100%">',
                //        '<div style="display:table-cell;text-align:left;font-weight:bold">Project:</div>',
                //'</div>',
                '<div class="clickable" style="white-space:normal !important;font-size:16px;margin:5px 0px 5px 0px">{projectId} - {projectName}</div>'
                //'<div style="display:table;width:100%">',
                //        '<div style="display:table-cell;text-align:left;font-weight:bold">PM</div>',
                //        '<div style="display:table-cell;text-align:right;font-weight:bold">PC</div>',
                //'</div>',
                //'<div style="display:table;width:100%">',
                //        '<div style="display:table-cell;text-align:left">{projectManager}</div>',
                //        '<div style="display:table-cell;text-align:right"> {productChampion} </div>',
                //'</div>'
                ].join(''),

                useSimpleItems: true,
                //grouped: true,
                emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>'
                //disableSelection: true
            }

        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
                com.setTitle(me, 'Welcome Marc');
                try {
                }
                catch (exception) {
                }
            }
        }
    },

    getData: function () {
        var me = this;
        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetProjects';
        var theParms = {};
        $.ajax(com.ajaxObject(theUrl, theParms))
        .done(function (data) {
            var storeProjects = Ext.create('Ext.data.Store', {
                fields: ['projectId', 'projectName', 'projectManager', 'productChampion'],
                data: data
            });
            me.down('list').setStore(storeProjects);
        })
        .fail(function (data) {
            throw data.status + '-' + data.statusText + ': ' + theUrl;
        });
    },


    //getData: function () {
    //    var me = this;
    //    debugger;
    //    var projectStore = me.getStore();
    //    me.down('list').setStore(projectStore);
    //},

    getStore: function () {
        //check if a store has already been set
        if (!this.store) {
            //if not, create one
            this.store = Ext.create('Ext.data.Store', {
                //define the stores fields
                fields: ['firstName', 'lastName'],

                //sort the store using the lastname field
                //sorters: 'lastName',

                //group the store using the lastName field
                //groupField: 'lastName',

                //and give it some data
                data: [
                    { firstName: 'Tommy', lastName: 'Maintz' },
                    { firstName: 'Rob', lastName: 'Dougan' },
                    { firstName: 'Ed', lastName: 'Avins' },
                    { firstName: 'Jamie', lastName: 'Avins' },
                    { firstName: 'Dave', lastName: 'Dougan' },
                    { firstName: 'Abraham', lastName: 'Elias' },
                    { firstName: 'Jacky', lastName: 'Ngyuyen' },
                    { firstName: 'Jay', lastName: 'Ngyuyen' },
                    { firstName: 'Jay', lastName: 'Robinson' },
                    { firstName: 'Rob', lastName: 'Avins' },
                    { firstName: 'Ed', lastName: 'Dougan' },
                    { firstName: 'Jamie', lastName: 'Poulden' },
                    { firstName: 'Dave', lastName: 'Spencer' },
                    { firstName: 'Abraham', lastName: 'Avins' },
                    { firstName: 'Jacky', lastName: 'Avins' },
                    { firstName: 'Rob', lastName: 'Kaneda' },
                    { firstName: 'Ed', lastName: 'Elias' },
                    { firstName: 'Tommy', lastName: 'Dougan' },
                    { firstName: 'Rob', lastName: 'Robinson' }
                ]
            });
        }

        //return the store instance
        return this.store;
    },

    /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     */
    onSearchKeyUp: function (field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getStore();

        //first clear any current filters on the store. If there is a new value, then suppress the refresh event
        store.clearFilter(!!value);

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(','),
                regexps = [],
                i, regex;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function (record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('firstName') + ' ' + record.get('lastName'));

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function () {
        //call the clearFilter method on the store instance
        this.getStore().clearFilter();
    }



});