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
            {
                xtype: 'container',
                margin: '5 0 0 0',
                style: { textAlign: 'center', borderColor: 'red' },
                html: "Today's News"
            },

            {
                xtype: 'carousel',
                flex: 1,
                style: { textAlign: 'center', borderColor: 'red' },
                border: 5,
                margin: '5 5 5 5',
                bufferSize: 2,
                direction: 'horizontal',
                items: [
                    {
                        xtype: 'container', border: 1, style: { backgroundColor: 'blue', color: 'white' },
                        html: [
                            '<div style="margin:15px 5px 5px 5px">',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:center;font-weight:bold">',
                                      'Oilfield Review</br>Now Available on the iPad',
                                    '</div>',
                                '</div>',
                                '</br>',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:left">',
                                        'Download the Oilfield Review app in the App Store or on iTunes to access animation- and video-enhanced articles, as well as archived issues of this premier E&P technical journal.',
                                    '</div>',
                                '</div>',
                            '</div>'
                            ].join('')
                    },
                    {
                        xtype: 'container', border: 1, style: { backgroundColor: 'green', color: 'white' },
                        html: [
                            '<div style="margin:15px 5px 5px 5px">',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:center;font-weight:bold">',
                                      'Join us at OTC Brasil 2013',
                                    '</div>',
                                '</div>',
                                '</br>',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:left">',
                                        'Learn how we can help you produce hydrocarbons more efficiently and safely in today\'s dynamic, ever-changing deepwater conditions.',
                                    '</div>',
                                '</div>',
                            '</div>'
                        ].join('')
                    },
                    {
                        xtype: 'container', border: 1, style: { backgroundColor: 'red', color: 'white' },
                        html: [
                            '<div style="margin:15px 5px 5px 5px">',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:center;font-weight:bold">',
                                      'Join us at OTC Brasil 2013',
                                    '</div>',
                                '</div>',
                                '</br>',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:left">',
                                        'Learn how we can help you produce hydrocarbons more efficiently and safely in today\'s dynamic, ever-changing deepwater conditions.',
                                    '</div>',
                                '</div>',
                            '</div>'
                        ].join('')
                    },
                    {
                        xtype: 'container', border: 1, style: { backgroundColor: 'yellow', color: 'black' },
                        html: [
                            '<div style="margin:15px 5px 5px 5px">',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:center;font-weight:bold">',
                                      'Join us at OTC Brasil 2013',
                                    '</div>',
                                '</div>',
                                '</br>',
                                '<div style="display:table;width:100%">',
                                    '<div style="display:table-cell;text-align:left">',
                                        'Learn how we can help you produce hydrocarbons more efficiently and safely in today\'s dynamic, ever-changing deepwater conditions.',
                                    '</div>',
                                '</div>',
                            '</div>'
                        ].join('')
                    }
                ]
            },

            {
                xtype: 'container',
                margin: '5 5 0 5',
                style: { textAlign: 'center', borderColor: 'red' },
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
                    },
                    //keyup: this.onSearchKeyUp
                },
                variableHeights: true,

                itemTpl: [
                '<div style="display:table;width:100%">',
                        '<div style="display:table-cell;text-align:left;font-weight:bold">Project:</div>',
                '</div>',
                '<div class="clickable" style="white-space:normal !important;font-size:16px;margin:5px 0px 5px 0px">{projectId} - {projectName}</div></br>',
                '<div style="display:table;width:100%">',
                        '<div style="display:table-cell;text-align:left;font-weight:bold">PM</div>',
                        '<div style="display:table-cell;text-align:right;font-weight:bold">PC</div>',
                '</div>',
                '<div style="display:table;width:100%">',
                        '<div style="display:table-cell;text-align:left">{projectManager}</div>',
                        '<div style="display:table-cell;text-align:right"> {productChampion} </div>',
                '</div>'
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