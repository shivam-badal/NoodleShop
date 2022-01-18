import { Router } from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated";
import * as orderController from "./order.controller"
import {CreateOrderDTO} from "./dto/create-order.dto";


const router: Router = Router({mergeParams: true})

router.get("/", isAuthenticated, async (req, res) => {
    const orders = orderController.get();
    res.json(orders)
});

router.post("/create", isAuthenticated, async(req, res) => {
    const createOrderDto: CreateOrderDTO = req.body;
    const userId = req.params.userId

    const order = await orderController.create(userId, createOrderDto);
    console.log("Order:" , order)
    res.json(order)
})

export default router;
