const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wislistController')
const cartController = require('../Controllers/cartController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const router = new express.Router()

//getallproduct
router.get('/all-products',productController.getAllProductController)
//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)
//view product
router.get('/view-product/:id',productController.getAProductController)
//add-to wishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistController)
//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)
//remove wishlist item
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeProductWishlistController)
//addtocart
router.post('/add-to-cart',jwtMiddleware,cartController.addToCartController)
//get-cart
router.get('/get-cart',jwtMiddleware,cartController.getCartController)
//remove-cart-item
router.delete('/remove-cart/:id',jwtMiddleware,cartController.removeCartItemController)
//increment cart 
router.get('/cart-increment/:id',jwtMiddleware,cartController.incrementItemController)
//decrement cart
router.get('/cart-decrement/:id',jwtMiddleware,cartController.decrementItemController)
//emptycart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCartController)

module.exports = router