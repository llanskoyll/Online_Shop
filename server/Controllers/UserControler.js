import UserService from "../Services/UserService.js";

class UserController{
    async create(req,res) {
        try {
            const user = await UserService.create(req.body)
            res.status(201).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            return res.json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const product = await UserService.getOne(id)
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async Update(req, res) {
        try {
            const newUser = req.body
            const updatedUser = await UserService.Update(newUser)
            return res.json(updatedUser)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.delete(id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()