var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/inventorymhw',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://phillipdly:inventoryhw@ds147267.mlab.com:47267/inventorymhw',
        port: process.env.PORT || 80
    }
}