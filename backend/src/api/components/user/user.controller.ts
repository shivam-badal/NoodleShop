import * as userDao from "./user.dao";

export const findAll = async () => {
    return await userDao.findAll();
};
