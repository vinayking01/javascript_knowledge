// (A) Serving the STatic files like HTML CSS, JSON txt etc.
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
//Express provides the functionality of Serving these kind of files with the inbuilt middleware which is static()
//eg- exprees.static(root_directory,options) - : root_direcotry is the file / folder name you want to serve , otpional :- is the optional argument used for configuration
const express = require('express')
const app = express()
const port = 3000
const path = require('path');


// app.use(express.static('Public')) 
// Now, you can load the files that are in the public directory:  http://localhost:3000/Home.html , http://localhost:3000/style.css

//2nd way to provide path -  However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
const StaticPath  = path.join(__dirname,"../Public"); // this is the absolute path 
app.use(express.static(StaticPath)) 

// app.get('/', (req, res) => {
//   res.sendFile(StaticPath +"/Home.html");
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})