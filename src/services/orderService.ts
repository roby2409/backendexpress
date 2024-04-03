import * as orderRepository from '../repositories/orderRepository';

export const listOrders = () => {
    return orderRepository.allOrder();
}

export const createOrder = (userId: number, bookId: number) => {
    return orderRepository.addOrder(userId, bookId);
};

export const listOrdersByUserId = (userId: number) => {
    return orderRepository.getOrdersByUserId(userId);
};

export const cancelOrder = (orderId: number) => {
    return orderRepository.cancelOrder(orderId);
};

