
import AWS from "aws-sdk";
// aws s3 bucket
const s3Bucket = new AWS.S3({
    accessKeyId:'AKIAT6UJ7IO2EBX63QMM',
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

