// library
import express from "express";
import passport from "passport";

// validation
import { ValidatedSignin, ValidatingSignup } from "../../validation/auth.js";

// // Models
 import {UserModel} from "../../database/user/index.js";

// create a rotes
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
        await ValidatingSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const  newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({token, status:"success"});

    }catch(error){

        return res.status(500).json({error: error.message});     
    }
    
});

/**
 * Router    /signin
 * Des        Sign-in with email and password
 * Params     none
 * access     public
 * method     POST
 */

Router.post("/signin",async(req,res)=>{
    try{
        await ValidatedSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token, status:"success"})

    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
 * Router    /signin
 * Des        Google signin
 * Params     none
 * access     public
 * method     GET
 */

Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}))

/**
 * Router    /google/callback
 * Des        Google signin callback
 * Params     none
 * access     public
 * method     GET
 */

Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
    (req,res)=>{
        return res.redirect(
            `http://localhost:3000/google/${req.session.passport.user.token}`
        );
    }
);

export default Router;