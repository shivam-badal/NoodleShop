import * as userDao from "./user.dao";

export const findAll = async () => {
    const users = await userDao.findAll();
    return users;
};
