import { Router } from "express";
import * as productController from "./product.controller"
import { Product } from "../../../entities/product.entity";
import { CreateProductDTO } from "./dto/createproduct.dto";
import { isInt } from "class-validator";

const router: Router = Router();

router.get("/", async(req, res) => {
    const products: Product[] = await productController.get();

    res.json(products);
});

router.get("/:id", async(req, res) =>{
    const id = req.params.id;

    const product: Product = await productController.getById(id);

    res.json({
        product: product
    });
});

router.post("/create", async(req, res) => {
    const createProductDTO: CreateProductDTO = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        image: req.body.image,
    }

    const product: Product = await productController.create(createProductDTO)
    res.json(product)
})

export default router;
