import {Request, Response} from "express";
import { RegisterDTO } from "./dto/register.dto";
import * as userDao from "../user/user.dao";
import { User } from "../../../entities/user.entity";
import { LoginDTO } from "./dto/login.dto";
import { GetUserDTO } from "../user/dto/get-user.dto";
import * as tokenHelper from "../../../utils/token"
import { Payload } from "../../../utils/token";
import jsonwebtoken from "jsonwebtoken";
import {DecryptedTokenDTO} from "./dto/decryptedToken.dto";

export const verify = async(req: Request, res: Response) => {
    const token = req.cookies.secureCookie || '';

    if (!token) {
        return res.status(401).json({loggedIn: false})
    }

    try {
        const decryptedToken = await jsonwebtoken.verify(token, process.env.TOKEN_SECRET!) as DecryptedTokenDTO

        return res.status(200).json({loggedIn: true, user: {
                id: decryptedToken.user.id,
                email: decryptedToken.user.email,
                firstName: decryptedToken.user.firstName,
                lastName: decryptedToken.user.lastName,
                admin: decryptedToken.user.admin,
            }
        });
    } catch (e) {
        if (req.cookies) {
            await logout(res);
        }
        return res.status(401).json({loggedIn: false})
    }
}


export const register = async (registerDTO: RegisterDTO, res: Response): Promise<User> => {
    const user = await userDao.findByEmail(registerDTO.email);

    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}/

    if (registerDTO.password.match(regex) === null) {
        res.status(400).json({message: "Something went wrong with registering"})
    }

    if (user) {
        res.status(400).json({message: "Login failed"})
    }
    return userDao.register(registerDTO);
};

export const login = async (loginDTO: LoginDTO, res: Response): Promise<GetUserDTO | undefined> => {
    const user = await userDao.findByEmail(loginDTO.email);

    if (!user) {
        res.status(401).json({message: "Login failed"})
        return
    }

    const isPasswdCorrect: boolean = await userDao.comparePasswords(
        loginDTO,
        user?.password ?? ""
    );

    if (!isPasswdCorrect) {
        res.status(401).json({message: "Login failed"})
        return
    }

    if (user) {
        delete user.password;
    }

    const privateKey = process.env.TOKEN_SECRET;

    if (!privateKey) {
        throw new Error("JWT Secret can't be found or is not defined")
    }

    const payload: Payload = {
        user,
    }

    const token = await tokenHelper.signToken(payload, privateKey, '1h')

    res.cookie("secureCookie", token, {
        httpOnly: true,
        // TODO: Put max age in .env
        maxAge: 60 * 60 * 24 * 7 * 1000,
        // secure: true,
        // sameSite: true
    });

    return user;
};

export const logout = async (res: any) => {
    res.clearCookie("secureCookie");
    res.status(200).json({message: "Logged out successfully"})
}
