import mongoose from "mongoose";

const Product = new mongoose.Schema( {
    id: {type: Number, required: true },
    name: {type: String, required: true },
    description: {type: String },
    genre: {type: String },
    star: {type: Number },
    downloads: {type: String },
    price: {type: Number, required: true },
    url: {type: String },
})

export default mongoose.model('Product', Product)