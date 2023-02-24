import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import ProductCategoryModel from "../mongodb/models/ProductCategory";

export const productCategoryRouter = Router();

productCategoryRouter.post("/new", async (req: Request, res: Response) => {
    const { name } = req.body;
    if (name) {
        ProductCategoryModel.create({ name: name }).then((p) => {
            res.json(p)
        }).catch((err: Error) => {
            res.status(400).json(err)
        })
    } else {
        res.status(400).send({ error: 'category name is required' })
    }
})

