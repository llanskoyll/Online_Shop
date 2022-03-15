import mongoose from "mongoose";

const Product = new mongoose.Schema( {
    id: {type: Number, required: true },
    name: {type: String, required: true },
    description: {type: String, required: true },
    genre: {type: String, required: true },
    star: {type: Number, required: true },
    downloads: {type: String, required: true },
    price: {type: Number, required: true },
    url: {type: String, required: true },
})

export default mongoose.model('Product', Product)