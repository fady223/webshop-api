import mongoose from "mongoose"
import Counter from "./Counter"
import { OrderDetails } from "../mongoose-types"

const OrderDetailsSchema = new mongoose.Schema<OrderDetails>({
    _id: { type: String, required: true },
    deleted_at: { type: Date, required: false }
}, { timestamps: true })

const OrderDetailsModel = mongoose.model<OrderDetails>("OrderDetails", OrderDetailsSchema)

export default OrderDetailsModel