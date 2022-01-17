import { Product } from "../../../entities/product.entity"
import * as productDao from "./product.dao"
import { CreateProductDTO } from "./dto/createproduct.dto";

export const get = async (): Promise<Product[]> => {
    return await productDao.get();
}

export const create = async (createProductDTO: CreateProductDTO): Promise<Product> => {
    return await productDao.create(createProductDTO);
}

export const getById = async (id: string): Promise<Product> => {
    const product = await productDao.getById(id)
    if (!product) {
        throw new Error(`Product with id: ${id} not found`)
    }
    return product;
}

