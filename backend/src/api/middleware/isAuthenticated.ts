import {User} from "../../entities/user.entity";

require("dotenv").config();
import {NextFunction, Response, Request} from "express";
import jsonwebtoken from "jsonwebtoken";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.secureCookie || '';

    if (!token) {
        return res.status(401).json("Not verified")
    }

    try {
        req.user = await jsonwebtoken.verify(token, process.env.TOKEN_SECRET!) as DecryptedToken
        next();
    } catch (error) {
        next(error);
    }
}

interface DecryptedToken {
    user: User;
}
