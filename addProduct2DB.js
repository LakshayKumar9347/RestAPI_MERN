require('dotenv').config()
const productSchema = require('./models/index')
const connectDB = require('./db/connect')
const products = require('./products.json')

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        console.log("Connection to Database established Successfully")
        await productSchema.create(products)
        console.log("Successfully Added Data to Database")
    } catch (error) {
        console.log(error);
    }
}
start()

