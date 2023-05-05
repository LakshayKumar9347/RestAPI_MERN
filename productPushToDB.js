require('dotenv').config()
// const uri = "mongodb+srv:///*    *?retryWrites=true&w=majority"
//here add database name in between *    * to get desired name of DB↑
const connectDB = require('./db/connect')
const models_Schema = require('./models/index') 
// marzi hai Product rakho ya kuch or ↑
const productData = require('./products-Data.json')
// json dont need module.export ↑
const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        console.log("Connection to Database established Successfully")
        await models_Schema.create(productData)
        console.log("Successfully Added Data to Database")
    } catch (error) {
        console.log(error);
    }
}
start()


