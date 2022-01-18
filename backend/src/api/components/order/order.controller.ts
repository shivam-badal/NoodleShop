import { Order } from "../../../entities/order.entity";
import * as orderDao from "./order.dao"
import {CreateOrderDTO} from "./dto/create-order.dto";

export const get = async(): Promise<Order[]> => {
    return await orderDao.get()
}

export const create = async (userId: string, createOrderDto: CreateOrderDTO): Promise<Order> => {
    return await orderDao.create(userId, createOrderDto)
}
