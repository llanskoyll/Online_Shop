import Router from 'express'
import ProductController from "./ProductController.js";

const router = new Router()

router.post('/product', ProductController.create)


export default router;