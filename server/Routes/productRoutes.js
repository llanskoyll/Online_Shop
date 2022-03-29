import ProductController from "../Controllers/ProductController.js";
import router from "./Routes.js";

router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id',ProductController.getOne)
router.put('/product', ProductController.Update)
router.delete('/product/:id', ProductController.delete)
