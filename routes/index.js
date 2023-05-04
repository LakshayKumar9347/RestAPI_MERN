const express = require('express')
const { getAllProducts, getAllProductsTesting } = require('../controllers')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log("i am live")
    res.send("Hello welcomme to this mern rest api")
    next()
})
router.route('/api/products').get(getAllProducts)
router.route('/api/products/testing').get(getAllProductsTesting)

module.exports = router
