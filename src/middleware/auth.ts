import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const TOKEN_KEY = <string>process.env.TOKEN_URL

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send("Token is required to authenticate the user")
    }
    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

