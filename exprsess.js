const express = require('express') ;
const path = require('path') ;
const multer = require("multer")


let storage = multer.diskStorage({
    destination : (req , file , cbf )=>{
        cbf( null,path.join(__dirname ,"/upload") )
    },
    filename : (req , file , cbf)=>{
        cbf(null , Date.now() + "-" + file.originalname)
    },
})

let upload = multer({storage}) ;




const app = express() ;
app.use(express.static('public'));

app.post("/upload",upload.single("myFile"), (req , res )=>{
    res.send("done")

})







// =================================================

app.get('/users', async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`http://localhost:3000/users`);

  if (response.status === 404) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const data = await response.json();
  res.json(await data);
});




// app.post('/users', async (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ error: 'Name is required' });
//   }

//   const response = await fetch('http://localhost:3000/users', {
//     method: 'POST',
//     body: JSON.stringify({ name }),
//   });

//   const data = await response.json();
//   res.status(201).json(data);
// });












app.listen(4000 , ()=> console.log( 'Server is running on http://localhost:4000'))