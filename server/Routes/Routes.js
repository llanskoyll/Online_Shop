import Router from 'express'
import ProductController from "../Controllers/ProductController.js";
import BasketController from "../Controllers/BasketController.js";

const router = new Router()

router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id',ProductController.getOne)
router.put('/product', ProductController.Update)
router.delete('/product/:id', ProductController.delete)

router.post('/basket', BasketController.create)
router.get('/basket', BasketController.getAll)
router.get('/basket/:id',BasketController.getOne)
router.put('/basket', BasketController.Update)
router.delete('/basket/:id', BasketController.delete)

export default router;