import express from "express";
import CoinModel from "../Models/orderCoin.js";
import User from '../Models/userModel.js';

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
        await user.save()
        const create = await ordercoin.save()
        create ? res.json({ message: "OK" }) : res.json({ message: "CREATE FAIL" });
    } catch (err) {
        res.send({ err });
    }
})

// orderRouter.post('/addNovel', async (req, res) => {
//     const novel = new Novel({
//         name: req.body.novelName,
//         category: req.body.category,
//         image: req.body.image,
//         writerId: req.body.writerid,
//         title: req.body.title
//     });
//     try {
//         //save novel
//         const create = await novel.save();
//         //add novel in writer collections
//         const writer = await Writer.findById(req.body.writerid)
//         const novell = { novelId: String(create._id) }
//         writer.ownNovel.push(novell)
//         await writer.save()
//         create ? res.json({ message: "OK" }) : res.json({ message: "CREATE FAIL" });
//     } catch (err) {
//         res.send({ err });
//     }
// });

// orderRouter.post('/:id/addChapter', async (req, res) => {
//     const novel = await Novel.findById(req.params.id)
//     if (novel) {
//         const newChapter = {
//             chapter: (novel.allChapter.length + 1).toString(),
//             name: req.body.name,
//             detail: req.body.detail,
//             price: req.body.price,
//             viewers: 0
//         }
//         novel.allChapter.push(newChapter)
//         const updateChap = await novel.save()
//         res.send({ data: updateChap.allChapter[updateChap.allChapter.length - 1], message: "OK" })
//     } else {
//         res.send({ message: "Novel Not Found" })
//     }
// });

export default orderRouter;

