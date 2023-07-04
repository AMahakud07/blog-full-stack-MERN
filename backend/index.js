const express = require('express');
const cors=require('cors')
const User = require('./models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const app = express();
const jwt = require('jsonwebtoken')

const salt = bcrypt.genSaltSync(10);
const secret = 'sfdsdfrgsd34f';

app.use(cors());

app.use(express.json()) // to read data from req body

mongoose.connect('mongodb+srv://blog:rxqA6IZSCK2bqmT7@cluster0.1hlyzic.mongodb.net/?retryWrites=true&w=majority');


app.post('/register',async(req,res)=>{
    const {username,password} = req.body;
    try{
        const userDoc =await User.create({
            username,
            password: bcrypt.hashSync(password,salt),
        })
        res.json(userDoc);
    } catch (e){
        res.status(400).json(e);
    }
});

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const userDoc = await User.findOne({username})
    res.json(userDoc);
    const passOk =bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk);
    if(passOk){
        //logged in
        jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
            if(err) throw err;
            res.json(token);
        })
        // res.json()
    }else{
        //not logged in
        res.status(400).json('wrong credentials');
    }
})

app.listen(4000);

// rxqA6IZSCK2bqmT7

// mongodb+srv://blog:rxqA6IZSCK2bqmT7@cluster0.1hlyzic.mongodb.net/?retryWrites=true&w=majority