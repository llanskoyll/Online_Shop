import User from "../Models/User.js";

class UserService{
    async create(prod) {
        return await User.create({fullPrice: 0, products: []})
    }

    async getAll() {
        return User.find()
    }

    async getOne(id) {
        if (!id) {
            throw new Error('you forget ID!')
        }
        return User.findById(id);
    }

    async Update(products) {
        if(!products._id) { // проверка есть ли _ID нужной корзины
            throw new Error('You forgot to add any _ID!')
        }
        return User.findByIdAndUpdate(products._id, products, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error('You forgot ID!')
        }
        return User.findByIdAndDelete(id)

    }
}

export default new UserService()