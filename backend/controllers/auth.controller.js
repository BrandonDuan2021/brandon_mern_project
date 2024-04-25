import User from "../models/user.model.js";
import bcrytjs from 'bcryptjs';

export const signUp = async (req, res, next)=>{
    try{
    console.log(req.body)
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