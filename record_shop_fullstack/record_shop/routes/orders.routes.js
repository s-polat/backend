import { Router } from 'express';
import { getOrders, addOrder, getOrderById, deleteOrder } from '../controller/orders.controller.js';

const router = new Router();

router.route('/')
    .get(getOrders)
    .post(addOrder);

router.route('/:id')
    .get(getOrderById)
    .delete(deleteOrder);

export default router;