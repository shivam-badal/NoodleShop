import { Router } from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated";
import * as orderController from "./order.controller"
import {CreateOrderDTO} from "./dto/create-order.dto";
import orderedProductRoutes from "../orderedproduct/ordered-product.routes"

const router: Router = Router({mergeParams: true})

router.get("/", isAuthenticated, async (req, res) => {
    const orders = await orderController.get();

    res.json(orders)
});

router.post("/create", isAuthenticated, async(req, res) => {
    const createOrderDto: CreateOrderDTO = req.body;
    const userId = req.params.userId

    const order = await orderController.create(userId, createOrderDto);
    res.json(order)
});

router.use("/:orderId/product", orderedProductRoutes);

export default router;
