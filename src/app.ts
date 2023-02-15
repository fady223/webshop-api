import express, { Request, Response } from "express"
import * as dotenv from 'dotenv'
import cors from "cors"
import { connectToMongo } from "./mongo"
import Order from "./models/Order"
import Counter, { CounterEnum, getNextNumber } from "./models/Counter"
import { orderRouter } from "./controllers/order"

dotenv.config()

const PORT = process.env.PORT

const app = express();
app.use(cors())
app.use("/order", orderRouter)

app.post("/create_order", async (req: Request, res: Response) => {
    const params = req.params
    const nextOrderNr = await getNextNumber(CounterEnum.Order)
    const orderNr = CounterEnum.Order + nextOrderNr

    if (nextOrderNr !== 0) {
        const order = await Order.create({ _id: orderNr })
        res.json(order)
        return 0
    }

    res.status(500).json({ "error": 'the order cannot be created' })
})

connectToMongo()

app.listen(PORT ? PORT : 5500, () => {
    console.log("Server is running")
})