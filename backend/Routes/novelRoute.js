import Novel from "../Models/novelModel.js"
import express from "express";

const novelRouter = express.Router();

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

export default novelRouter;