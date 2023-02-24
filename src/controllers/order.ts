import { Request, Response, Router } from "express";
import { CounterEnum, getNextNumber } from "../mongodb/models/Counter";
import OrderDetailsModel from "../mongodb/models/OrderDetails";

export const orderRouter = Router();



orderRouter.get("/orders", async (req: Request, res: Response) => {
    OrderDetailsModel.find({}).then((orders) => {
        res.json(orders)
    }).catch((err) => {
        res.json(err)
    })
})

orderRouter.post("/new", async (req: Request, res: Response) => {
    const params = req.params
    const nextOrderNr = await getNextNumber(CounterEnum.Order)
    const orderNr = CounterEnum.Order + nextOrderNr

    if (nextOrderNr !== 0) {
        const order = await OrderDetailsModel.create({ _id: orderNr })
        res.json(order)
        return 0
    }

    res.status(500).json({ error: 'the order cannot be created' })
})
