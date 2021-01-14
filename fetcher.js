// node fetcher.js http://www.example.edu/ ./index.html 
const request = require('request'); //
let args = process.argv.slice(2); // calls the parameter
const fs = require('fs');  // to grab fs

const { isAbsolute } = require('path'); //  ??????

request(args[0], function (error, response, body) {
     fs.writeFile(args[1], body, (error) => {console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
     
    
    })   
     
    
    });

