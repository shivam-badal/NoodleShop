import {IsNotEmpty, IsNumber, IsUUID} from "class-validator";

export class CreateOrderedProductDTO {
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsUUID()
    @IsNotEmpty()
    productId: string
}
