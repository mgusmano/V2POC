Ext.define('V2POC.com', {
    singleton: true,
    alternateClassName: 'com',

    requires: [
    //    'V2POC.view.base.Header'
    ],

    theTest: true,

    config: {
        projectId: null,
        projectName: null
    },

    ajaxUrl: function (theService, theMethod) {
        //return 'http://' + location.hostname + ':8095/' + 'api/' + theService + '/' + theMethod;
        return 'http://' + location.hostname + ':8095/' + theService + '.svc/json/' + theMethod;
    },

    ajaxObject: function (theUrl, theParms, theAsync) {
        if (theAsync === undefined) {
            theAsync = true;
        }
        return {
            url: theUrl,
            type: 'POST',
            crossDomain: true,
            data: Ext.encode(theParms),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            dataType: 'json',
            async: theAsync
        };
    },

    setMenu: function (items) {
        var menu = Ext.create("Ext.Menu", {
            width: '265px',
            scrollable: 'vertical',
            cls: 'mainmenu x-header-dark',
            layout: 'vbox',
            style: {
                backgroundColor: '#061f31'
            },
            items: [
                { xtype: 'container', margin: '0 20 0 20', defaults: { xtype: "menubutton" }, items: items},
                {
                    xtype: 'container', margin: '0 20 0 20', 
                    items: [
                    ]
                },
            ]
            
            
        });
        Ext.Viewport.setMenu(menu, { side: 'left', reveal: true });
    },

    getHeader: function () {
        return {
            xtype: "container",
            itemId: 'headerContainer',
            dock: 'top',
            height: 50,
            width: '100%',
            margin: '0 0 0 0',
            padding: '0 0 0 0',
            cls: 'x-header-dark x-header',
            style: {
                backgroundColor: 'gray',
                color: '#ffffff'
            },
            layout: 'hbox',
            items: [
               {
                   xtype: 'button',
                   margin: '10 0 0 5',
                   width: 32,
                   iconCls: "list",
                   ui: "plain",
                   style: {
                       //backgroundColor: 'gray',
                       background: 'transparent',
                       color: '#ffffff',
                       padding: '0 0 0 0'
                   },
                   listeners: {
                       tap: function () {
                           Ext.Viewport.toggleMenu("left");
                       }
                   }
               },
               {
                   xtype: 'container',
                   flex: 1,
                   itemId: 'titleContainer',
                   layout: 'vbox',
                           doTitle: function (s) {
                               this.down('#titleLabel').setHtml(com.getProjectId() + '-' + com.getProjectName());
                               this.down('#titleSubLabel').setHtml(s);
                           },
                        items: [
                       {
                           xtype: 'label',
                           itemId: 'titleLabel',
                           styleHtmlCls: 'titleLabel',
                           styleHtmlContent: true
                       },
                       {
                           xtype: 'label',
                           itemId: 'titleSubLabel',
                           styleHtmlCls: 'titleSubLabel',
                           styleHtmlContent: true
                       }
                   ]
               }
               //{
               //    xtype: 'button',
               //    width: 45,
               //    iconCls: "more",
               //    ui: "plain",
               //    style: {
               //        backgroundColor: 'gray',
               //        color: '#ffffff'
               //    },
               //    listeners: {
               //        tap: function () {
               //            Ext.Viewport.toggleMenu("right");
               //        }
               //    }
               //}
            ]
        }
    },

    setTitle: function (me) {
        if (com.getProjectId() != null) {
            //me.down('#titleLabel').setHtml(com.getProjectId() + '-' + com.getProjectName());
            //me.down('#titleSubLabel').setHtml(me.getTitle());
            me.down('#titleLabel').setHtml(me.getTitle());
            me.down('#titleSubLabel').setHtml(com.getProjectId() + '-' + com.getProjectName());
        }
        else {
            me.down('#titleLabel').setHtml(me.getTitle());
            me.down('#titleSubLabel').setHtml('');
        }
    },


    whatAmI: function () {
        var is = '';
        if (Ext.os.is.Tablet != undefined) {
            is += Ext.os.is.Tablet + ';';
        }
        if (Ext.os.is.Phone != undefined) {
            is += Ext.os.is.Phone + ';';
        }
        return is;
    }

});