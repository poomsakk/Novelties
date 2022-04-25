import mongoose from 'mongoose';

const ownNovelSchema = new mongoose.Schema({
    novelId: { type: String, required: true }
})

const writerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    coinRecieved: { type: Number, required: true, default: 0 },
    ownNovel: [ownNovelSchema],
}, { timestamps: true });

const writerModel = mongoose.model('Writer', writerSchema);

export default writerModel;