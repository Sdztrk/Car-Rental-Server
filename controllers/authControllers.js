"use strict"

const jwt = require('jsonwebtoken')
const setToken = require('../helpers/setToken')
const User = require("../modals/users")


//POST /login
exports.login = async (req, res) => {

    const { email, password } = req.body
    if (email && password) {
        const user = await User.findOne({ email, password })

        if (user) {
            if (user.isActive) {
                res.send({
                    error: false,
                    token: setToken(user)
                })
            } else {
                res.errorStatusCode = 401
                throw new Error('This account is not active.')
            }
        } else {
            console.log('no user')

            res.errorStatusCode = 401
            throw new Error('Wrong email or password.')
        }
    } else {

        res.errorStatusCode = 401
        throw new Error('Please enter email and password.')
    }
}

//POST /refresh
exports.refresh = async (req, res) => {

    const refreshToken = req.body?.token?.refresh
    console.log(refreshToken)

    if (refreshToken) {

        jwt.verify(refreshToken, process.env.REFRESH_KEY, async function (err, userData) {

            if (err) {

                res.errorStatusCode = 401
                throw err
            } else {

                const { _id, password } = userData

                if (_id && password) {

                    const user = await User.findOne({ _id })

                    if (user && user.password == password) {

                        if (user.isActive) {
                            res.send({
                                error: false,
                                token: setToken(user, true)
                            })
                        } else {
                            res.errorStatusCode = 401
                            throw new Error('This account is not active.')
                        }
                    } else {
                        res.errorStatusCode = 401
                        throw new Error('Wrong id or password.')
                    }
                } else {
                    res.errorStatusCode = 401
                    throw new Error('Please enter id and password.')
                }
            }
        })

    } else {
        res.errorStatusCode = 401
        throw new Error('Please enter token.refresh')
    }
}

//GET /logout
exports.logout = async (req, res) => {

    res.send({
        error: false,
        message: 'Bearer Token deleted from browser'
    })
}
