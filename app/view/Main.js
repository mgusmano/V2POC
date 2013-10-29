Ext.define('V2POC.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'V2POC.view.base.ChildPanel'
    ],

    config: {
        //tabBar: { hidden: true },

        tabBarPosition: 'bottom',
        items: [
            { xtype: 'childpanel', iconCls: 'team', title: 'projects', p: [{ panel: 'summary', title: 'Project Summary' }, { panel: 'team', title: 'Project Team' }, { panel: 'riskmatrix', title: 'Project Risks Matrix' }, { panel: 'risksgrid', title: 'Project Risks Grid' }, { panel: 'risksdataview', title: 'Project Risks Dataview' }] },
            { xtype: 'childpanel', iconCls: 'organize', title: 'requisitions', p: [{ panel: 'viewrequisitions', title: 'View Requisitions' }, { panel: 'viewapprovals', title: 'View Approvals' }] },
            { xtype: 'childpanel', iconCls: 'favorites', title: 'misc', p: [{ panel: 'camera', title: 'The Camera' }, { panel: 'buttons', title: 'The Buttons' }], id: 'miscID' }

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
