import Basket from "../Models/Basket.js";
import Product from "../Models/Product.js";

class BasketService{
    async create(prod) { //что-то тут надо сделать с созданием корзины
        const randomGame = await Product.findOne({name: "GTA6"})
        return await Basket.create({fullPrice: 100, products: [randomGame.name, randomGame.url, randomGame.price]})
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

    async Update(product) {
        if(!product._id) {
            throw new Error('You forgot to add any _ID!')
        }
        return Basket.findByIdAndUpdate(product._id, product, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error('You forgot ID!')
        }
        return Basket.findByIdAndDelete(id)

    }
}

export default new BasketService()