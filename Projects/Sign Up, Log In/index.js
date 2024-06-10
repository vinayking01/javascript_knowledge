const express = require('express');
const cookieParser =  require('cookie-parser');
const app = express();
const userRoutes = require('./routes/users');
const path = require('path');
const db = require('./db');

app.set('view engine', 'ejs');
// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

const PORT = 3000;

app.use('/user', userRoutes);

app.get('/',(req,res)=>{
    res.send("Hi");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
