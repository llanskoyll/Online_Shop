import Product from '../Models/Product.js'
import ProductService from "../ProductService.js";

class PostController{
    async create(req,res) {
        try {
            const prod = await ProductService.create(req.body)
            res.status(201).json(prod)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const products = await ProductService.getAll()
            return res.json(products)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const product = await ProductService.getOne(id)
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async Update(req, res) {
        try {
            const newProduct = req.body
            const updatedProduct = await ProductService.Update(newProduct)
            return res.json(updatedProduct)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const product = await ProductService.delete(id)
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()