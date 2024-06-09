const express = require('express');
const path = require('path')
const app = express();
const db = require('./db');
const UserAction = require('./Model/todo');

app.use(express.urlencoded({ extended: true }));  // works with the form data 
app.use(express.json());  // works with the JSON data of links 



app.set('view engine','ejs')
app.set('views' , path.resolve("./views")) 

app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();

const port   = process.env.PORT;

app.use(function(req,res,next){
    const dataReceived = UserAction;
    // console.log(dataReceived);
    next();
})

app.get('/',(req,res)=>{
    res.end("Hello");
})
  

  app.get('/todo',async (req, res)=>{
    try {
        const data = await UserAction.find().sort({ time: -1 }); // when accessing data it requires always use of find function without this no way to access 
        res.render('Home', { data: data });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Internal Server Error');
    }  
  })


app.post('/Added_action',async (req,res)=>{
    console.log(req.body);
    try
    {
        if(req.body == undefined )
        {
         console.log('data not added');
         res.status(500).json({response: response});
        }
        else
        {
            const data = req.body ;
 
            // Create a new User document using the Mongoose model
            const actiondata = new UserAction(data);

            const response = await actiondata.save();
            console.log('data saved',req.body);
            res.redirect('/todo');
        }
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// Handle Delete Request
app.delete('/delete_tasks', async (req, res) => {
    const { taskIds } = req.body;
    console.log(taskIds);
    let All_deleted = true; // Assume all tasks will be deleted unless an error occurs

    try {
        for (const id of taskIds) {
            const deletedTask = await UserAction.findByIdAndDelete(id);
            // console.log('Deleted Task:', deletedTask);
            if (!deletedTask) {
                All_deleted = false; // Set to false if any task deletion fails
            }
        }

        if (All_deleted) {
            res.status(200).send('All tasks deleted successfully');
        } else {
            res.status(404).send('Some tasks not found or could not be deleted');
        }
    } catch (error) {
        console.error('Error deleting tasks:', error);
        res.status(500).send('Internal server error');
    }
});



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

