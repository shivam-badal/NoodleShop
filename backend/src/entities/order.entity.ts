import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "./user.entity";
import {OrderedProduct} from "./ordered-product.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => OrderedProduct, OrderedProduct => OrderedProduct.order)
    orderedProducts: OrderedProduct[];

    @ManyToOne(type => User, User => User.orders)
    userId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
