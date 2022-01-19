import {Router} from "express";
import {isAuthenticated} from "../../middleware/isAuthenticated";
import {OrderedProduct} from "../../../entities/ordered-product.entity";
import * as orderProductController from "./ordered-product.controller"


const router: Router = Router({mergeParams: true});

router.get("/", isAuthenticated, async(req, res) => {
    const orderedProducts: OrderedProduct[] = await orderProductController.get();
    res.json(orderedProducts);
});

router.post("/create", isAuthenticated, async(req, res) => {
    const dto = req.body;
    const orderId = req.params.orderId

    const orderedProduct: OrderedProduct = await orderProductController.create(orderId, dto)
    res.json(orderedProduct);
});


export default router;

