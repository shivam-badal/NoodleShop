import {CreateOrderedProductDTO} from "../../orderedproduct/dto/create-ordered-product.dto";
import {IsArray} from "class-validator";

export class CreateOrderDTO {
    @IsArray()
    orderedProducts: CreateOrderedProductDTO[];
}
