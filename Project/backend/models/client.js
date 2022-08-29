import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
    }
    });

    const Client = mongoose.model('Client', clientSchema);
    export default Client;