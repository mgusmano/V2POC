var cover = Ext.create('V2POC.view.misc.Cover', {
    itemCls: 'my-cover-item',
    id: 'coverCover',
    //These are just for demo purposes.
    height: (Ext.os.deviceType !== 'Phone') ? 300 : undefined,
    width: (Ext.os.deviceType !== 'Phone') ? 800 : undefined,
    //end-demo
    itemTpl: [
        '<div>',
            '<div class="dev">{firstName} {lastName}</div>',
            '<div class="company">{company}</div>',
            '<div class="image"><tpl if="image"><img  src="{image}"></tpl></div>',
        '</div>'
    ],
    store: {
        fields: ['firstName', 'lastName', 'company', 'image'],
        data: [
            { firstName: 'Tommy', lastName: 'Maintz', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Rob', lastName: 'Dougan', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Max', lastName: 'Fierro', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Ed', lastName: 'Spencer', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Jamie', lastName: 'Avins', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Aaron', lastName: 'Conran', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Dave', lastName: 'Kaneda', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Michael', lastName: 'Mullany', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Abraham', lastName: 'Elias', company: 'Sencha', image: 'resources/images/sencha.png' },
            { firstName: 'Jay', lastName: 'Robinson', company: 'Sencha', image: 'resources/images/sencha.png' }
        ]
    },
    selectedIndex: 2,
    listeners: {
        itemdoubletap: function () {
            console.log('itemdbltap', arguments);
        },
        itemtap: function (cover, idx) {
            console.log('itemtap', arguments);
        },
        scope: this
    }
});


Ext.define('V2POC.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',
    requires: [
        'V2POC.view.base.ChildPanel'
    ],

    config: {
        tabBarPosition: 'bottom',
        items: [





            {
                xtype: 'childpanel', iconCls: 'home', title: 'home',
                p: [
                    { panel: 'dashboard', title: 'Dashboard' }
                ]
            },
            {
                xtype: 'childpanel', id: 'projectsID', iconCls: 'team', title: 'projects',
                p: [
                    { panel: 'summary', title: 'Summary' },
                    { panel: 'team', title: 'Team' },
                    { panel: 'riskmatrix', title: 'Risks Matrix' },
                    //{ panel: 'risksgrid', title: 'Risks Grid' },
                    { panel: 'risksdataview', title: 'All Risks' }
                ]
            },
            {
                xtype: 'childpanel', id: 'requisitionsID', iconCls: 'organize', title: 'requisitions',
                p: [
                    { panel: 'viewrequisitions', title: 'Requisitions' },
                    { panel: 'viewapprovals', title: 'Approvals' }
                ]
            },
            {
                xtype: 'childpanel', id: 'miscID', iconCls: 'favorites', title: 'misc',
                p: [
                    { panel: 'textarea', title: 'The TextArea' },
                    { panel: 'buttons', title: 'The Buttons' },
                    { panel: 'teamtest', title: 'The TeamTest' },
                    { panel: 'camera', title: 'The Camera' },
                    { panel: 'test', title: 'The Test' }
                ]
            }


            //{ xtype: 'tomatos' },

            //{ title: 'arrow_down', iconCls: 'arrow_down' },
            //{ title: 'arrow_left', iconCls: 'arrow_left' },
            //{ title: 'arrow_right', iconCls: 'arrow_right' },
            //{ title: 'arrow_up', iconCls: 'arrow_up' }
            //{ title: 'compose', iconCls: 'compose' },
            //{ title: 'delete', iconCls: 'delete' },
            //{ title: 'organize', iconCls: 'organize' },
            //{ title: 'refresh', iconCls: 'refresh' },
            //{ title: 'reply', iconCls: 'reply' },
            //{ title: 'search', iconCls: 'search' },
            //{ title: 'settings', iconCls: 'settings' },
            //{ title: 'star', iconCls: 'star' },
            //{ title: 'trash', iconCls: 'trash' },
            //{ title: 'maps', iconCls: 'maps' },
            //{ title: 'locate', iconCls: 'locate' },
            //{ title: 'home', iconCls: 'home' },
            //{ title: 'bookmarks', iconCls: 'bookmarks' },
            //{ title: 'download', iconCls: 'download' },
            //{ title: 'favorites', iconCls: 'favorites' },
            //{ title: 'info', iconCls: 'info' },
            //{ title: 'more', iconCls: 'more' },
            //{ title: 'time', iconCls: 'time' },
            //{ title: 'user', iconCls: 'user' },
            //{ title: 'team', iconCls: 'team' },	

        ]
    }
});
