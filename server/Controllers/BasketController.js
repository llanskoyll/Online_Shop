import BasketService from "../Services/BasketService.js";

class BasketController{
    async create(req,res) {
        try {
            const basket = await BasketService.create(req.body)
            res.status(201).json(basket)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const basket = await BasketService.getAll()
            return res.json(basket)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const basket = await BasketService.getOne(id)
            return res.json(basket)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async Update(req, res) {
        try {
            const newBasket = req.body
            const updatedBasket = await BasketService.Update(newBasket)
            return res.json(updatedBasket)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const basket = await BasketService.delete(id)
            return res.json(basket)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new BasketController()