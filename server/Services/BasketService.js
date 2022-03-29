import Basket from "../Models/Basket.js";

class BasketService{
    async create(prod) {
        return await Basket.create(prod)
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