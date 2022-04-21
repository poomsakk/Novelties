import Novel from "../Models/novelModel.js"
import express from "express";

const novelRouter = express.Router();

// I DONT KNOW WHY THIS ERROR
// novelRouter.get('/'), async (req, res) => {
//     try {
//         const novels = await Novel.find({});
//         res.send(novels)
//     } catch (err) {
//         res.send(err);
//     }
// }

novelRouter.post('/addNovel', async (req, res) => {
    const novel = new Novel({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
    });
    try {
        const create = await novel.save();
        create ? res.json({ message: "OK" }) : res.json({ message: "CREATE FAIL" });
    } catch (err) {
        res.json({ message: err });
    }
});

novelRouter.post('/:id/addChapter', async (req, res) => {
    const novel = await Novel.findById(req.params.id)
    if (novel) {
        const newChapter = {
            chapter: (novel.allChapter.length + 1).toString(),
            name: req.body.name,
            detail: req.body.detail,
            price: req.body.price,
            viewers: 0
        }
        novel.allChapter.push(newChapter)
        const updateChap = await novel.save()
        res.send({ data: updateChap.allChapter[updateChap.allChapter.length - 1], message: "OK" })
    } else {
        res.send({ message: "Novel Not Found" })
    }
});

export default novelRouter;