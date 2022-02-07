import { Schema, model } from "mongoose";

const RegisterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    Sender: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    Recipient: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }
});

export default model('Register', RegisterSchema);