//append div child to the index html

var fs = require('fs');


//data is array of cards 
const render =  async(data) =>
{
    
    // console.log(data);
    // data.forEach(element => {
        fs.appendFile('index.html', data, function (err) {
            if (err) 
            {
                console.log(err);
            }
            // else{
                // console.log('done appending.');
            // }?
            // console.log('Saved!');
        });
}
    // });
    // return true;
    //add closing tags 
    //end body tags
// }
module.exports = render;