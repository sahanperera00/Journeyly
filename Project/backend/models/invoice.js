import mongoose from "mongoose"

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    additonalaNote: {
        type: String,
        
     
    },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;