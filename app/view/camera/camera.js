Ext.define('V2POC.view.camera.Camera', {
    extend: 'Ext.Panel',
    xtype: 'camera',

    initialize: function () {
        this.items.items[0].setTitle(this.title);
        this.callParent();
    },

    config: {
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                xtype: 'image',
                src: 'http://plascehold.it/200x200',
                width: 200,
                height: 200
            },
            {
                xtype: 'button',
                text: 'Photo',
                handler: function () {
                    function success(image_uri) {
                        var img = Ext.ComponentQuery.query('image')[0];
                        img.setSrc(image_uri);
                    };
                    function fail(message) {
                        alert(message);
                    };
                    navigator.camera.getPicture(success, fail, {
                        quality: 50,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                    })
                }
            }
        ]
    }
});