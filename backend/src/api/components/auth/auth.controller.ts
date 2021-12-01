import { RegisterDTO } from "./dto/register.dto";
import * as userDao from "../user/user.dao";
import { User } from "../../../entities/user.entity";

export const register = async (registerDto: RegisterDTO): Promise<User> => {
    /**
     * TODO: Add check for existing email!
     */
    return userDao.createUser(registerDto);
};
