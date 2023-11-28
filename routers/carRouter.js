"use strict"

const router = require("express").Router()
const carController = require("../controllers/carController")
const {isAdmin} = require("../middlewares/permissions")


router.route("/cars")
    .get(
        //swagger
        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Returns a list of all Cars"
            #swagger.description = "Sends all Cars."
            */
        //Anybody can display the exist cars
        carController.getCars
    )
    .post(
        //swagger
        /*
                #swagger.tags = ["Cars"]
                #swagger.summary = "Create Car"
                #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Cars data.',
                    required: true,
                    schema: {
                        type: 'object',
                        properties: {
                            plateNumber: { type: 'string', example: 'plate1' },
                            brand: { type: 'string', example: 'Mercedes' },
                            model: { type: 'string', example: 'SUV' },
                            year: { type: 'Number', example: '2020' },
                            isAutomatic: { type: 'Boolean', example: 'false' },
                            pricePerDay: { type: 'Number', example: '150' },
                            isPublish: { type: 'Boolean', example: 'false' },
                            createdId: { type: 'Schema.ObjectId', ref:"Users" ,example:'655f82e622dc87daf8a7e250'},
                            updatedId: { type: 'Schema.ObjectId', ref:"Users" ,example:'655f82e622dc87daf8a7e250'},
                        }
                    }
                },
                #swagger.consumes = ['application/json'],
                #swagger.produces = ['application/json'],
            */
        //Only admin allowed to create, update and delete the cars
        isAdmin,
        carController.postCar
    )

router.route("/cars/:id")
    .get(
        //swagger
        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Returns single Car"
            */

        //Everybody can see a single car
        carController.getCar
    )
    .put(
        //swagger

        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Update Car"
        */

        //Only admin allowed to create, update and delete the cars
        isAdmin,
        carController.updateCar
    )
    .delete(
        //swagger

        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Delete Car"
        */
        //Only admin allowed to create, update and delete the cars
        isAdmin,
        carController.deleteCar
    )

module.exports = router