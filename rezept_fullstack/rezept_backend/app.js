require('dotenv/config')
const mongoose= require('mongoose');
const cors= require('cors')
const reciperouter = require('./routes/recipepost.js');

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var recipesRoutes = require("./routes/recipes.routes.js")
require("dotenv").config();

const uri = `mongodb+srv://a-langner:${process.env["DB_PASSWORD"]}@cluster0.odcx3.mongodb.net/recipes-fake?retryWrites=true&w=majority`;

    
var indexRouter = require('./routes/index');

var app = express();

mongoose.connect(uri, err => {
  console.log('Connected to DB');
  });



const corsOptions = {
    origin: 'https://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}




app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use("/", recipesRoutes);
app.use(reciperouter);

module.exports = app