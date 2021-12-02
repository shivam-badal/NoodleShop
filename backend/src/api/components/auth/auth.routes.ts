import { Router } from "express";
import { User } from "../../../entities/user.entity";
import * as authController from "./auth.controller";
import { LoginDTO } from "./dto/login.dto";
import { RegisterDTO } from "./dto/register.dto";

const router: Router = Router();

router.post("/register", async (req, res) => {
    const registerDto: RegisterDTO = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    };

    const user: User = await authController.register(registerDto);
    res.json(user);
});

router.post("/login", async (req, res) => {
    const loginDTO: LoginDTO = {
        email: req.body.email,
        password: req.body.password,
    };

    const user: User = await authController.login(loginDTO);
    res.json(user);
});

export default router;
