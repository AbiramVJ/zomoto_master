import Mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const userSchema = new Mongoose.Schema({
    fullname:{type:String,require:true},
    email:{type:String, require:true},
    password:{type:String},
    address:[{detail:{type:String}, for:{type:String}}],
    phoneNumber: [{type: Number}],


},
{
    timestamps:true,
});

//statics AND method
    userSchema.methods.generateJwtToken = function(){
    return jwt.sign({user:this._id.toString()},"ZomatoAPP");
}

userSchema.statics.findByEmailAndPhone = async({email, phoneNumber})=>{
        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone ){
            throw new Error ("user alredy exists");
        }
        return false;
};

userSchema.statics.findByEmailAndPassword = async({email, password})=>{
    const user= await UserModel.findOne({email});
    if(!user) throw new Error("user dose not exists!!");

    const doesPasswordMatch= await bcrypt.compare(password, user.password);
    if(!doesPasswordMatch) throw new Error("invalid password!!!");
    return user;
};


userSchema.pre("save",function(next){
    const user = this;

    //password is modified

    if(!user.isModified("password")) return next();

    //genarate bcrypt
    bcrypt.genSalt(8,(error, salt)=>{
        if(error) return next(error);

        // hash the password
        bcrypt.hash(user.password, salt,(error,hash)=>{
            if(error) return next(error);
            
            // assign hashed password
            user.password = hash;
            return next();
        })
    })
})

//static
export const UserModel = Mongoose.model("users",userSchema);


