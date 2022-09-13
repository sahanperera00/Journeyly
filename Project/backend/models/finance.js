import mongoose from "mongoose"

const Schema = mongoose.Schema;

const financeSchema = new Schema({
    pkgType: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    profit: {
        type: Number,
        required: true
    },
    finalPrice: {
        type: Number,
        required: true
    },
});

const Finance = mongoose.model("Finance", financeSchema);

export default Finance;