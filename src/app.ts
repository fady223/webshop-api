import express, { Response, Request } from "express"
import * as dotenv from 'dotenv'
import cors from "cors"
import { connectToMongo } from "./mongodb"
import { orderRouter } from "./controllers/order"

dotenv.config()

const PORT = process.env.PORT

const app = express();
app.use(cors())
app.use("/order", orderRouter)
app.get("/", (req: Request, res: Response) => {
    res.send("hello")
})

connectToMongo()

app.listen(PORT ? PORT : 5500, () => {
    console.log("Server is running")
})