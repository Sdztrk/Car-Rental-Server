"use strict"
//imports to use express
const express = require("express")
const app = express()
require("colors")
//import for errors
require("express-async-errors")
//importing and configuration of dotenv
require("dotenv").config()
//Database connection
const {DBconnect} = require("./config/DBconnect")
//Routers
const userRouter= require("./routers/userRouter")
const carRouter= require("./routers/carRouter")
const reservationRouter= require("./routers/reservationRouter")
const authRouter = require("./routers/authRouter")
//Middleware imports
const {errorHandler} = require("./middlewares/errorHandler")
const {isAuthenticated} = require("./middlewares/authentication")

//connection to db
DBconnect()

//conveting to json
app.use(express.json())

//Middlewares
app.use(errorHandler)
app.use(isAuthenticated)


//routers
app.use("/api",userRouter)
app.use("/api",carRouter)
app.use("/api",reservationRouter)
app.use("/api",authRouter)


//PORT Config
const PORT = process.env.PORT || 5003

app.listen(PORT, ()=> {
    console.log(`App is running on ${PORT}`.yellow.underline)
})