// library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// // Models
 import {UserModel} from "../../database/user/index.js";

// create a roter
const Router = express.Router();

/**
 * Router    /signup
 * Des        Register new User
 * Params     none
 * access     public
 * method     POST
 */

Router.post("/signup", async(req,res)=>{
    try{
        const { fullname,email, password, phoneNumber }= req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone ){
            return res.json({user: "user alredy exists"});
        }

        // hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        const  hashedPassword= await bcrypt.hash(password,bcryptSalt);

        // save data to database
        await UserModel.create({...req.body.credentials, password:hashedPassword});

        // generate JWT auth token 
        const token = jwt.sign({user:{fullname, email}},"ZomatoApp");
        return res.status(200).json({token, status:"success"});

    }catch(error){
        return res.status(500).json({error: error.message});
        
    }
    
})
export default Router;