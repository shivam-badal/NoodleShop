import { RegisterDTO } from "./dto/register.dto";
import * as userDao from "../user/user.dao";
import { User } from "../../../entities/user.entity";
import { LoginDTO } from "./dto/login.dto";

export const register = async (registerDTO: RegisterDTO): Promise<User> => {
    /**
     * TODO: Add check for existing email!
     */
    return userDao.register(registerDTO);
};

export const login = async (loginDTO: LoginDTO): Promise<User> => {
    /**
     * TODO: Make custom exceptions!
     */
    const user = await userDao.findByEmail(loginDTO.email);

    if (!user) {
        throw new Error("Login Failed");
    }

    const isPasswdCorrect: boolean = await userDao.comparePasswords(
        loginDTO,
        user.password
    );

    if (!isPasswdCorrect) {
        throw new Error("Login Failed");
    }

    /**
     * TODO: Make it so password wont return
     *
     */
    return user; // Dis bad
};
