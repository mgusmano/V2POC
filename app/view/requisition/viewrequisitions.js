$(function () {
    $('body').on('click', '.teamSMS', function () {
        var pn = $(this).attr('pn');
        document.location.href = 'SMS:' + pn + '?body=message %0D%0A here';
    });

    $('body').on('click', '.call', function () {
        var alias = $(this).html();
        var pn = $(this).attr('pn');
        Ext.Msg.confirm('Phone Call', 'Call ' + alias + '?', function (btn) {
            if (btn === 'yes') {
                debugger;
                document.location.href = 'tel:' + pn;
            }
            else {
            }
        });
    });

    $('body').on('click', '.amt', function () {
        Ext.Msg.confirm('Approve', 'Do you want to approve this?', function (btn) {
            if (btn === 'yes') {
                var data = [
                    { grsNo: 'R497464', grsAmt: '$52,240', supplier: 'Hitachi', days: 3, remaining: 1, next: 'mwill', "phone": "555-111-1224" },
                    { grsNo: 'R494652', grsAmt: '$360,053', supplier: 'Dassault', days: 4, remaining: 1, next: 'Nouaze1', "phone": "555-222-1234" },
                    { grsNo: 'R492812', grsAmt: '$42', supplier: 'SHI International', days: 1, remaining: 1, next: 'Kishino', "phone": "555-222-1244" }
                ];
                Ext.getCmp('openGRS').setData(data);

                var b = Ext.getCmp('requisitionsID');
                var v = b.tab.setBadgeText();


            }
            else {
                //some code
            }
        });
    });

    $('body').on('click', '.teamEmail', function () {
        var em = $(this).attr('em');
        document.location.href = 'mailto:' + em + '?subject=the subject&body=hello%0D%0Athere'
    });
});

Ext.define('V2POC.view.requisition.ViewRequisitions', {
    extend: 'Ext.Panel',
    xtype: 'viewrequisitions',

    initialize: function () {
        this.create();
    },

    create: function () {
    },

    config: {
        title: null,
        layout: 'vbox',
        items: [
            com.getHeader(),
            {
                xtype: 'container',
                margin: '5 5 0 5',
                style: { textAlign: 'center', fontSize: '12px' },
                html: "Open GRS Requests - Full Project Summary"
            },
            {
            xtype: 'container',
                width: '99%',
                height: 150,
                id: 'openGRS',
                padding: '5 5 5 5',
                height: 250,
                data: [
                        { grsNo: 'R497464', grsAmt: '$52,240', supplier: 'Hitachi', days: 3, remaining: 1, next: 'mwill', "phone": "555-111-1224" }, 
                        { grsNo: 'R494652', grsAmt: '$360,053', supplier: 'Dassault', days: 4, remaining: 1, next: 'Nouaze1', "phone": "555-222-1234" },
                        { grsNo: 'R492812', grsAmt: '$42', supplier: 'SHI International', days: 1, remaining: 1, next: 'Kishino', "phone": "555-222-1244" }
                ],
                tpl: new Ext.XTemplate(
                    '<table style="border-collapse:collapse;" >',
                    '<tr >',
                    '<td class="head">' + 'GRS No.' + '</td>',
                    '<td class="head">' + 'Amt' + '</td>',
                    '<td class="head">' + 'Supplier' + '</td>',
                    '<td class="head">' + 'D' + '</td>',
                    '<td class="head">' + 'R' + '</td>',
                    '<td class="head">' + 'Next' + '</td>',
                    '</tr>',
                    '<tpl for=".">',
                    '{[this.doVal(values, xindex)]}',
                    '</tpl>',
                    '</table>',
                    {
                        disableFormats: true,
                        doVal: function (values, xindex, name, email, phone) {
                            var c = xindex % 2 === 0 ? "even" : "odd";
                            if (xindex === 4) {
                                c = 'new';
                            }
                            var s = ''
                            s = s + '<tr class="req ' + c + '">';
                            s = s + '<td class="req" style="width:30px" >' + values.grsNo + '</td>';
                            s = s + '<td class="req amt"  style="cursor:pointer;width:30px" >' + values.grsAmt + '</td>';
                            s = s + '<td class="req"  style="xwidth:50px" >' + values.supplier + '</td>';
                            s = s + '<td class="req"  style="xwidth:50px" >' + values.days + '</td>';
                            s = s + '<td class="req"  style="xwidth:50px" >' + values.remaining + '</td>';
                            s = s + '<td class="req call"  style="padding: 10px 10px 10px 10px;cursor:pointer;background-color:blue;color:white;" pn="' + values.phone + '">' + values.next + '</td>';
                            s = s + '</tr>';
                            return s;
                        }
                    }
                )
            }


            //{
            //    xtype: 'grid',
            //    width: '100%',
            //    height: 150,
            //    store: Ext.create('Ext.data.Store', {
            //        fields: ['name', 'email', 'phone'],
            //        data: [
            //                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
            //                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
            //                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
            //                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" }
            //        ]
            //    }),
            //    columns: [
            //        { text: 'Name', dataIndex: 'name', width: 200 },
            //        { text: 'Email', dataIndex: 'email', width: 250 },
            //        { text: 'Phone', dataIndex: 'phone', width: 200 }
            //    ]
            //},



//            {

//                xtype: 'container',

//                layout:  'fit',
    
////: {
////                    type: 'vbox',
////                    pack: 'center',
////                    align: 'center'
////                },



//    //layout: (Ext.os.deviceType === 'Phone') ? 'fit' : {
//    //    type: 'vbox',
//    //    pack: 'center',
//    //    align: 'center'
//    //},

//                items: [


//		{
//		    xtype: 'cover',
//            flex: 1,
//			itemCls: 'my-cover-item',
//		    //These are just for demo purposes.
//            id: 'reqCover',
//			height:  300 ,
//			width:  '100%' ,

//			//height: (Ext.os.deviceType !== 'Phone')? 300: undefined,
//			//width: (Ext.os.deviceType !== 'Phone')? 800: undefined,
//			//end-demo
//		    itemTpl : [
//				'<div>',
//					'<div class="dev">{firstName} {lastName}</div>',
//					'<div class="company">{company}</div>',
//					'<div class="image"><tpl if="image"><img  src="{image}"></tpl></div>',
//				'</div>'
//			],
//			store : {
//			    fields: ['firstName', 'lastName', 'company', 'image'],
//			    data: [
//			        {firstName: 'Tommy',   lastName: 'Maintz', company: 'Sencha', image: 'resources/images/sencha.png'},
//			        { firstName: 'Rob', lastName: 'Dougan', company: 'Sencha', image: 'resources/images/sencha.png' },
//			        { firstName: 'Max', lastName: 'Fierro', company: 'Sencha', image: 'resources/images/sencha.png' },
//			        { firstName: 'Ed', lastName: 'Spencer', company: 'Sencha', image: 'resources/images/sencha.png' },
//			        { firstName: 'Jamie', lastName: 'Avins', company: 'Sencha', image: 'resources/images/sencha.png' },
//			        { firstName: 'Aaron', lastName: 'Conran', company: 'Sencha', image: 'resources/images/sencha.png' },
//			        { firstName: 'Dave', lastName: 'Kaneda', company: 'Sencha', image: 'resources/images/sencha.png' },
//	   		        { firstName: 'Michael', lastName: 'Mullany', company: 'Sencha', image: 'resources/images/sencha.png' },
//	   		        { firstName: 'Abraham', lastName: 'Elias', company: 'Sencha', image: 'resources/images/sencha.png' },
//				    { firstName: 'Jay', lastName: 'Robinson', company: 'Sencha', image: 'resources/images/sencha.png' }
//			    ]
//			},
//			selectedIndex: 2,
//			listeners:{
//				itemdoubletap: function(){
//					console.log('itemdbltap', arguments);
//				},
//				itemtap: function(cover, idx){
//					console.log('itemtap', arguments);
//				},
//				scope: this
//			}
//		}



//                ]
//            }
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
