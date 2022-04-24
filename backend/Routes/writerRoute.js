import express from 'express';
import Writer from '../Models/writerModel.js';
import Novel from "../Models/novelModel.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const writerRouter = express.Router();

const generatePassword = async (password) => {
    const passwordHashed = await bcrypt.hashSync(password, 10);
    return passwordHashed;
}

writerRouter.post('/register', async (req, res) => {
    const user = new Writer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        //check is this email have in DB
        const userCheck = await Writer.findOne({ email: user.email });
        if (userCheck) {
            return res.json({ message: "THIS EMAIL ALREADY EXIST" });
        }
        //encrypt password
        user.password = await generatePassword(user.password);
        const create = await user.save();
        create ? res.json({ message: "OK" }) : res.json({ message: "CREATE FAIL" });
    } catch (err) {
        res.json({ message: err });
    }
});

writerRouter.post('/login', async (req, res) => {
    const user = await Writer.findOne({
        email: req.body.email,
    });
    if (user) {
        const checkPassword = bcrypt.compareSync(req.body.password, user.password);
        if (checkPassword) {
            res.json({
                message: "OK",
                _id: user.id,
                name: user.name,
                email: user.email,
                ownNovel: user.ownNovel,
                token: jwt.sign({ name: user.name, email: user.email, id: user._id }, "Secret", { expiresIn: "2d" })
            });
        }
        else {
            return res.status(401).json({ message: 'Please check your username and password' });
        }
    } else {
        res.status(401).json({ message: 'Please check your username and password' });
    }
});

writerRouter.post('/getnovel', async (req, res) => {
    const novels = await Novel.find({ writerId: req.body.writerid })
    res.json({ data: novels });
});

export default writerRouter;