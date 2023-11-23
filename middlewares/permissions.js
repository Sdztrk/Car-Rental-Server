"use strict"

// Middleware: permissions

exports.isLogin = (req, res, next) => {

    if (req.isLogin) {
        next()
    } else {
        res.errorStatusCode = 403
        throw new Error('NoPermission: You have to login.')
    }
}

exports.isAdmin = (req, res, next) => {

    if (req.isLogin && req.user.isAdmin) {
        next()
    } else {
        res.errorStatusCode = 403
        throw new Error('NoPermission: You have to login and be Admin.')
    }
}