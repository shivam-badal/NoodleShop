import {GetUserDTO} from "../components/user/dto/get-user.dto";
import * as userDao from "../components/user/user.dao"

require("dotenv").config();
import {NextFunction, Response, Request} from "express";
import jsonwebtoken from "jsonwebtoken";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token || '';
    try {
        if (!token) {
           return res.status(401).json("Not verified")
        }
        const privateKey = process.env.TOKEN_SECRET

        if (!privateKey) {
           return new Error("JWT Secret can't be found or is not defined")
        }
        const decrypt = await jsonwebtoken.verify(token, privateKey) as DecryptedToken
        const userInJwt: GetUserDTO = decrypt.user

        if (!userInJwt) {
            throw new Error("User not valid")
        }

        const user = await userDao.findById(userInJwt.id)

        if(!user) {
            throw new Error("Not authenticated")
        }

        return true
    } catch (error) {
        next(error)
    }
}

interface DecryptedToken {
    user: GetUserDTO;
}
