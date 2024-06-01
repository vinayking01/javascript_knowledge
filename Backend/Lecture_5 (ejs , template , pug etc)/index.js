// Tempalte Engine - ejs, pub , mosutache
// template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
//  It helps you to perform dynamic routing

const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine','ejs')
app.set('views' , path.resolve("./views"))  // folder where you put the ejs templates(html files and other files for rendering)

app.get('/home',(req, res)=>{
    res.render('Home',{name_of_person: 'Vinay Singh'}); // first parameter is file name present in view folder and second name is variable we are passing so that we can update and make it dynamic
    
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})