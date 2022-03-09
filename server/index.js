import express from 'express'
import mongoose from 'mongoose'
import Product from './Product.js'

const PORT = 5000;
const URL_DB = "mongodb+srv://hipster228:RR29oJzTQVlzbJdQ@cluster0.ujr7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();

app.use(express.json())

app.post('/api/product', async (req, res) => {
    try {
        const {id,name,price} = req.body
        const prod = await Product.create({id,name,price})
        res.status(200).json('Продукт был добавлен!')
    } catch (e) {
        res.status(500).json(e)
    }

})

async function startApp () {
    try {
        await mongoose.connect(URL_DB)
        app.listen(PORT, () => console.log('It`s working'))
    } catch (e) {
        console.log(e)
    }
}

startApp();

