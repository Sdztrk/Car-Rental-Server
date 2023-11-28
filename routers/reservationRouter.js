"use strict"

const router = require("express").Router()
const reservationController = require("../controllers/reservationController")
const {isAdmin,isLogin} = require("../middlewares/permissions")


router.route("/reservations")
    .get(
        //swagger
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Returns a list of all Reservations"
            #swagger.description = "Sends all Reservations."
            */

        //to see all reservations you need to be admin
        isAdmin,
        reservationController.getReservations
    )
    .post(
        //swagger
        /*
                #swagger.tags = ["Reservations"]
                #swagger.summary = "Create Reservation"
                #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Reservations data.',
                    required: true,
                    schema: {
                        type: 'object',
                        properties: {
                            userId: { type: 'Schema.ObjectId', ref:"Users" ,example: '655f82e622dc87daf8a7e250' },
                            carId: { type: 'Schema.ObjectId', ref:"Cars" ,example: '655f87c8dcc4072311ca2fec' },
                            startDate: { type: 'Date', example: '2023-11-23T17:11:36.276Z' },
                            endDate: { type: 'Date', example: '2023-11-23T17:11:36.276Z' },
                        }
                    }
                },
                #swagger.consumes = ['application/json'],
                #swagger.produces = ['application/json'],
            */

        //anybody can make reservations
        reservationController.postReservation
    )

router.route("/reservations/:id")
    .get(
        //swagger
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Returns single Reservation"
            */
        //to see your reservation you need to be logged in
        isLogin,
        reservationController.getReservation
    )
    .put(
        //swagger
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
        */
        //to update your reservation you need to be logged in
        isLogin,
        reservationController.updateCReservation
    )
    .delete(
        //swagger
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */
        //to cancel your reservation you need to be logged in
        isLogin,
        reservationController.deleteReservation
    )

module.exports = router