Ext.define('V2POC.view.misc.Buttons', {
    extend: 'Ext.Panel',
    xtype: 'buttons',

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
                text: 'New Window', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        var ref = window.open('http://mjguitester.azurewebsites.net/sites/97370/Portal.aspx', '_blank', 'location=no');
                    }
                }
            },
            {
                text: 'Phone', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        document.location.href = 'tel:847-331-2020';
                    }
                }
            },

            {
                text: 'SMS', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        document.location.href = 'SMS:847-331-2020,847-571-0781?body=hello%0D%0Athere';
                        // "%0D%0A"
                        //window.open('tel:+1-800-555-1234');
                        //window.open('mailto:webmaster@example.com');
                    }
                }
            },


            {
                text: 'Mail', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        document.location.href = 'mailto:mgusmano@yahoo.com?subject=the subject&body=hello%0D%0Athere';
                        // "%0D%0A"
                        //window.open('tel:+1-800-555-1234');
                        //window.open('mailto:webmaster@example.com');
                    }
                }
            },


            {
                text: 'Contact Find', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {


                        //id: A globally unique identifier. (DOMString)
                        //displayName: The name of this Contact, suitable for display to end-users. (DOMString)
                        //name: An object containing all components of a persons name. (ContactName)
                        //nickname: A casual name by which to address the contact. (DOMString)
                        //phoneNumbers: An array of all the contact's phone numbers. (ContactField[])
                        //emails: An array of all the contact's email addresses. (ContactField[])
                        //addresses: An array of all the contact's addresses. (ContactAddress[])
                        //ims: An array of all the contact's IM addresses. (ContactField[])
                        //organizations: An array of all the contact's organizations. (ContactOrganization[])
                        //birthday: The birthday of the contact. (Date)
                        //note: A note about the contact. (DOMString)
                        //photos: An array of the contact's photos. (ContactField[])
                        //categories: An array of all the user-defined categories associated with the contact. (ContactField[])
                        //urls: An array of web pages associated with the contact. (ContactField[])

                        Ext.getCmp('theTextArea').setHtml('this is a test');

                        var options = new ContactFindOptions();
                        options.filter = "Zoya";
                        var fields = ["displayName", "name", "phoneNumbers", "emails"];
                        navigator.contacts.find(fields, onSuccess, onError, options);
                        function onSuccess(contacts) {
                            for (var i = 0; i < contacts.length; i++) {
                                console.log("Display Name = " + contacts[i].displayName);

                                var phoneNumbers = Ext.encode(contacts[i].phoneNumbers);
                                navigator.notification.alert(contacts[i].displayName, alertDismissed, phoneNumbers, 'OK');

                                var p = Ext.encode(contacts[i]);
                                console.log(p);
                                Ext.getCmp('theTextArea').setHtml(p);
                                document.location.href = 'tel:' + contacts[i].phoneNumbers[0].value;



                                function alertDismissed() {
                                    // do something
                                }
                            }
                        }

                        // onError: Failed to get the contacts

                        function onError(contactError) {
                            alert('onError!');
                        }


                    }
                }
            },

            {
                text: 'Notfication', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        function alertDismissed() {
                            // do something
                        }

                        navigator.notification.alert(
                            'You are the winner!',  // message
                            alertDismissed,         // callback
                            'Game Over',            // title
                            'Done'                  // buttonName
                        );



                    }
                }
            },

            {
                text: 'Scan', xtype: "button", width: 250, height: 20,
                listeners: {
                    tap: function () {

                        cordova.plugins.barcodeScanner.scan(
                           function (result) {
                               alert("We got a barcode\n" +
                                     "Result: " + result.text + "\n" +
                                     "Format: " + result.format + "\n" +
                                     "Cancelled: " + result.cancelled);
                           },
                           function (error) {
                               alert("Scanning failed: " + error);
                           }
                        );


                    }
                }
            },

            {
                text: 'Beep', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        navigator.notification.beep(3);
                    }
                }
            },
            {
                text: 'Vibrate', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        navigator.notification.vibrate(2000);
                    }
                }
            },
            {
                text: 'Set Badge Text', xtype: "button", width: 250, height: 25,
                listeners: {
                    tap: function () {
                        var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
                        var theParms = { type: 1, projectId: 97370 };
                        var me = this;
                        $.ajax(com.ajaxObject(theUrl, theParms, false))
                        .fail(function (data) { throw data.status + '-' + data.statusText + ': ' + theUrl; })
                        .done(function (data) {
                            var b = Ext.getCmp('miscID');
                            var v = b.tab.getBadgeText();
                            if (v === null) {
                                v = 0;
                            }
                            theVal = parseInt(v);
                            theVal = theVal + 1;
                            b.tab.setBadgeText(theVal);
                        });
                    }
                }
            }
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
                com.setTitle(me);
                try {
                }
                catch (exception) {
                }
            }
        }
    }
});