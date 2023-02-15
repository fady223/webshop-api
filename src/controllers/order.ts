import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import { CounterEnum, getNextNumber } from "../models/Counter";
import Order from "../models/Order";
const orderRouter = Router();



orderRouter.get("/orders", async (req: Request, res: Response) => {
    Order.find({}).then((orders) => {
        res.json(orders)
    }).catch((err: Error) => {
        res.json(err)
    })
})

orderRouter.post("/create_order", async (req: Request, res: Response) => {
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

export { orderRouter }