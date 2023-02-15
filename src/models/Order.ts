import mongoose from "mongoose"
import Counter from "./Counter"


interface IOrder {
    _id: string
}

const OrderSchema = new mongoose.Schema<IOrder>({
    _id: String
})

const Order = mongoose.model<IOrder>("Order", OrderSchema)

export default Order