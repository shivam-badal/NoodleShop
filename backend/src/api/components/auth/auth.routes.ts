import {Response, Router} from "express";
import { User } from "../../../entities/user.entity";
import * as authController from "./auth.controller";
import { LoginDTO } from "./dto/login.dto";
import { RegisterDTO } from "./dto/register.dto";
import {GetUserDTO} from "../user/dto/get-user.dto";

const router: Router = Router();

router.post("/register", async (req, res) => {

    const registerDto: RegisterDTO = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    };

    const user: User = await authController.register(registerDto, res);
    res.json({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: user.admin,
    });
});

router.post("/login", async (req, res) => {
    const loginDTO: LoginDTO = {
        email: req.body.email,
        password: req.body.password,
    };

    const user: GetUserDTO | undefined = await authController.login(loginDTO, res);
    user ? res.json(user) : res.status(401).json({message: "Login failed"});
});

router.get("/verify", async (req, res) => {
    return await authController.verify(req, res);
});

router.delete('/logout', async(req,res) => {
    return await authController.logout(res);
})

export default router;
