// library
import  express  from "express";
import passport from "passport";
// import Jwt from "passport-jwt";

// database model
import {OrderModel} from "../../database/order/index.js";

import validateUser from "../../config/validateUser.js";

const Router = express.Router();

/**
 * Router    /
 * Des        GET the all order based in id
 * Params     _id
 * access     private
 * method     GET
 */

 Router.get("/:_id", passport.authenticate("jwt"), async (req, res) => {
    try {
      await validateUser(req, res);
      const { _id } = req.params;
  
      const getOrders = await OrderModel.findOne({ user: _id });
  
      if (!getOrders) {
        return res.status(400).json({ error: "order not found" });
      }
  
      return res.status(200).json({ orders: getOrders });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


/**
 * Router    /new
 * Des        Add new Order
 * Params     _id
 * access     private
 * method     POST
 */

Router.post("/new/:_id", passport.authenticate("jwt"),async(req,res)=>{

    const {_id}= req.params;
    const {orderDetails}= req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate({
        user: _id,

    },{
        $push: {orderDetails}
    },
    {
        new:true
    }
    
    );

    return res.json({order: addNewOrder});

})

export default Router;