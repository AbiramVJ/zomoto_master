// library
import  express  from "express";

// database Model

import {MenuModel} from "../../database/menu/index.js";
 import {ImageModel} from "../../database/image/index.js";

const Router = express.Router();


 /**
 * Router    /List
 * Des        GET all list of menu based on restaurant id
 * Params     _id
 * access     public
 * method     GET
 * http://localhost:4000/list/:_id
 */

 Router.get("/list/:_id",async(req,res)=>{
     try{

        const {_id} = req.params;
        const menus = await MenuModel.findById({_id:_id});

        if(!menus){
             res.status(404).json({error: "no menu present for this restaurant"});
        }
        return res.json({menus});

     }catch(error){
         return res.status(500).json({error: error.message})
     }
 })

/**
 * Route        /image
 * Des          GET all list of menu images with restaurant id
 * Params       _id
 * Access       Public
 * Method       GET
 */
 Router.get("/image/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const menuImages = await ImageModel.findOne(_id);
  
      //TODO: vaildate if the images are present or not, throw error if not present
  
      return res.json({ menuImages });
    } catch (error) {
      return res.status(500).json({ error: "image not found" });
    }
  });
export default Router;