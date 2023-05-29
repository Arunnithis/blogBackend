const { Timestamp } = require('mongodb');
const mongoose =require('mongoose');

const PostSchema =new mongoose.Schema({
    title :{
        type : String,
        unique : true,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : false
    },
    username :{
        type : String,
        required : true
    },
    categories :{
        type : Array,
        required : true
    }
});
module.exports = mongoose.model("Post" , PostSchema);