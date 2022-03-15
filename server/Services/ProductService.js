import Product from "../Models/Product.js";

class ProductService{
    async create(prod) {
        return await Product.create(prod)
    }

    async getAll() {
            return Product.find()
    }

    async getOne(id) {
        if (!id) {
            throw new Error('you forget ID!')
        }
        return Product.findById(id);
    }

    async Update(product) {
            if(!product._id) {
                throw new Error('You forgot to add any _ID!')
            }
            return Product.findByIdAndUpdate(product._id, product, {new: true})
    }

    async delete(id) {
            if (!id) {
                throw new Error('You forgot ID!')
            }
            return Product.findByIdAndDelete(id)

    }
}

export default new ProductService()