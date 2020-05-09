//truncate the index.html file 
const fs = require('fs');
const truncate = async () => fs.truncate('index.html', 0, function () { 
    // console.log('done trucanting ') 

});

module.exports = truncate;