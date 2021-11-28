import joi from "joi";

export const ValidatingSignup = (userData)=>{
    const  Schema = joi.object({


        fullname: joi.string().min(5).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(5),
        address: joi.array().items(joi.object({detail: joi.string(),for:joi.string()})),
        phoneNumber:joi.number().min(10).required(),
    });

    return Schema.validateAsync(userData);
}

export const ValidatedSignin = (userData)=>{
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });

    return Schema.validateAsync(userData);
}