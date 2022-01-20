import { User } from "../../entities/user.entity";
require("dotenv").config();
import { NextFunction, Response, Request } from "express";
import jsonwebtoken from "jsonwebtoken";
import {DecryptedTokenDTO} from "../components/auth/dto/decryptedToken.dto";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.secureCookie || '';

    if (!token) {
        return res.status(401).json({message: "Not verified"})
    }

    try {
        const decryptedToken = await jsonwebtoken.verify(token, process.env.TOKEN_SECRET!) as DecryptedTokenDTO
        req.user = decryptedToken.user;
        next();
    } catch (error) {
        next(error);
    }
}

// export interface DecryptedToken {
//     user: User;
// }
