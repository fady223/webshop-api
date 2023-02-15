import mongoose from "mongoose"
import Counter from "./Counter"
import { Order } from "../mongoose-types"

const OrderSchema = new mongoose.Schema<Order>({
    _id: String
})

const OrderModel = mongoose.model<Order>("Order", OrderSchema)

export default OrderModel