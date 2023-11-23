"use strict"

const {Schema,model} = require("mongoose")

//Example input for reservation

// {
//     "userId":"655f82e622dc87daf8a7e250",
//     "carId":"655f87c8dcc4072311ca2fec",
//     "startDate":"2023-11-23T17:11:36.276Z",
//     "endDate":"2023-11-23T17:11:36.276Z"
// }

const reservationSchema = new Schema(
    {
        userId:{
            type:Schema.ObjectId,
            ref:"Users"
        },
        carId:{
            type:Schema.ObjectId,
            ref:"Cars"
        },
        startDate:{
            type:Date,
            required:true,
        },
        endDate:{
            type:Date,
            required:true,
        },
    },
    {
        timestamps:true
    }
)

module.exports=model("Reservations", reservationSchema)