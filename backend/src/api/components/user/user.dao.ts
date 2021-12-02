import { getRepository } from "typeorm";
import { User } from "../../../entities/user.entity";
import { RegisterDTO } from "../auth/dto/register.dto";
import bcrypt from "bcrypt";
import { Resolver } from "dns";
import { LoginDTO } from "../auth/dto/login.dto";
import { Response } from "express";

export const findAll = async (): Promise<User[]> => {
    return getRepository(User).find();
};

export const register = async (registerDTO: RegisterDTO): Promise<User> => {
    const newUser = new User();
    newUser.email = registerDTO.email;
    newUser.firstName = registerDTO.firstName;
    newUser.lastName = registerDTO.lastName;
    newUser.password = await hash(registerDTO);

    const newlyCreatedUser = await getRepository(User).save(newUser);
    return newlyCreatedUser;
};

export const findByEmail = async (email: string) => {
    return await getRepository(User).findOne({ email: email });
};

export const hash = (registerDto: RegisterDTO): Promise<string> => {
    return new Promise((reflect, refrain) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) refrain(err);
            bcrypt.hash(registerDto.password, salt, (err, hash) => {
                if (err) refrain(err);
                reflect(hash);
            });
        });
    });
};

export const comparePasswords = async (
    loginDTO: LoginDTO,
    password: string
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(loginDTO.password, password, async (err, isMatched) => {
            if (err) reject(err);
            if (isMatched) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};
