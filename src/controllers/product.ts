import { Request, Response, Router } from "express";
import ProductModel from "../mongodb/models/Product";


export const productRouter = Router();

productRouter.post("/new", async (req: Request, res: Response) => {
    const { name, productCategories, price } = req.body;

    if (name && productCategories && price) {
        ProductModel.create({ name: name, productCategories, price }).then((p) => {
            res.json(p)
        }).catch((err) => {
            res.status(400).json(err)
        })
    } else {
        res.status(400).send({ error: 'category name or productCategories is required' })
    }
})

