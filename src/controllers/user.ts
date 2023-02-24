import { Request, Response, Router } from "express";
import UserModel from "../mongodb/models/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../mongodb/mongoose-types";

export const userRouter = Router();

const TOKEN_KEY = <string>process.env.TOKEN_URL


interface iUser {
    username: string,
    password: string,
    email: string,
}

userRouter.post("/register", async (req: Request, res: Response) => {
    try {
        const { username, password, email }: iUser = req.body

        if (!(email && password && username)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await UserModel.findOne({ "email.emailStr": email })

        if (oldUser) {
            return res.status(409).send("User Already Exist");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            username,
            password: encryptedPassword,
            email: {
                emailStr: email,
                verified: false
            }
        })
        res.status(201).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Something went wrong" })
    }
})

userRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!(email && password)) {
            res.status(400).send("All input is required")
        }

        const user: User | null = await UserModel.findOne({ "email.emailStr": email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                `${TOKEN_KEY}`,
                {
                    expiresIn: "2h"
                }
            )
            res.cookie('jwtToken', token, { httpOnly: true })
            res.status(200).json({ token: token })
        }
        res.status(400).send("Invalid Credentials");

    } catch (err) {
        console.log(err)
    }
})

userRouter.post("/logout", async (req: Request, res: Response) => {
    res.clearCookie("jwtToken")
    res.json({ message: "Logged out successfully" })
})

