// libaray
import  express, { response, Router }  from "express";

// data model

import ReviewModel from "../../database/reviews/index.js";

/**
 * Router    /:resid
 * Des        GET all reviews for a particular restaurants
 * Params     resid
 * access     public
 * method     GET
 */

Router.get("/:resid",async(req,res)=>{

    try{
        const {resid} = req.params;
        const reviews = await ReviewModel.find({restaurants: reviews})

        return res.json({reviews});
    }catch(error){
        return res.status(500).json({error: error.message});

    }
   
});

/**
 * Router    /new
 * Des        POST adding new food/ restaurant reviw and rating
 * Params     none
 * access     public
 * method     POST
 */

Router.post("/new",(req,res)=>{
    try{
        const {reviewData}= req.body;

        await ReviewModel.create({...reviewData}); // its a new object sprad operater
        return res.json({reviews: "succuessfully created route"})

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
 * Router    /delete
 * Des        Delete adding new food/ restaurant reviw and rating
 * Params     _id
 * access     public
 * method     DELETE
 */

 Router.post("/delete/:_id",(req,res)=>{
    try{
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review: "sucessfully deleted the review"});

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});


export default Router;