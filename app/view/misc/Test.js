Ext.define('V2POC.view.misc.Test', {
    extend: 'Ext.Container',
    xtype: 'test',
    requires: [
        'Ext.dataview.DataView',
        'Ext.data.Store'
    ],

    initialize: function () {
        this.create();
    },

    create: function () {
        this.items.items[0].setTitle(this.getTitle());
        this.getData();
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
                {
                    xtype: 'dataview',
                    margin: '5 5 5 5',

                    useComponents: true,
                    defaultType: 'testlistitem',

                    id: 'theTest',
                    flex: 1,
                    listeners: {
                        scope: this,
                        itemtap: function (dataview, index, target, record, e, eOpts) {
                            alert(record.data.riskName);
                            //var store = this.down('grid').store;
                            //store.clearFilter();
                            //store.filter("riskSeverity", record.data.severity);
                            //store.filter("riskOccurrence", record.data.occurrence);
                        }
                    },
                    singleSelect: true,
                    //overItemCls: 'x-view-over',
                    itemSelector: '.clickable'
                    //emptyText: 'No data available',
                    //deferInitialRefresh: false,
                }
        ]
    },

    getData: function () {

        var theData = [
            { riskName: 'marc', riskScore: 25 },
            { riskName: 'nick', riskScore: 22 },
            { riskName: 'andy', riskScore: 20 }
        ];

        var storeRisks = Ext.create('Ext.data.Store', {
            fields: ['riskName', 'riskScore'],
            data: theData
        });
        Ext.getCmp('theTest').setStore(storeRisks);



        //var me1 = this;
        //var theUrl = 'http://' + location.hostname + ':8095/' + 'ProjectService.svc/json/GetRiskBurndown';
        //var theParms = { type: 1, projectId: 97370 };
        //$.ajax(com.ajaxObject(theUrl, theParms))
        //.done(function (data) {
        //    var storeRisks = Ext.create('Ext.data.Store', {
        //        fields: ['riskSequence', 'riskName', 'riskSeverity', 'riskOccurrence', 'riskScore', 'riskExposureCategorySequence', 'riskExposureCategoryName', 'placesUsed'],
        //        data: data.Risks
        //    });
        //    Ext.getCmp('theTest').setStore(storeRisks);
        //})
        //.fail(function (data) {
        //    throw data.status + '-' + data.statusText + ': ' + theUrl;
        //});
    }
});


/**
 * A simple list item to show a picture, name and cuteness value of a kitten, from the
 * {@link Example.store.Kittens} store.
 */
Ext.define('V2POC.view.misc.TestListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'testlistitem',
    /**
     * we are including both Ext.Img component for the image, and the Ext.slider.Slider
     * component for the cuteness slider.
     */
    requires: [
        'Ext.Img',
        'Ext.slider.Slider'
    ],

    config: {
        /**
         * A custom cls for each item
         */
        cls: 'kitten-list-item',

        /**
         * setup the dataMap. each property is a method in 'this' class, and then
         * inside that config, it will call the method you pass with the value you
         * want, form the record
         */
        dataMap: {
            //this will call: this.getImage()
            //getImage: {
            //    //and then this will call: this.getImage().setSrc() with the
            //    //'image' field value form the record
            //    setSrc: 'image'
            //},

            getName: {
                setHtml: 'riskName'
            },

            getSlider: {
                setValue: 'riskScore'
            }
        },

        /**
         * @cfg {Boolean/Object/Ext.Img} image
         * The config for the image component used in this dataitem.
         * In this case, we just pass true, because we just want it to create
         * a new Ext.Img.
         */
        //image: true,

        /**
         * @cfg {Boolean/Object/Ext.Component} name
         * The component used to show an image. It is an Ext.Component, so we
         * just want to add a cls so we can style it, and add some flex so it
         * looks good.
         */
        name: {
            cls: 'x-name',
            flex: 1
        },

        /**
         * @cfg {Boolean/Object/Ext.slider.Slider} slider
         * The slider component to show the cuteness of the kitten. We just want to
         * add some flex to make it look good.
         */
        slider: {
            flex: 2,
            minValue: 0,
            maxValue: 25
        },

        /**
         * We give it a hbox layout so the items are horizontally displayed, and then
         * give it an align of center so they are vertically centered.
         */
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    /**
     * Called when you set the {@link #image} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     */
    //applyImage: function (config) {
    //    return Ext.factory(config, Ext.Img, this.getImage());
    //},

    /**
     * Called when you set the {@link #image} configuration, and is passed both the new value
     * (from applyImage) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     * @private
     */
    //updateImage: function (newImage, oldImage) {
    //    if (newImage) {
    //        this.add(newImage);
    //    }

    //    if (oldImage) {
    //        this.remove(oldImage);
    //    }
    //},

    /**
     * Called when you set the {@link #name} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    applyName: function (config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    updateName: function (newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    /**
     * Called when you set the {@link #slider} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    applySlider: function (config) {
        return Ext.factory(config, Ext.slider.Slider, this.getSlider());
    },

    /**
     * Called when you set the {@link #slider} configuration, and is passed both the new value
     * (from applySlider) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    updateSlider: function (newSlider, oldSlider) {
        if (newSlider) {
            this.add(newSlider);
        }

        if (oldSlider) {
            this.remove(oldSlider);
        }
    }
});