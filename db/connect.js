const mongoose = require('mongoose')

const conectDb = (uri)=>{
    return mongoose.connect(uri)
}


module.exports = conectDb