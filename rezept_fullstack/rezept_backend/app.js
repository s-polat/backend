const mongoose= require('mongoose');
const cors= require('cors')

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();


const uri = process.env.URI_DB
    
var indexRouter = require('./routes/index.js');
var RecipesRouter = require('./routes/recipes.router.js')
var UsersRouter = require('./routes/users.router.js')

var app = express();

mongoose.connect(uri, err => {
  if(err) console.log(err)
  console.log('Connected to DB');
  });



const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200
}




app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(indexRouter);
app.use(RecipesRouter);
app.use(UsersRouter);

module.exports = app