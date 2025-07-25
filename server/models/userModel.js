import mongoose from '../config/db.js'
import cuid from 'cuid';
import validator from 'validator';
import uniqueValidator from 'mongoose-unique-validator';



const userSchema = new mongoose.Schema({
    _id: {type: String, default: cuid},
    firstName:{
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 25,
        required: true,
        lowercase: true,
        validate:{
            validator: str => /^[a-zA-Z]+$/.test(str),
            message: "Name can only be letters"
        }
    },

    lastName:{
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 25,
        required: true,
        lowercase: true,
        validate:{
            validator: str => /^[a-zA-Z]+$/.test(str),
            message: "Name can only be letters"
        }
    },
    email:{
        type: String,
        required: true,
        trim: true,
        validate:{
            validator: validator.isEmail,
            message:"Enter a valid email example@example.com"
        }
    },
    message:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 5000,
    }
}, {timestamps : true})

userSchema.plugin(uniqueValidator, '{PATH} already exists');

export const User = mongoose.model("User", userSchema);


