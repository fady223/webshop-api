import mongoose from "mongoose";


const ProductCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    deleted_at: { type: Date, required: false }
}, { timestamps: true })

const ProductCategoryModel = mongoose.model('ProductCategory', ProductCategorySchema);

export default ProductCategoryModel