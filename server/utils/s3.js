
import AWS from "aws-sdk";
// aws s3 bucket
const s3Bucket = new AWS.S3({
    accessKeyId:'AKIAS2KUM2FU4TJUJF7N',
    secretAccessKey:'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',
    region: "ap-south-1",
});

export const s3Upload = (options) => {
    return new Promise((resolve,reject) => s3Bucket.upload(options,(error,data)=>{
        if(error) return reject(error);
         return resolve(data);
    })
    );
};

