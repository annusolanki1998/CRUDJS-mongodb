const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/CrudDBex'

const app = express();

mongoose.connect(url,{useNewUrlParser: true});

const con  = mongoose.connection

con.on('open',() => {
    console.log('connected...');
})

app.use(express.json());

const detailRouter = require('./routes/details');

app.use('/details',detailRouter)

app.listen(9000,() => {
    console.log('Server is running on port 9000');
})