const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');


//Use .env file in config directory
require('dotenv').config({ path: './config/.env' });

//Connect to database
connectDB();

//Use EJS for views
app.set('view engine', 'ejs');

//Static folder
app.use(express.static('public'));

//Body parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Logging
app.use(logger('dev'));

//Use flash messages for errors, info, etc...
app.use(flash())

//Initiate Server
app.listen(process.env.PORT, () => {
    console.log(`Server activated on PORT${process.env.PORT}`);
});