import {CreateOrderedProductDTO} from "./dto/create-ordered-product.dto";
import * as orderedProductDAO from "./ordered-product.dao";
import {OrderedProduct} from "../../../entities/ordered-product.entity";

export const get = async(): Promise<OrderedProduct[]> => {
    return await orderedProductDAO.get();
}

export const create = async(orderId: string, createOrderedProductDTO :CreateOrderedProductDTO): Promise<OrderedProduct> => {
    return await orderedProductDAO.create(orderId, createOrderedProductDTO);
}
