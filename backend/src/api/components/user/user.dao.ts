import { getRepository } from "typeorm";
import { User } from "../../../entities/user.entity";
import { RegisterDTO } from "../auth/dto/register.dto";
import bcrypt from "bcrypt";

export const findAll = async (): Promise<User[]> => {
    return getRepository(User).find();
};

export const createUser = async (registerDto: RegisterDTO): Promise<User> => {
    const newUser = new User();
    newUser.email = registerDto.email;
    newUser.firstName = registerDto.firstName;
    newUser.lastName = registerDto.lastName;
    newUser.password = await bcrypt.hash(registerDto.password, 10);

    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(registerDto.password, salt, (err, hash) => {
    //         // console.log("HASH: ", hash);
    //         newUser.password = hash;
    //     });
    // });

    console.log("HASH 1: ", newUser.password);

    const newlyCreatedUser = await getRepository(User).save(newUser);
    return newlyCreatedUser;
};
