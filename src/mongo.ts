import mongoose, { Error } from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const URL = <string>process.env.MONGO_URL

export function connectToMongo() {
    mongoose.connect(URL).then(() => {
        console.log("mongo is connected")
    }).catch((err: Error) => {
        console.log(err.message)
    })
}