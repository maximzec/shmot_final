import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema ({
    name : String,
    surname : String,
    email : String,
    phone_number : {
        type : String,
        minlength : 10,
        maxlength : 12        
    },
    register_date : Date.now,
    avatar : {
        type : Buffer , 
        contentType : String
    },
});


const Brand = new Schema({
    name : String ,
    logo : {
        type : Buffer , 
        contentType : String 
    },
    description : String,
    users_subscribed : [{type : Schema.Types.ObjectId , ref : 'User'}],

});

const Item = new Schema({
    name : String , 
    price : Number ,
    brand : {
        type : Schema.Types.ObjectId,
        ref : 'Brand'
    },
    image : {
        type : Buffer , 
        contentType : String
    },
    sizes : [Number],
    colors : [String]
});

