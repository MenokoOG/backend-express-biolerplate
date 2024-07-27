// dependencies
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();
const connectToDb = require('./config/db')
require("dotenv").config();

// middleware
app.use(express.json());
app.use(morgan("dev"));


// calling the connection to database function 
connectToDb() 

// routes
app.use("/<name of route: endpoint>>", require("./<the route path>"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
}) 


// verify that the server is up and running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})