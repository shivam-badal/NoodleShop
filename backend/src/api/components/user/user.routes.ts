import { Router } from "express";
import * as userController from "./user.controller";
import orderRoutes from "../order/order.routes";
import {isAuthenticated} from "../../middleware/isAuthenticated";
import {GetUserDTO} from "./dto/get-user.dto";
import {isAdmin} from "../../middleware/isAdmin";

const router: Router = Router();

router.get("/",isAuthenticated, isAdmin, async (req, res) => {
    const users: GetUserDTO[] = await userController.findAll();

    res.json(users);
});

router.use("/:userId/orders", isAuthenticated, orderRoutes)

export default router;
