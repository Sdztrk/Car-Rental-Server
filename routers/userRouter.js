"use strict"

const router = require("express").Router()
const userController = require("../controllers/userControllers")
const {isAdmin,isLogin} = require("../middlewares/permissions")

router.route("/users")
    .get(
        //swagger

        //To see all the users you need to be admin
        isAdmin,
        userController.getUsers
    )
    .post(
        //swagger
        //Everybody can create an account
        userController.postUser
    )

router.route("/users/:id")
    .get(
        //swagger
        //to see a user you need to be admin
        isAdmin,
        userController.getUser
    )
    .put(
        //swagger
        //to update a user you need to be admin
        isAdmin,
        userController.updateUser
    )
    .delete(
        //swagger
        //to delete your account you need to be logged in
        isLogin,
        userController.deleteUser
    )

module.exports = router