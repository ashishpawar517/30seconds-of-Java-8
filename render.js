//append div child to the index html

var fs = require('fs');


//data is array of cards 
function render(data){
    
    data.forEach(element => {
        fs.appendFile('index.html', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    
    });
    
    //add closing tags 


    //end body tags 

}

module.exports = render;