const express = require('express')
const app =express()
const port = 5000

const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://rl0425:rlcks0425@cluster0.iv9mw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('mogondb sucess'))
.catch(err=>console.log(err))

var MongoClient = require('mongodb').MongoClient;



app.get('/',(req,res) => res.send('hello world'))

app.listen(port,() => console.log(`Example app listening on port ${port}!`))