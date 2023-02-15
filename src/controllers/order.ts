import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import Order from "../models/Order";
const orderRouter = Router();



orderRouter.get("/orders", async (req: Request, res: Response) => {
    Order.find({}).then((orders) => {
        res.json(orders)
    }).catch((err: Error) => {
        res.json(err)
    })
})

export { orderRouter }