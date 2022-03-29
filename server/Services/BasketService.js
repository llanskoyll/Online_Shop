import Basket from "../Models/Basket.js";
import Product from "../Models/Product.js";

class BasketService{
    async create(prod) { //что-то тут надо сделать с созданием корзины
        return await Basket.create({fullPrice: 0, products: []})
    }

    async getAll() {
        return Basket.find()
    }

    async getOne(id) {
        if (!id) {
            throw new Error('you forget ID!')
        }
        return Basket.findById(id);
    }

    async Update(products) {
        if(!products._id) { // проверка есть ли _ID нужной корзины
            throw new Error('You forgot to add any _ID!')
        }
        const oldBasket = await Basket.findById(products._id)
        return Basket.findByIdAndUpdate(products._id, {fullPrice:228, products: [...oldBasket.products, [products.name, products.url, products.price] ] }, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error('You forgot ID!')
        }
        return Basket.findByIdAndDelete(id)

    }
}

export default new BasketService()