import { Request, Response} from 'express';
import clientModel from '../models/client-model';

class ClientController {
    public async register(req: Request,res: Response):Promise<Response> {
        const client = await clientModel.create(req.body);
            const resolve = {
                message: 'Cliente cadastrado com sucesso!',
                _id: client._id,
                name: client.name,
                password: client.password,
            
            };
            return res.json(resolve);
    }
    public async authentication (req: Request, res: Response): Promise<Response> {
        const {name, password} = req.body;

        const client  = await clientModel.findOne({name});
        if(!client) {
            return res.status(400).send({message: 'Cliente não encontrado'});
        }
        const validPassword = await client.comparePassword(password);
        if(!validPassword){
            return res.status(400).send({message: 'Senha incorreta'});
        }
        return res.json({client,
         token: client.generateToken()});
    }

} 

export default new ClientController