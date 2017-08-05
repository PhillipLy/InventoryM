var Hardware = require('mongoose').model('Hardware');

exports.getHardwares = function(req, res) {
    Hardware.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};