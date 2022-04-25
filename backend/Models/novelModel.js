import mongoose from 'mongoose';

const ratingSchema = {
    allScore: { type: Number, require: true, default: 10 },
    count: { type: Number, require: true, default: 1 }
}

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const chapterSchema = new mongoose.Schema({
    chapter: { type: String, required: true },
    name: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    viewers: { type: Number, required: true }
})

const novelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: [categorySchema],
    allViewers: { type: Number, required: true, default: 9999 },
    rating: ratingSchema,
    image: { type: String, required: true },
    allChapter: [chapterSchema],
    writerId: { type: String, required: true },
    title: { type: String, required: true },
    coinRecieve: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const novelModel = mongoose.model('Novel', novelSchema);

export default novelModel;