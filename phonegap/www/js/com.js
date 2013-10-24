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
    }
});