import {Response} from "express";
import { RegisterDTO } from "./dto/register.dto";
import * as userDao from "../user/user.dao";
import { User } from "../../../entities/user.entity";
import { LoginDTO } from "./dto/login.dto";
import jsonwebtoken from "jsonwebtoken";
import {GetUserDTO} from "../user/dto/get-user.dto";


export const register = async (registerDTO: RegisterDTO): Promise<User> => {
    const user = await userDao.findByEmail(registerDTO.email);

    if (user) {
        throw new Error(`User with ${registerDTO.email} already exists`);
    }
    return userDao.register(registerDTO);
};

export const login = async (loginDTO: LoginDTO, res: Response): Promise<User> => {
    const user = await userDao.findByEmail(loginDTO.email);
    const userDTO: GetUserDTO = new GetUserDTO()

    if (!user) {
        throw new Error("Login Failed");
    }

    if (user) {
        userDTO.id = user.id
        userDTO.email = user.email
        userDTO.firstName = user.firstName
        userDTO.lastName = user.lastName
        userDTO.role = user.role
    }

    const isPasswdCorrect: boolean = await userDao.comparePasswords(
        loginDTO,
        user.password
    );

    if (!isPasswdCorrect) {
        throw new Error("Login Failed");
    }

    const privateKey = process.env.TOKEN_SECRET;

    if (!privateKey) {
        throw new Error("JWT Secret can't be found or is not defined")
    }
    const token = jsonwebtoken.sign(userDTO, privateKey, {
        expiresIn: "2 days"
    })

    res.cookie("secureCookie", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 * 1000,
    })

    return user;
};
