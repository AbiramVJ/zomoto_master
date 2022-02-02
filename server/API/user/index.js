// library
import express from "express";
import passport from "passport";


//database model

import {UserModel} from "../../database/user/index.js";
const Router = express.Router();



/**
 * Router    /:_id
 * Des        GET user Data
 * Params     _id
 * access     public
 * method     GET
 */

Router.get("/:_id",async(req,res)=>{
    try{

        const{_id}= req.params;
        
        const getUser = await UserModel.findById(_id);
        
        const {fullName} = getUser;
        if(!getUser){
           
            return res.status(404).json({error: "user not found"});
        }
        return res.json({user:{fullName}});

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});

/**
 * Router    /update
 * Des        UPDATE user data
 * Params     _id
 * access     private
 * method     PUT
 */
 Router.put("/update/:userId",async(req,res)=>{
    try{

       const{userId}= req.params;

       const{userData} = req.body;

       const updateUserData = await UserModel.findByIdAndUpdate(
           userId,
           {
                $set: userData,
           },
           {
               new: true,
           }
       );

       return res.json({user: updateUserData});

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});

/**
 * Route        /
 * Des          GET authorized user data
 * Params       none
 * Access       Public
 * Method       GET
 */
 Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } =
        req.session.passport.user._doc;
  
      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch {
      return res.status(500).json({ error: error.message });
    }
  });


export default Router;