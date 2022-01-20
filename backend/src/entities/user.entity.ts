import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    password?: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany((type) => Order, (Order) => Order.userId)
    orders: Order[]

    @Column({ default: false })
    admin: boolean;
}
