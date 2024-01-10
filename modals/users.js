"use strict"

const {passwordEncryption} = require("../helpers/PasswordEncryption");
const {Schema,model} = require("mongoose");

//Example input for user

// {
//     "username":"said",
//     "password":"12345",
//     "email":"email@emal.com",
//     "firstname":"said1",
//     "lastname":"oz1"
// }

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            trim:true,
            set:(password) => passwordEncryption(password)
        },
        email:{
            type:String,
            unique:true,
            trim:true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        firstname:{
            type:String,
            trim:true,
            required:true,
        },
        lastname:{
            type:String,
            trim:true,
            required:true,
        },
        isActive:{
            type:Boolean,
            default:true,
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
    },
    {
        timestamps:true
    }
)

module.exports=model("Users", userSchema)