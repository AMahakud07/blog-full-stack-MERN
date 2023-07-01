const express = require('express');
const cors=require('cors')
const User = require('./models/User')
const mongoose = require('mongoose')

const app = express();

app.use(cors());

app.use(express.json()) // to read data from req body

mongoose.connect('mongodb+srv://blog:rxqA6IZSCK2bqmT7@cluster0.1hlyzic.mongodb.net/?retryWrites=true&w=majority');


app.post('/register',async(req,res)=>{
    const {username,password} = req.body;
    const userDoc =await User.create({username,password})
    res.json(userDoc);
});

app.listen(4000);

// rxqA6IZSCK2bqmT7

// mongodb+srv://blog:rxqA6IZSCK2bqmT7@cluster0.1hlyzic.mongodb.net/?retryWrites=true&w=majority