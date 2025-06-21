// console.log("hello");
// function f() {
//     let start = Date.now();
//     while (Date.now() - start < 3000) {}
//         console.log(Date.now());
//         console.log(start);
//         console.log(Date.now() - start);
// }

// f();




// node js 
// let chalk = require('chalk')
// import chalk from "chalk";  
// let he = "hello"
// console.log(chalk.green("hello") );


// const os = require('os')
// console.log(os.platform);
// console.log(os.homedir);





// const fs = require("fs")


// fs.readFile("./hello.txt","utf-8",(err , data)=>{
//     if (err) {
//         console.log(`error ${err}`);
//     }
//     console.log(data);
    
// })


// let myData = fs.readFileSync("./hello.txt","utf-8") ;
// console.log(myData);


// fs.writeFile("./hello2.txt","this me", (ele)=>console.log(ele))







//  Basic HTTP Server
const student = {
    name: 'John Doe',
    age: 21
    };
const http = require("http") ;
let server = http.createServer((req , res)=>{
    console.log("A user connected to the server");
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(student)); // Convert object to JSON and send
});

server.on("request",(req , res)=>{
    if (req.url === "/about") {
        res.end("hello ")
    }

    console.log(req.url);
    console.log(req.headers);
    
    res.statusCode = 200; // Status code: OK
    res.write('Hello, world!');
    res.end()
});


server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
}) ;


