import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/routes.js'


const PORT = 5000;
const URL_DB = "mongodb+srv://hipster228:RR29oJzTQVlzbJdQ@cluster0.ujr7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();

app.use(express.json())

app.use('/api', router)

async function startApp () {
    try {
        await mongoose.connect(URL_DB)
        app.listen(PORT, () => console.log('It`s working'))
    } catch (e) {
        console.log(e)
    }
}

startApp();

