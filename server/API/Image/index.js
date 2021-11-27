//AWS IS STORAGE
/**
 * USER UPLOAD THE PHOTO
 * IT SAVE S3 BUGET AND ITS RETRUN US WITH URL AND PUBLIC
 * AND SAVE THE URL IN MONGODB
 */

// library
 
import express from "express";
import multer from "multer"; // using upload the image

// database model

import {ImageModel} from "../../database/image/index.js"
const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

// utility function

import {s3Upload} from "../../utils/s3.js";

 /**
 * Router    /
 * Des        upload given image  to s3 bucket and save file link tomangoDb
 * Params     _id
 * access     public
 * method     POST
 */

 Router.post("/", upload.single('file'),async(req,res) => {  // multiple upload.array change file as files
     try{
        const file = req.file;
        
        // s3 bucket options

        const bucketOption = {
            Bucket:"zomatomasterabi",
            Key:file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL:"public-read", // access control list

        };     
        const uploadImage = await s3Upload(bucketOption);

        const saveImageToDatabase = await ImageModel.create({
            images:[{location: uploadImage.location}],
        });      
        
        return res.status(200).json({saveImageToDatabase});  
     } catch(error)
     {
        return res.status(500).json({error: error.message});
     }
 })

 export default Router;


