const http = require('http');

const fs = require('fs');

const path = require('path');

const dirpath= path.join(__dirname,'snippets');

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
                console.log(obj.title);

            }
        
        
        });

    });
});
