const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
dotenv.config()

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL, (err)=>{
    if(err){
        console.log(err)
    }
    else
   { console.log("connected to database");}

})
//
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=>{

    res.send("Hello Root am here");
  })

// signup
const user = require('./models/models')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg83ujkdhfjk'

app.post('/registration', async(request, response)=>{
    const saltRounds = 10
    const saltPassword = await bcrypt.genSalt(saltRounds)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signupUser = new user({
        username:request.body.username,
        password:securePassword,

    })
    signupUser.save()
    .then(data =>{
        response.json(data)
        console.log("Data inserted succcessfully")
    }).catch(error =>{
        if(error.code === 11000){
           return response.sendStatus(409) 
        } 
       throw error;
    })
})

// login
app.post('/login', async(req, res) =>{
    const password = req.body.password

    const User = await user.findOne({
        username:req.body.username,
    })
    if(User && bcrypt.compare(password, User.password)){
        const token = jwt.sign({
            _id: User._id,
            username:User.username
        }, JWT_SECRET)
    return res.send({status: 'ok', data:''})
    }

   else if(!User){
        return res.sendStatus(401)
    }
   
   else{
       console.log(error)
   }
    
})

// step hiroku
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    
}


app.listen(process.env.PORT || 4000, ()=>console.log("Server is up and running on port 4000"))