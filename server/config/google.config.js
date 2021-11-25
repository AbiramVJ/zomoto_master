//library

import passport from 'passport';
import googleOAuth from 'passport-google-oauth20';
import {UserModel} from "../database/user/index.js";


const GoogleStrategy = googleOAuth.Strategy;

export default(passport)=>{
    passport.use(
        new GoogleStrategy(
            {
                clientID:'866547995561-48t648if0m8h3e9p8us0c8uolnpevc6j.apps.googleusercontent.com',
                clientSecret:'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',
                callbackURL:"http://localhost:4000/auth/google/callback",
            },
            // recive acceess token data 
            async(accessToken,refreshToken,profile,done)=>{
                const newUser={
                    fullName:profile.displayName,
                    email:profile.emails[0].value,
                    profilePic:profile.photos[0].value,
                };
                try{
                        //  check if the users exist
                    const user = await UserModel.findOne({email:newUser.email});
                    if(user){
                        // genarate token
                        const token = user.generateJwtToken();
                        // return user
                        done(null,{user, token});
                    } else{
                        // create new user
                        const user = await UserModel.create(newUser);

                        // generate token
                        const token = user.generateJwtToken();

                        
                        // return user
                            done(null,{user, token});
                    }

                } catch(error){
                    done(error,null);

                }
            }
        )
    )

    passport.serializeUser((userData, done) => done(null,{...userData}));
    passport.deserializeUser((id,done) => done(null, id));
};