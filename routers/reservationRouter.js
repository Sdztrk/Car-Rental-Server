"use strict"

const router = require("express").Router()
const reservationController = require("../controllers/reservationController")
const {isAdmin,isLogin} = require("../middlewares/permissions")


router.route("/reservations")
    .get(
        //swagger

        //to see all reservations you need to be admin
        isAdmin,
        reservationController.getReservations
    )
    .post(
        //swagger

        //anybody can create an account
        reservationController.postReservation
    )

router.route("/reservations/:id")
    .get(
        //swagger
        //to see your reservation you need to be logged in
        isLogin,
        reservationController.getReservation
    )
    .put(
        //swagger
        //to update your reservation you need to be logged in
        isLogin,
        reservationController.updateCReservation
    )
    .delete(
        //swagger
        //to cancel your reservation you need to be logged in
        isLogin,
        reservationController.deleteReservation
    )

module.exports = router