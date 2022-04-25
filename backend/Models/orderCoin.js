import mongoose from 'mongoose';

const orderCoinSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    money: { type: Number, required: true },
    coinRecieve: { type: Number, required: true },
    creditCartNumber: { type: String, required: true },
    date: { type: Date, required: true }
}, { timestamps: true });

const orderCoinModel = mongoose.model('Ordercoin', orderCoinSchema);

export default orderCoinModel;