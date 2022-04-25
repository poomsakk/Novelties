import mongoose from 'mongoose';

const orderChapterSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    novelId: { type: String, required: true },
    chapterId: { type: String, required: true },
    price: { type: Number, required: true },
    buyType: { type: String, required: true },
    date: { type: Date, required: true }
}, { timestamps: true });

const orderChapterModel = mongoose.model('Orderchapter', orderChapterSchema);

export default orderChapterModel;