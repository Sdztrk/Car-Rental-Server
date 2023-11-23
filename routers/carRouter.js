"use strict"

const router = require("express").Router()
const carController = require("../controllers/carController")
const {isAdmin} = require("../middlewares/permissions")


router.route("/cars")
    .get(
        //swagger
        //Anybody can display the exist cars
        carController.getCars
    )
    .post(
        //swagger

        //Only admin allowed to create, update and delete the cars
        isAdmin,
        carController.postCar
    )

router.route("/cars/:id")
    .get(
        //swagger
        carController.getCar
    )
    .put(
        //swagger

        //Only admin allowed to create, update and delete the cars
        isAdmin,
        carController.updateCar
    )
    .delete(
        //swagger

        //Only admin allowed to create, update and delete the cars
        isAdmin,
        carController.deleteCar
    )

module.exports = router