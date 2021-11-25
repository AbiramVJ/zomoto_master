

// LIBRARY
import express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';



//database connection
import ConnectDB from "./database/connection.js";
//google authentication
import googlAutheConfig from "./config/google.config.js";

//use
const zomoto = express();
zomoto.use(cors());
zomoto.use(express.json()); 
zomoto.use(helmet());
zomoto.use(passport.initialize());
zomoto.use(passport.session());

googlAutheConfig(passport);

// API
 import Auth from "./API/Auth/index.js";
 


// Application Routes
zomoto.use("/auth",Auth);



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
