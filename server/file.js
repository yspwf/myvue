let file = function(){
    return async (ctx, next)=>{

        await upload();
        
        //console.log("33333333333");

        await next();
    }
}

let upload = function(){
    return new Promise((resolve, reject) => {
        resolve("234234");
    });
}


module.exports = file;