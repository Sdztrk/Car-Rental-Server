"use strict"

// $ npm i jsonwebtoken
// app.use(isAuthenticated):

const jwt = require('jsonwebtoken')

exports.isAuthenticated = (req, res, next) => {

     const token = req.cookies
     //console.log("Tokennn:",token)

    const auth = req.headers?.authorization || null
    const accessToken = auth ? auth.split(' ')[1] : null

    req.isLogin = false
    req.user = null

    jwt.verify(accessToken, process.env.ACCESS_KEY, function (err, user) {
        if (!err) {
            req.isLogin = true
            req.user = user
        }
    })
    next()
}