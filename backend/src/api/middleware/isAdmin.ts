import {Request, Response, NextFunction} from "express";
import jsonwebtoken from "jsonwebtoken";
import {DecryptedTokenDTO} from "../components/auth/dto/decryptedToken.dto";

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.secureCookie || '';
    const decryptedToken = await jsonwebtoken.verify(token, process.env.TOKEN_SECRET!) as DecryptedTokenDTO

    const user = decryptedToken.user;

    if (!user) {
        next(res.status(401).json({message: "Not authorized"}));
    }

    if (!user.admin) {
        next(res.status(401).json({message: "Not authorized"}))
    }
    next();
}
