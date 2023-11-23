"use strict"

const router = require('express').Router()
const authControllers = require('../controllers/authControllers')

router.post('/login',
    /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Login'
            #swagger.description = 'Login with email and password'
            _swagger.deprecated = true
            _swagger.ignore = true
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    email: 'test@email.com',
                    password: '12345'
                }
            }
        */

    authControllers.login
)
router.post('/refresh',
 /*
        #swagger.tags = ['Authentication']
        #swagger.summary = 'Token Refresh'
        #swagger.description = 'Refresh accessToken with refreshToken'
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                token: {
                    refresh: '...refreshToken...'
                }
            }
        }
    */ 
authControllers.refresh
)
router.get('/logout',
/*
        #swagger.tags = ['Authentication']
        #swagger.summary = 'Logout'
        #swagger.description = 'No need any doing for logout. You must deleted Bearer Token from your browser.'
    */
authControllers.logout
)

module.exports = router