import { getRepository } from "typeorm";
import { User } from "../../../entities/user.entity";

export const findAll = async (): Promise<User[]> => {
    return getRepository(User).find();
};
