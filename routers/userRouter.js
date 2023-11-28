"use strict"

const router = require("express").Router()
const userController = require("../controllers/userControllers")
const {isAdmin,isLogin} = require("../middlewares/permissions")

router.route("/users")
    .get(
        //swagger
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Returns a list of all users"
            #swagger.description = "Sends all users."
            */

        //To see all the users you need to be admin
        isAdmin,
        userController.getUsers
    )
    .post(
        //swagger
        /*
                #swagger.tags = ["Users"]
                #swagger.summary = "Create User"
                #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'User data.',
                    required: true,
                    schema: {
                        type: 'object',
                        properties: {
                            username: { type: 'string', example: 'nickname' },
                            password: { type: 'string', example: 'password' },
                            email: { type: 'string', example: 'test@gmail.com' },
                            firstname: { type: 'string', example: 'firstname' },
                            lastname: { type: 'string', example: 'lastname' },
                            isActive: { type: 'boolean', example: 'true' },
                            isAdmin: { type: 'boolean', example: 'false' },
                        }
                    }
                },
                #swagger.consumes = ['application/json'],
                #swagger.produces = ['application/json'],
            */
        //Everybody can create an account/register
        userController.postUser
    )

router.route("/users/:id")
    .get(
        //swagger
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Returns single user"
            */
        //to see a user you need to be admin
        isAdmin,
        userController.getUser
    )
    .put(
        //swagger

        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
        */

        //to update a user you need to be admin
        isAdmin,
        userController.updateUser
    )
    .delete(
        //swagger
         /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */
        //to delete an account you need to be admin
        isAdmin,
        userController.deleteUser
    )

module.exports = router