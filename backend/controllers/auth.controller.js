import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrytjs from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next)=>{
    try{
        const { username, email, password } = req.body;
        const hashedPwd = bcrytjs.hashSync(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashedPwd
        })
            await newUser.save()
            res.status(200).json('User created successfully!')
    } catch(e){
        next(e)
    }

}

export const signIn = async (req, res, next)=>{
    try{
        const { email, password } = req.body;
        const validUser = await User.findOne({ email }) 
        if (! validUser) return next(errorHandler(404, "User is not found."))
        const validPassword = bcrytjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, "The email and password you provided is not correct. Please try again."))
        const {password: pass, ...rest} = validUser._doc
        const token = jwt.sign({
            id: validUser._id
        },
        process.env.JWT_SECRET_KEY)

        res.cookie('token', token).status(200).json(rest)
    } catch(e){
        next(e)
    }

}
