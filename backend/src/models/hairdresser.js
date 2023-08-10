import mongoose, { Schema } from 'mongoose';

const hairdresser = new Schema({
    name:{
        type: String,
        required: True
    },
    email:{
        type: String,
        required: True
    }, 
    number:{
        type: String,
        required: True
    },
    desc:{
        type: String,
        required: True
    },
})

export default hairdresser;