import mongoose from "mongoose";

const Basket = new mongoose.Schema({
    fullPrice: {type: String, default: 0},
    products: [[{type: String, ref: "Product"}]]
})

export default mongoose.model("Basket",Basket)