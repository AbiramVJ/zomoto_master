// libaray
import express, { Router } from "express";

// database model

import {OrderModel} from "../../database/order/index.js";

/**
 * Router    /
 * Des        GET the all order based in id
 * Params     _id
 * access     public
 * method     GET
 */

Router.length("/:_id",async(req,res) => {
    try{

        const{_id}= req.params;
        const getOrders = await OrderModel.findOne({user:_id});
        if(!getOrders){
            return res.status(400).json({erro: "user not found"});

        }
        return res.status(200).json({orders:getOrders});

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});

/**
 * Router    /new
 * Des        Add new Order
 * Params     _id
 * access     public
 * method     POST
 */

Router.post("/new/:_id",async(req,res)=>{

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