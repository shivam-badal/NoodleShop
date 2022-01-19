import { Order } from "../../../entities/order.entity"
import {getRepository} from "typeorm";
import {CreateOrderDTO} from "./dto/create-order.dto";
import {User} from "../../../entities/user.entity";
import {OrderedProduct} from "../../../entities/ordered-product.entity";
import {Product} from "../../../entities/product.entity";

export const get = async(): Promise<Order[]> => {
    return getRepository(Order).find({relations: ["orderedProducts"]})
}

export const create = async (userId: string, createOrderDTO: CreateOrderDTO): Promise<Order> => {
    console.log(userId)
    const user: User | undefined = await getRepository(User).findOne({id: userId })

    if (!user) {
        throw new Error("User does not exist")
    }

    const orderedProducts: OrderedProduct[] = []

    for (const productDto of createOrderDTO.orderedProducts) {
        const product: Product | undefined = await getRepository(Product).findOne({id: productDto.productId});
        if (!product) throw new Error("Product not found")

        const orderedProduct = new OrderedProduct()
        orderedProduct.amount = productDto.amount
        orderedProduct.product = product
        orderedProducts.push(await getRepository(OrderedProduct).save(orderedProduct))
    }
    const order: Order = new Order();
    order.userId = userId;
    order.orderedProducts = orderedProducts

    return await getRepository(Order).save(order);
}
