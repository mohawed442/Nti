// // console.log("hello");
// // function f() {
// //     let start = Date.now();
// //     while (Date.now() - start < 3000) {}
// //         console.log(Date.now());
// //         console.log(start);
// //         console.log(Date.now() - start);
// // }

// // f();




// // node js 
// // let chalk = require('chalk')
// // import chalk from "chalk";  
// // let he = "hello"
// // console.log(chalk.green("hello") );


// // const os = require('os')
// // console.log(os.platform);
// // console.log(os.homedir);





// // const fs = require("fs")


// // fs.readFile("./hello.txt","utf-8",(err , data)=>{
// //     if (err) {
// //         console.log(`error ${err}`);
// //     }
// //     console.log(data);
    
// // })


// // let myData = fs.readFileSync("./hello.txt","utf-8") ;
// // console.log(myData);


// // fs.writeFile("./hello2.txt","this me", (ele)=>console.log(ele))







// //  Basic HTTP Server
// const student = {
//     name: 'John Doe',
//     age: 21
//     };
// const http = require("http") ;
// let server = http.createServer((req , res)=>{
//     console.log("A user connected to the server");
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(student)); // Convert object to JSON and send
// });

// server.on("request",(req , res)=>{
//     if (req.url === "/about") {
//         res.end("hello ")
//     }

//     console.log(req.url);
//     console.log(req.headers);
    
//     res.statusCode = 200; // Status code: OK
//     res.write('Hello, world!');
//     res.end()
// });


// server.listen(3000,()=>{
//     console.log('Server is running on http://localhost:3000');
// }) ;




// Day 5: Express.js for Server Development
const express = require('express') ;
const app = express() ; 


// app.get("/", (req ,res)=>{
//     console.log("hello",req.method);  // Return to me the type method 
//     // res.status(202)
//     // res.send("hello world") ; //Print and stop the loop, meaning you also run the end function.
//     // res.write("hello world 1");  //This is used in printing more than one thing.
//     // res.write("hello world 2");  //This is used in printing more than one thing.
//     // res.write("hello world 3");  //This is used in printing more than one thing.
//     // res.write("hello world 4");  //This is used in printing more than one thing.
//     // res.end("hello world");     //Print and stop the loop

// });
// app.get("/", (req ,res)=>{
//     let user =  req.query ;
//     console.log(user);
// })
app.get("/:id", (req ,res)=>{
    let user =  req.params.id ;
    console.log(user);
    res.end(`hello ${user}`)
})
// app.use() 
app.post("/login", (req, res)=>{
        res.set("name", "mohamed")
        res.set("name", "mohamed")
        res.set("name", "mohamed")
})




















app.listen(3000,()=>{
    console.log('Server is running on port 3000');      //Create a port for the server to ring it through it
})