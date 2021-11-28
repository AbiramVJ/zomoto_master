

// LIBRARY
import express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';



//database connection
import ConnectDB from "./database/connection.js";
//google authentication
import googlAutheConfig from "./config/google.config.js";
// private route authentication config
import privateRouteConfig from "./config/route.config.js";

//use
const zomoto = express();
zomoto.use(cors());
zomoto.use(express.json()); 
zomoto.use(helmet());
zomoto.use(passport.initialize());
// zomoto.use(passport.session());
//passoword config
googlAutheConfig(passport);
privateRouteConfig(passport);

// API
 import Auth from "./API/Auth/index.js";
 import Restaurant from "./API/Restaurant/index.js";
 import Food from "./API/Food/insex.js";
 import Menu from "./API/menu/index.js";
 import Image from "./API/Image/index.js"; //image API
 import Order from "./API/orders/index.js";
 import Review from "./API/review/index.js";
 import User from "./API/user/index.js";

 


// Application Routes
zomoto.use("/auth",Auth);
zomoto.use("/restaurant",Restaurant);
zomoto.use("/food",Food);
zomoto.use("/menu",Menu);
zomoto.use("/image",Image); // image API
zomoto.use("/order",Order); 
zomoto.use("/review",Review); 
zomoto.use("/user",User); 




// Server connection port
zomoto.listen(4000, () => {

  ConnectDB()
  .then(()=>{
    console.log("CONNECTED SUCCESFULLY");

  })
  .catch((error)=>{
    console.log("server is running but database not conected");
    console.log(error);
    



  })
  
});
