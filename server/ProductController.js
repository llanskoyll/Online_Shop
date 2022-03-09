import Product from './Product.js'

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
}

export default new PostController()