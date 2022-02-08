import  mongoose  from "mongoose";
//const mongoDB ="mongodb+srv://AdityaGusain:AdityaGusain@zomato-master.3flxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoDB ="mongodb+srv://abiram586:abiram586@cluster0.bzxoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
export default async()=>{
    return mongoose.connect( mongoDB, { 
         useNewUrlParser: true,
         useUnifiedTopology: true,
         
        });
  
}


