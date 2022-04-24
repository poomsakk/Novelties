import express from 'express';
import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRouter = express.Router();

const generatePassword = async (password) => {
    const passwordHashed = await bcrypt.hashSync(password, 10);
    return passwordHashed;
}

userRouter.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        //check is this email have in DB
        const userCheck = await User.findOne({ email: user.email });
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

userRouter.post('/login', async (req, res) => {
    const user = await User.findOne({
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
                isAdmin: user.isAdmin,
                favorite: user.favorite,
                ownChap: user.ownChap,
                coin: user.coin,
                rating: user.rating,
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

userRouter.post('/addFav', async (req, res) => {
    const userr = await User.findById(req.body.userid)
    if (userr) {
        const newFav = {
            novelId: req.body.novelid,
            name: req.body.novelname
        }
        userr.favorite.push(newFav)
        await userr.save()
        res.send({ message: "OK" })
    } else {
        res.send({ message: "User Not Found" })
    }
});

userRouter.post('/addNov', async (req, res) => {
    const userr = await User.findById(req.body.userid)
    if (userr) {
        try {
            const currentTimeAsMs = Date.now();
            const adjustedTimeAsMs = currentTimeAsMs + (1000 * 60 * 60 * 24 * 30);
            const exp = new Date(adjustedTimeAsMs);
            const novel = {
                chapId: req.body.chapid,
                expDate: exp
            }
            userr.ownChap.push(novel)
            await userr.save()
            res.send({ message: "OK" })
        } catch (err) {
            res.send({ err })
        }
    } else {
        res.send({ message: "User Not Found" })
    }
});

export default userRouter;