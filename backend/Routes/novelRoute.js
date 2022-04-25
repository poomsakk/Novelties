import Novel from "../Models/novelModel.js"
import Writer from "../Models/writerModel.js"
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
        name: req.body.novelName,
        category: req.body.category,
        image: req.body.image,
        writerId: req.body.writerid,
        title: req.body.title
    });
    try {
        //save novel
        const create = await novel.save();
        //add novel in writer collections
        const writer = await Writer.findById(req.body.writerid)
        const novell = { novelId: String(create._id) }
        writer.ownNovel.push(novell)
        await writer.save()
        create ? res.json({ message: "OK" }) : res.json({ message: "CREATE FAIL" });
    } catch (err) {
        res.send({ err });
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

novelRouter.post('/:id/getchapter/:chapid', async (req, res) => {
    const novel = await Novel.findById(req.params.id)
    if (novel) {
        const chap = novel.allChapter.find((chap) => chap._id.toString() === req.params.chapid)
        if (chap === undefined) {
            res.send({ message: "Chapter Not Found" })
        } else {
            res.send({
                message: "OK",
                chapter: chap.chapter,
                name: chap.name,
                detail: chap.detail,
                price: chap.price,
                viewers: chap.viewers
            })
        }
    } else {
        res.send({ message: "Novel Not Found" })
    }
})

export default novelRouter;