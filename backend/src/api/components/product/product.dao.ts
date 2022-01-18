import { Product } from "../../../entities/product.entity";
import { getRepository } from "typeorm";
import {CreateProductDTO} from "./dto/createproduct.dto";

export const get = async(): Promise<Product[]> => {
    return getRepository(Product).find()
}

export const create = async(createProductDto: CreateProductDTO): Promise<Product> => {
    const product = new Product()
    product.name = createProductDto.name;
    product.brand = createProductDto.brand;
    product.price = createProductDto.price;
    product.image = createProductDto.image;

    return await getRepository(Product).save(product)
}

export const getById = async(id: string): Promise<Product | undefined> => {
    return await getRepository(Product).findOne(id);
}
