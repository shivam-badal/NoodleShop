import * as userDao from "./user.dao";
import {GetUserDTO} from "./dto/get-user.dto";

export const findAll = async (): Promise<GetUserDTO[]> => {
    return await userDao.findAll();
};
