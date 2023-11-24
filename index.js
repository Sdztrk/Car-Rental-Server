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

//swagger
const redoc = require('redoc-express')
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./swagger.json')

//route for swagger:
app.use('/docs/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJson))

//route for redoc:
app.use('/docs/redoc', redoc({
    specUrl: '/docs/json',
    title: 'API Docs',
}))

// route for swagger.json:
app.use('/docs/json', (req, res) => {
    res.sendFile('swagger.json', { root: '.' })
})


app.get('/', (req, res) => {
    /*
        #swagger.tags= ['Root']
        #swagger.summary= 'Root Path'
        #swagger.description= 'This is the root path of our API.  It will provide links to 
        the documentation (visible with swagger-ui-express and redoc-express) and contact information.'
    */

    res.send({
        error: false,
        message: 'Welcome to Car Rental API',
        api: {
            documents: {
                swagger: 'http://localhost:5002/docs/swagger',
                redoc: 'http://localhost:5002/docs/redoc',
                json: 'http://localhost:5002/docs/json',
            },
            contact: 'said@gmail.com'
        },
    })
})

//PORT Config
const PORT = process.env.PORT || 5003
app.listen(PORT, ()=> {
    console.log(`App is running on ${PORT}`.yellow.underline)
})