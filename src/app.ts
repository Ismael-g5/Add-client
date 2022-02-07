import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import clientRoute from './routes/client-route';
import orderRoute from './routes/order-routes';

export class App{
    private express: express.Application;
    private port = 8080;

    constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.express; 
    }
    private middlewares(): void{
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void  {
        this.express.listen(this.port, () => {
            console.log('Servidor iniciado na port ' + this.port);
        });
    }
    
     private database(): void {
        mongoose.connect('mongodb+srv://753951:753951@cursojs01.7jru0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            
        })
    }
    private routes(): void {
        this.express.use('/client', clientRoute);
        this.express.use('/order', orderRoute);
    }
}