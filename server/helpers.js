const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

exports.sql = function(file) {
    const p = path.resolve(__dirname, './db/tables/', file);
    const options = {
        minify: true,
        params: {
            schema: 'public'
        }
    };
    return new QueryFile(p, options);
};
