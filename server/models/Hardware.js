var mongoose = require('mongoose');

var hardwareSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});
var Hardware = mongoose.model('Hardware', hardwareSchema);

function createDefaultHardwares() {
    Hardware.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Hardware.create({title: 'ThinkSystem SN850', featured: true, published: new Date('10/5/2017'), tags: ['ThinkSystem']});
            Hardware.create({title: 'SuperServer SYS-6018U-TR4T+', featured: true, published: new Date('10/12/2017'), tags: ['SuperServer']});
            Hardware.create({title: 'PRIMEQUEST 3800B', featured: false, published: new Date('10/1/2017'), tags: ['PRIMEQUEST']});
            Hardware.create({title: 'NX7700x/A4012L-1D', featured: false, published: new Date('7/12/2017'), tags: ['NX7700x']});
            Hardware.create({title: 'SuperServer SYS-6028U-TR4T+', featured: true, published: new Date('1/1/2017'), tags: ['SuperServer']});
            Hardware.create({title: 'Yingxin NF5240M4', featured: true, published: new Date('10/13/2017'), tags: ['Yingxin']});
            Hardware.create({title: 'ThinkSystem SN550', featured: true, published: new Date('3/1/2017'), tags: ['ThinkSystem']});
            Hardware.create({title: 'PRIMERGY RX2530 M4', featured: true, published: new Date('2/1/2017'), tags: ['PRIMERGY']});
            Hardware.create({title: 'ThinkSystem SR850', featured: true, published: new Date('10/7/2017'), tags: ['ThinkSystem']});
            Hardware.create({title: 'NX7700x/A4012L-2D', featured: false, published: new Date('8/1/2017'), tags: ['NX7700x']});
            Hardware.create({title: 'Yingxin NF5170M4', featured: false, published: new Date('11/1/2017'), tags: ['Yingxin']});
            Hardware.create({title: "IBM System z", featured: true, published: new Date('10/13/2017'), tags: ['IBM']});
            Hardware.create({title: 'Dell PowerEdge', featured: false, published: new Date('10/1/2017'), tags: ['Dell']});
            Hardware.create({title: 'Apple Network Server', featured: true, published: new Date('2/15/2017'), tags: ['Apple']});
            Hardware.create({title: 'Sun Microsystems Ultra II', featured: true, published: new Date('7/1/2017'), tags: ['Sun', 'Misc']});
        }
    })
}

exports.createDefaultHardwares = createDefaultHardwares;