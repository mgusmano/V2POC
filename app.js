/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'V2POC',

    requires: [
        'Ext.MessageBox',
        'Ext.Menu',
        'Ext.data.Store'
    ],

    views: [
        'Main',
        'Tomatos',

        'home.Dashboard',

        'base.MenuButton',
        'base.ChildPanel',

        'project.RiskMatrix',
        'project.RisksGrid',
        'project.RisksDataview',
        'project.Summary',
        'project.Team',

        'requisition.ViewRequisitions',
        'requisition.ViewApprovals',

        'misc.Cover',
        'misc.TeamTest',
        'misc.Camera',
        'misc.Buttons',
        'misc.TextArea',
        'misc.Test'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

   // profiles: ['Tablet', 'Phone'],

            //function alertDismissed() {
            //    // do something
            //};

            //navigator.notification.alert(
            //    orientation,  // message
            //    alertDismissed,         // callback
            //    'orientation',            // title
            //    'Done'                  // buttonName
    //);

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();

        Ext.Viewport.bodyElement.on('resize', Ext.emptyFn, this, { buffer: 1 });

        Ext.Viewport.on('orientationchange', function (me, orientation, width, height, eOpts) {

            //Ext.getCmp('reqCover').refresh();
            //Ext.getCmp('coverCover').refresh();
            Ext.getCmp('homeCover').refresh();

            if (orientation == 'portrait') {
                dock = 'top';
                Ext.getCmp('main').setTabBar({ hidden: false });
                Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setHeight(250);
                document.getElementById('theOverall').style.display = 'block'
                document.getElementById('theMatrix').style.display = 'block'
                document.getElementById('theFilter').style.display = 'block'

            }
            else {
                dock = 'left';
                Ext.getCmp('main').setTabBar({ hidden: true });
           }
            Ext.getCmp('dashboardPortletRiskMatrix').getItems().items[1].getItems().items[0].setDocked(dock);
        });


        //if (Ext.os.is.Android) {
        //        Ext.Msg.alert('orientationApp', orientation);
        //        Ext.Viewport.setSize(window.innerWidth, window.innerHeight);
        //    }
        //});

        //Ext.device.Orientation.on({
        //    scope: this,
        //    orientationchange: function (e) {
        //        Ext.Msg.alert('Ext.device.Orientation', e.alpha + '-' + e.beta + '-' + e.gamma);
        //    }
        //});

        // Initialize the main view
        Ext.Viewport.add(Ext.create('V2POC.view.Main'));

        //var myVar = setInterval(function () {
        //    var b = Ext.getCmp('requisitionsID');
        //    var v = b.tab.getBadgeText();
        //    if (v === null) {
        //        v = 0;
        //    }
        //    theVal = parseInt(v);
        //    theVal = theVal + 1;
        //    b.tab.setBadgeText(theVal);
        //    navigator.notification.vibrate(2000);
        //    navigator.notification.beep(3);
        //    clearInterval(myVar);
        //}, 10000);

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});



