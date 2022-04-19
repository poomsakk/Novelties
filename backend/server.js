import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import userRouter from "./Routes/userRoute.js";
import novelRouter from "./Routes/novelRoute.js";
import mongoose from "mongoose";
import cors from 'cors';
dotenv.config();

const app = express();

//connect DB
mongoose.connect(process.env.MONGODB_URL).then(() => console.log("DB CONNECTED")).catch((err) => console.log("CAN'T CONNECT : ", err))

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

//route
app.get('/', (req, res) => res.send("DB CONNECTED"))
app.get('/hello', (req, res) => {
    res.send("hello world");
})
app.use('/api/users', userRouter);
app.use('/api/novels', novelRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Sever is running on port ", port);
})