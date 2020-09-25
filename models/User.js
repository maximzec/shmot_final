import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema ({
    _id: mongoose.Types.ObjectId,
    name: String,
    surname: String,
    email: String,
    phone_number: {
        type: String,
        minlength: 10,
        maxlength: 12        
    },
    register_date: Date.now
});

module.exports = mongoose.model('User', User);


