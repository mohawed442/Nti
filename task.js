// // task one 
let figlet = require("figlet");
let fs = require("fs");
let fo ;
fs.writeFile("./hello.txt","hello world", (err)=>console.log(err)) ;
fs.readFile("./hello.txt","utf-8",(err , data)=>{
fo = data ;

figlet(fo, function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})
})


// task tow
const http = require("http") ;

let server = http.createServer((req , res ) =>{
    if (req.url === "/") {
        res.end('Welcome to the Homepage!')
    }else if(req.url === "/about"){
        res.end("This is the About Page.")
    }else if(req.url === "/contact"){
        res.end("Contact us at contact@example.com")
    }else{
        res.end("404 - Page Not Found")
    }
})



server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
}) ;