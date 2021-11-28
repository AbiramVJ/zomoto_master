// library
import  express  from "express";
// validation

import { ValidateCategory, ValidateId } from "../../validation/common.js";

// data model

import {FoodModel} from "../../database/food/index.js"


//route
 const Router = express.Router();

 /**
 * Router    /r/:_id
 * Des        GET all food based on particular restaurant
 * access     public
 * method     GET
 * http://localhost:4000/r/:_id
 */

 Router.get('/r/:_id', async(req,res)=>{
     try{

        await ValidateId(req.params);
         const{_id} = req.params;
         const foods = await FoodModel.find({restaurant: _id});
         return res.json({foods});

     }catch(error){
         return res.status(500).json({ error: error.message});

     }
 });

  /**
 * Router    /c/:category
 * Des        GET all food on  based on category
 * Params     none
 * access     public
 * method     GET
 * http://localhost:4000/c/:category
 */

  Router.get("/c/:category",async(req,res) => {
    try{
        await ValidateCategory(req.params);
        const{category}= req.params;
        const foods = await FoodModel.find({
            name: {$regex: category, $option:"i"},
        });
       

        if(!foods)
          return res.status(400).json({error:`Restaurant Not Found ${category}`});
          return res.json({foods});
    }catch(error){
        return res.status(500).json({error:error.message});
        
    }

} );


  export default Router;
