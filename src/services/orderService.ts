import * as orderRepository from '../repositories/orderRepository';

export const listOrders = () => {
    return orderRepository.allOrder();
}

export const createOrder = (userId: number, bookId: number) => {
    return orderRepository.addOrder(userId, bookId);
};

export const listOrdersByUserId = (userId: number, page: number, perPage: number) => {
    return orderRepository.getOrdersByUserId(userId, page, perPage);
};

export const cancelOrder = (orderId: number) => {
    return orderRepository.cancelOrder(orderId);
};

