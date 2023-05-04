const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:[true,"Price must be provided"]
    },
    featured:{
        type:Boolean,
        require:false
    },
    rating:{
        type:Number,
        require:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{values} is not supported`
        }
    },
})


module.exports = mongoose.model('product',productSchema)