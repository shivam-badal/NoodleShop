import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product.entity";
import {Order} from "./order.entity";

@Entity()
export class OrderedProduct {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Product, Product => Product.id)
    product: Product

    @ManyToOne(type => Order, Order => Order.orderedProducts)
    order: Order

    @Column()
    amount: number;

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date
}
