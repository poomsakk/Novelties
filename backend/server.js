import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import userRouter from "./Routes/userRoute.js";
import novelRouter from "./Routes/novelRoute.js";
import writerRouter from "./Routes/writerRoute.js";
import mongoose from "mongoose";
import cors from 'cors';
import Novel from "./Models/novelModel.js"
import orderRouter from "./Routes/orderRoute.js";
import OrderCoin from "./Models/orderCoin.js"
import OrderChap from "./Models/orderChapter.js"
dotenv.config();

const app = express();

//connect DB
mongoose.connect(process.env.MONGODB_URL).then(() => console.log("DB CONNECTED")).catch((err) => console.log("CAN'T CONNECT : ", err))

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

//route
app.use('/api/users', userRouter);
app.use('/api/novels', novelRouter);
app.use('/api/writer', writerRouter);
app.use('/api/order', orderRouter);
app.get('/api/novels', async (req, res) => {
    const novels = await Novel.find({})
    res.send(novels);
})
app.get('/api/novels/search/:searchname', async (req, res) => {
    const novels = await Novel.find({ name: req.params.searchname })
    res.send(novels);
})
app.get('/api/novels/:id', async (req, res) => {
    const novel = await Novel.findOne({ _id: req.params.id });
    res.send(novel);
})
app.get('/api/order/coinhistory/:userid', async (req, res) => {
    const history = await OrderCoin.find({ userId: req.params.userid })
    res.send(history)
})
app.get('/api/order/chapterhistory/:userid', async (req, res) => {
    const history = await OrderChap.find({ userId: req.params.userid })
    res.send(history)
})

app.get('/', async (req, res) => {
    res.send("Hello")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Sever is running on port ", port);
})