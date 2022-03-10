import Product from '../Models/Product.js'

class PostController{
    async create(req,res) {
        try {
            const {id,name,price} = req.body
            const prod = await Product.create({id,name,price})
            res.status(200).json('Продукт был добавлен!')
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const products = await Product.find()
            return res.json(products)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.status(400).json('No ID in params!')
            }
            const product = await Product.findById(id)
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async Update(req, res) {
        try {
            const newProduct = req.body
            if(!newProduct._id) {
                return res.status(400).json('No ID in request body!')
            }
            const updatedProduct = await Product.findByIdAndUpdate(newProduct._id, newProduct, {new: true})
            return res.json(updatedProduct)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.status(400).json('No ID in params!')
            }
            const product = await Product.findByIdAndDelete(id)
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()