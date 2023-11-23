"use strict"

const mongoose = require("mongoose")

const URI = process.env.URI

exports.DBconnect = () => {
    mongoose.connect(URI)
    console.log(`DB is connected`.blue.underline)
}