import  mongoose  from "mongoose";
//const mongoDB ="mongodb+srv://AdityaGusain:AdityaGusain@zomato-master.3flxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const mongoDB ="mongodb+srv://abiram586:abiram586@cluster0.bzxoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
import dotenv from "dotenv";
dotenv.config();
const mongoDB =process.env.MONGO_URL;
export default async()=>{
    return mongoose.connect( mongoDB, { 
         useNewUrlParser: true,
         useUnifiedTopology: true,
         
        });
  
}


