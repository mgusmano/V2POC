Ext.define('V2POC.com', {
    singleton: true,
    alternateClassName: 'com',

    theTest: true,

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
            defaults: { xtype: "menubutton" },
            width: '80%',
            scrollable: 'vertical',
            items: items
        });
        Ext.Viewport.setMenu(menu, { side: 'left', reveal: true });
    },

    getHeader: function () {
        return  {
            xtype: "toolbar",
            items: [
               {
                   iconCls: "list",
                   ui: "plain",
                   left: 0,
                   listeners: {
                       tap: function () {
                           Ext.Viewport.toggleMenu("left");
                       }
                   }
               }
            ]
        }
    }

});