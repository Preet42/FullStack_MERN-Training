let age=2;
const info=new Promise((resolve,reject)=>{

    if(age>=18){
        resolve("You can Vote");
    }
    else{
        reject("You can't Vote");
    }
})
//console.log(info);
info.then(result=>console.log(result))//used when resolve is used
.catch(error=>console.log(error));//used when reject is used
const resultInfo=async ()=>{
    try{
        let result=await info;
        console.log(result);
    } catch(error){
        console.log(error);
    }}
    resultInfo();
