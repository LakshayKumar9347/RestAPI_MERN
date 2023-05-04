
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const products_Router = require('./routes')
const connectDb = require('./db/connect')

// Using Middleware or we can say that we have implemented routes
app.use(products_Router)
// app.use("/api/products",products_Router)

const start = async ()=>{
    try {
        await connectDb(process.env.MONGODB_URI)
        console.log("You have connected to the database");
        app.listen(PORT,()=>{
            console.log("Your develop server in running properly at ",PORT);
        })
    } catch (error) {
        console.log(error)
    }
}
start()
