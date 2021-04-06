const mongoose = require('mongoose');

const userSchema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:3
    },
}, {
    timestamps:true,
    
});

const User = mongoos.model('User', userSchema);

module.exports = User;