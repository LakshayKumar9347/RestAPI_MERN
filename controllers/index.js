const model_Schema = require('../models/index')


const getAllProducts = async (req, res) => {
    const mydata = await model_Schema.find()
    res.status(200).json(mydata )

}


const getAllProductsTesting = async (req, res) => {
    res.status(200).json({
        "msg": "I am getAllProductsTesting"
    })
}
module.exports = { getAllProducts, getAllProductsTesting }