const mongoose = require('mongoose');


const Schema = mongoose.Schemal

const exerciseSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, requred:true}

}, {
    timestamps:true
});

const Exercise = mongoose.model('Ecercise', exerciseSchema);

module.exports = Exercise;