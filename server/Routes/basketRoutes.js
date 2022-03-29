import BasketController from "../Controllers/BasketController.js";
import router from "./Routes.js";

router.post('/basket', BasketController.create)
router.get('/basket', BasketController.getAll)
router.get('/basket/:id',BasketController.getOne)
router.put('/basket', BasketController.Update)
router.delete('/basket/:id', BasketController.delete)