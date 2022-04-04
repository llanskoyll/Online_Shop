import Router from 'express'
import ProductController from "../Controllers/ProductController.js";
import BasketController from "../Controllers/BasketController.js";
import UserController from "../Controllers/UserControler.js";

const router = new Router()

//routes for games
router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id',ProductController.getOne)
router.put('/product', ProductController.Update)
router.delete('/product/:id', ProductController.delete)

//routes for baskets
router.post('/basket', BasketController.create)
router.get('/basket', BasketController.getAll)
router.get('/basket/:id',BasketController.getOne)
router.put('/basket', BasketController.Update)
router.delete('/basket/:id', BasketController.delete)

//routes for users
router.post('/user', UserController.create)
router.get('/user', UserController.getAll)
router.get('/user/:id',UserController.getOne)
router.put('/user', UserController.Update)
router.delete('/user/:id', UserController.delete)

export default router;