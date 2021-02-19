const express = require('express')
const app =express()
const port = 5000
const bodyParser = require('body-parser');

const {User} = require("./models/User");

const config = require('./config/key');

//aplication/x-ww-form-ur 뭐시기 파일을 분석해서 가져온다
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const mongoose =require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('mogondb sucess'))
.catch(err=>console.log(err))


app.get('/',(req,res) => res.send('hello world'))

app.post('/register',(req,res) => {

    // 회원 가입 할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body)

    user.save((err,userInfo) =>{
        if(err) return res.json({sucess:false,err})
        return res.status(200).json({
            sucess:true
        })
    })//mongodb에서 옴
})

app.listen(port,() => console.log(`Example app listening on port ${port}!`))