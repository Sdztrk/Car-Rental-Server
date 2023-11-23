"use strict"

const {Schema,model} = require("mongoose")

//Example input for user

// {
//     "plateNumber":"plate1",
//     "brand":"Hatchback",
//     "model":"VW",
//     "year":2020,
//     "isAutomatic":false,
//     "pricePerDay":60,
//     "isPublish":false,
//     "createdId":"655f82e622dc87daf8a7e250",
//     "updatedId":"655f82e622dc87daf8a7e250"
// }

const carsSchema = new Schema(
    {
        plateNumber:{
            type:String,
            required:true,
            trim:true,
        },
        brand:{
            type:String,
            required:true,
            trim:true,
        },
        model:{
            type:String,
            required:true,
            trim:true,
        },
        year:{
            type:Number,
            trim:true,
            required:true,
        },
        isAutomatic:{
            type:Boolean,
            required:true,
        },
        pricePerDay:{
            type:Number,
            required:true,
        },
        isPublish:{
            type:Boolean,
            required:true,
        },
        createdId:{
            type:Schema.ObjectId,
            ref:"Users"
        },
        updatedId:{
            type:Schema.ObjectId,
            ref:"Users"
        },
    },
    {
        timestamps:true
    }
)

module.exports=model("Cars", carsSchema)