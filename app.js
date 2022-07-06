const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router.js')


const app = express();

const dburl = 'mongodb://localhost/todo_app';

mongoose.connect(dburl,{ useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log("connected to local host database");
    app.listen(3000,(err)=>{
        if(err) console.log(err);
        else console.log("connecting to port 3000")
    });
});

// middelwares

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');


app.use(router);
