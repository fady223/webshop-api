import express, { Response, Request } from "express"
import * as dotenv from 'dotenv'
import cors from "cors"
import { connectToMongo } from "./mongodb/MongoConnect"
import { orderRouter } from "./controllers/order"
import { productCategoryRouter } from "./controllers/productCategory"
import { productRouter } from "./controllers/product"
import { userRouter } from "./controllers/user"


dotenv.config()

const PORT = process.env.PORT

const app = express();
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/order", orderRouter)
app.use("/productCategory", productCategoryRouter)
app.use("/product", productRouter)


app.get("/", (req: Request, res: Response) => {
    res.send("hello")
})

connectToMongo()

app.listen(PORT ? PORT : 5500, () => {
    console.log("Server is running")
})