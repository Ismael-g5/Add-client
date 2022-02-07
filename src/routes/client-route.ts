import { Router } from 'express';
import clientController from '../controllers/client-controller';

const clientRoute = Router();

clientRoute.post('/register', clientController.register);
clientRoute.post('/login', clientController.authentication);

export default clientRoute;