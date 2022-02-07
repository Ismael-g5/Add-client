import { Router } from 'express';
import orderController from '../controllers/order-controller';
import authMiddlewares from '../middlewares/auth-middlewares';

const orderRoute = Router();

orderRoute.post('/:id',authMiddlewares.authorizeClientByToken, orderController.Send);

export default orderRoute;