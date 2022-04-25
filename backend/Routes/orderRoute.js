import express from "express";
import CoinModel from "../Models/orderCoin.js";
import User from '../Models/userModel.js';
import OrderChapterModel from "../Models/orderChapter.js";
import NovelModel from "../Models/novelModel.js";
import jwt from 'jsonwebtoken';

const orderRouter = express.Router();

orderRouter.post('/buycoin', async (req, res) => {
    const ordercoin = new CoinModel({
        userId: req.body.userid,
        money: req.body.money,
        coinRecieve: req.body.coinRecieve,
        creditCartNumber: req.body.creditCartNumber,
        date: Date.now()
    })
    try {
        const user = await User.findById(req.body.userid)
        const newcoin = user.coin + req.body.coinRecieve
        user.coin = newcoin
        const newUserdata = await user.save()
        const create = await ordercoin.save()
        !create ? res.json({ message: "ERROR!!!!" }) : res.json({
            message: "OK",
            _id: newUserdata.id,
            name: newUserdata.name,
            email: newUserdata.email,
            isAdmin: newUserdata.isAdmin,
            favorite: newUserdata.favorite,
            ownChap: newUserdata.ownChap,
            coin: newUserdata.coin,
            rating: newUserdata.rating,
            token: jwt.sign({ name: newUserdata.name, email: newUserdata.email, id: newUserdata._id }, "Secret", { expiresIn: "2d" })
        });
    } catch (err) {
        res.send({ err });
    }
})

orderRouter.post('/buychapter', async (req, res) => {
    //add chapter in user ownChap
    const userr = await User.findById(req.body.userid)
    var updatedUser = null
    try {
        var exp = Date.now()
        if (req.body.buytype === "RENT") {
            const currentTimeAsMs = Date.now();
            const adjustedTimeAsMs = currentTimeAsMs + (1000 * 60 * 60 * 24 * 30);
            var exp = new Date(adjustedTimeAsMs);
        }
        if (req.body.buytype === "BUY") {
            var exp = new Date(0);
        }
        const novel = {
            chapId: req.body.chapid,
            expDate: exp
        }
        const oldMoney = userr.coin
        userr.coin = oldMoney - req.body.price
        userr.ownChap.push(novel)
        updatedUser = await userr.save()
    } catch (err) {
        res.send({ message: "add chapter in user ownChap error!!" })
    }
    //add coinRecieve in Novel
    const novell = await NovelModel.findById(req.body.novelid)
    const oldcoinnovel = novell.coinRecieve
    novell.coinRecieve = oldcoinnovel + req.body.price
    await novell.save()

    //create order
    const oderchap = new OrderChapterModel({
        userId: req.body.userid,
        novelId: req.body.novelid,
        chapterId: req.body.chapid,
        price: req.body.price,
        buyType: req.body.buytype,
        date: Date.now()
    })
    try {
        const create = await oderchap.save()
        create ? res.json({
            message: "OK",
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            favorite: updatedUser.favorite,
            ownChap: updatedUser.ownChap,
            coin: updatedUser.coin,
            rating: updatedUser.rating,
            token: jwt.sign({ name: updatedUser.name, email: updatedUser.email, id: updatedUser._id }, "Secret", { expiresIn: "2d" })
        }) : (res.send({ message: "Create order chap error!!" }))
    } catch (err) {
        res.send({ message: "Create order chap error!!" })
    }
})

export default orderRouter;

