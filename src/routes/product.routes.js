const {Router} = require('express');

const router = Router();

const {jsonwt,verifySignUp} = require('../middlewares/index')

const { getProduct, getProductById, createProduct, updateProduct, deleteProduct, getProductByName } = require('../controllers/product.controller')

router.get('/product', getProduct)

router.get('/product/:idProduct', getProductById)

router.get('/product/:name', getProductByName)

router.post('/product', createProduct)

router.delete('/product/:idProduct', deleteProduct)

router.put('/product/:idProduct', updateProduct)

module.exports = router;