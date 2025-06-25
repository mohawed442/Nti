// // // task one 
// let figlet = require("figlet");
// let fs = require("fs");
// let fo ;
// fs.writeFile("./hello.txt","hello world", (err)=>console.log(err)) ;
// fs.readFile("./hello.txt","utf-8",(err , data)=>{
// fo = data ;

// figlet(fo, function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// })
// })


// // task tow
// const http = require("http") ;

// let server = http.createServer((req , res ) =>{
//     if (req.url === "/") {
//         res.end('Welcome to the Homepage!')
//     }else if(req.url === "/about"){
//         res.end("This is the About Page.")
//     }else if(req.url === "/contact"){
//         res.end("Contact us at contact@example.com")
//     }else{
//         res.end("404 - Page Not Found")
//     }
// })



// server.listen(3000,()=>{
//     console.log('Server is running on http://localhost:3000');
// }) ;



// Day 5: Express.js for Server Development


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to the User Info Server");
});

// ============================================

let users = [
  { id: 1, name: "Amina", age: 25 },
  { id: 2, name: "Khalid", age: 30 },
  { id: 3, name: "Layla", age: 22 }
];

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  res.json(user);
});

// ============================================

app.get('/search', (req, res) => {
  const name = req.query.name;

  if (!name) {
    res.json(users);
    return;
  }

  const results = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(results);
});

// ============================================

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const newId = users.length + 1;
  const newUser = { id: newId, name, age };

  users.push(newUser);
  res.status(201).json(newUser);
});

// ============================================
console.log("hello");


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});