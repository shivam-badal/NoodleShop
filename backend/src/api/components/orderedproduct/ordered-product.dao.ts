import {CreateOrderedProductDTO} from "./dto/create-ordered-product.dto";
import {getRepository} from "typeorm";
import {Order} from "../../../entities/order.entity";
import {Product} from "../../../entities/product.entity";
import {OrderedProduct} from "../../../entities/ordered-product.entity";

export const get = async(): Promise<OrderedProduct[]> => {
    return getRepository(OrderedProduct).find();
}

export const create = async(orderId: string, createOrderedProductDTO :CreateOrderedProductDTO): Promise<OrderedProduct> => {
    const order = await getRepository(Order).findOne({id: orderId});
    const product = await getRepository(Product).findOne({id: createOrderedProductDTO.productId});

    if (!order || !product) {
        throw new Error("Order or product not found");
    }

    const orderedProduct = new OrderedProduct()
    orderedProduct.order = order
    orderedProduct.product = product
    orderedProduct.amount = createOrderedProductDTO.amount

    return getRepository(OrderedProduct).save(orderedProduct);
}
