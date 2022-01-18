import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";
import {OrderedProduct} from "./ordered-product.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => OrderedProduct, OrderedProduct => OrderedProduct.order)
    orderedProducts: OrderedProduct[];

    @ManyToOne(type => User, User => User.orders)
    user: User;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
