Ext.define('V2POC.view.requisition.ViewRequisitions', {
    extend: 'Ext.Panel',
    xtype: 'viewrequisitions',

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
                layout: 'hbox',
                items: [
<<<<<<< HEAD
                    {
                        xtype: 'container',
                        html:
                            '<img src="resources/images/award.png" alt="Smiley face" width="135" height="75" >' +
                            '<div>04 Nov 2013 - The winner of the 2013 CEO\'s Award - top prize in the annual Performed by Schlumberger program - was announced on Friday, November 1.</div>' 
                    }
=======
                    { xtype: 'container', html: '' },
                    { xtype: 'container', html: '' }
>>>>>>> 1f6759f5793b8622613f694df4edb279f04fc43e

                ]
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
