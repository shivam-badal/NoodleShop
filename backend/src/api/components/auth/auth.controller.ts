import {Response} from "express";
import { RegisterDTO } from "./dto/register.dto";
import * as userDao from "../user/user.dao";
import { User } from "../../../entities/user.entity";
import { LoginDTO } from "./dto/login.dto";
import jsonwebtoken from "jsonwebtoken";
import { GetUserDTO } from "../user/dto/get-user.dto";
import * as tokenHelper from "../../../utils/token"
import { Payload } from "../../../utils/token";

export const register = async (registerDTO: RegisterDTO): Promise<User> => {
    const user = await userDao.findByEmail(registerDTO.email);

    if (user) {
        throw new Error(`User with ${registerDTO.email} already exists`);
    }
    return userDao.register(registerDTO);
};

export const login = async (loginDTO: LoginDTO, res: Response): Promise<GetUserDTO> => {
    const user = await userDao.findByEmail(loginDTO.email);

    if (!user) {
        throw new Error("Login Failed");
    }

    const isPasswdCorrect: boolean = await userDao.comparePasswords(
        loginDTO,
        user?.password ?? ""
    );

    if (!isPasswdCorrect) {
        throw new Error("Login Failed");
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
    // const token = jsonwebtoken.sign(JSON.stringify(payload), privateKey)

    res.cookie("secureCookie", token, {
        httpOnly: true,
        // TODO: Put max age in .env
        maxAge: 60 * 60 * 24 * 7 * 1000,
        // secure: true,
        // sameSite: true
    })

    return user;
};
