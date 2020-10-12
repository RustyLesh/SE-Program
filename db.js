var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// mongoose.connect("mongodb://localhost/test ");

var UpshortSchema = new Schema({
    'number': { type: String },
    'Author': { type: String },

    'Year': { type: String },
    'Reference': { type: String },
    'Stars': { type: String }
    // "pintro":{type:String},
    // "collected":{type:Number},
    // "visited":{type:Number},
    // "num":{type:Number},
    // "author":{type:String},
    // "created":{type:Number},
    // "label":{type:Array},
    // "level":{type:Number},
    // "hash":{type:String},
    // "exist":{type:Boolean},
});


var Upshortinfo = mongoose.model('Upshortinfo', UpshortSchema);
// var admin = new Upshortinfo({
//     Author: 'jack',
//     Year: '2000'
// });

// admin.save(function (err, ret) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("success");
//         console.log(ret);
//     };
// });
Upshortinfo.find(function (err, ret) {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
        console.log(ret);
    };
});
module.exports = Upshortinfo;