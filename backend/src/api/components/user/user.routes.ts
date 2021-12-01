import { Router } from "express";
import * as userController from "./user.controller";

const router: Router = Router();

router.get("/", async (req, res) => {
    const users = await userController.findAll();

    res.json(users);
});

export default router;
