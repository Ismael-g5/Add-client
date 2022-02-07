import { ClientInterface } from './../interface/client-interface';
import { NextFunction, Request, Response} from 'express';
import  jwt  from 'jsonwebtoken';
import clientModel from '../models/client-model';

class AuthMiddlewares {
    public async authorizeClientByToken (req: Request, res: Response, next: NextFunction):Promise<Response | void>{
        const token = req.query.token || req.headers['x-access-token'];

            if(!token) {
                return res.status(401).send({message: 'Acesso restrito'});
            }
            try {const clientToken = jwt.verify(token, 'SECRET');
            const client = await clientModel.findById(clientToken._id)

            if(!client){
                return res.status(400).send({message:'cliente não consta no banco de dados!'})
            }
            req.client = client;

                
            return next();
            } catch (error) {
                return res.status(401).send({message:'Token Invalido'});
                
            }

            
        }

}

export default new AuthMiddlewares