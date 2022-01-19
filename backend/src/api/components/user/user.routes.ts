import { Router } from "express";
import * as userController from "./user.controller";
import orderRoutes from "../order/order.routes";
import {isAuthenticated} from "../../middleware/isAuthenticated";

const router: Router = Router();

router.get("/",isAuthenticated, async (req, res) => {
    const users = await userController.findAll();

    res.json(users);
});

router.use("/:userId/orders", isAuthenticated, orderRoutes)

export default router;
