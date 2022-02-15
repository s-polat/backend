const mongoose= require('mongoose');
const cors= require('cors')
const reciperouter = require('./routes/recipepost.js');

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var recipesRoutes = require("./routes/recipes.routes.js");
var rezeptByCategory = require("./routes/category.js")
require("dotenv").config();


const uri = process.env.URI_DB
    
var indexRouter = require('./routes/index');

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

app.use('/', indexRouter);
app.use("/", recipesRoutes);
app.use("/",rezeptByCategory);
app.use(reciperouter);

module.exports = app