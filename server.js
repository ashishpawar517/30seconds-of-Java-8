//http currently further will use express
const http = require('http');
//file system module
const fs = require('fs');
//for dir path
const path = require('path');
//for directory access
const dirpath= path.join(__dirname,'snippets');
// get card
const get_card = require('./app.js')
//reading all the snippets 
fs.readdir(dirpath,(err,files)=>{
    if(err)
    {
        return console.log('unable to scan the directory'+err);

    }
    files.forEach(file => {

        // if(file === "template")
        // console.log(file);
        fs.readFile(dirpath+"/"+file,'utf-8',(err,content)=>
        {
            if(err)
            {
                console.log('unable to read the file ');
                return;
            }
            // console.log(JSON.stringify(content));
            let obj = JSON.parse(content);

            if(obj.title == "title for the operation")
            {
                //skip the template
            }
            else {
                // console.log(obj.title);
                let html_card = get_card(obj.title, obj.description, obj.usage);
                console.log(html_card);
      
            }
        });

    });
});
