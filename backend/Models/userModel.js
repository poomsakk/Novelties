import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
    novelId: { type: String, required: true },
    name: { type: String, required: true },
})

const ownChapSchema = new mongoose.Schema({
    chapId: { type: String, required: true },
    expDate: { type: Date, required: true }
})

const ownNovelSchema = new mongoose.Schema({
    novelId: { type: String, required: true },
    ownChap: [ownChapSchema]
})

const ratingSchema = new mongoose.Schema({
    novelId: { type: String, required: true },
    score: { type: String, required: true }
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    coin: { type: Number, required: true, default: 0 },
    favorite: [favoriteSchema],
    ownNovel: [ownNovelSchema],
    rating: [ratingSchema]
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;
