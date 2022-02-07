import {Request, Response} from 'express';
import orderModel from '../models/order-model';

class OrderController {
public async Send(req:Request, res: Response): Promise<Response> {
    const order = await orderModel.create({
        nameOrder: req.body.text,
        sender: req.client._id,
        recipient:req.params.id

    });
return res.json(order);

}


}

export default new OrderController;