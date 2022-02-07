import { Schema, model,  } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const ClientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        requiered: true,
    },
    age: {
        type: String,
        required: true
    }
});


ClientSchema.pre('save', async function encryptPassword(){
    this.password = await bcrypt.hash(this.password, 8);
    //hooks acima passa uma ordem
});

ClientSchema.methods.comparePassword = function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
}

ClientSchema.methods.generateToken = function(): string {
    const decodedToken = {
        _id: String(this._id),
        name: this.name,
        age: this.age
    };
    return jwt.sign(decodedToken, 'SECRET', {
        expiresIn: '1d'
    });
}

export default model('Client', ClientSchema);