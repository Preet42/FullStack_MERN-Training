const msg=()=>console.log("arrow function");
let data=[10,20,50,60.56,70.2,"kiet",msg];
console.log(data);
data[6]();

//for(let i=0;i<data.length;i++){
//    console.log(`value of ${i}is ${data[i]}`);
//}
//for(let index in data){
//   console.log(`value of ${index} is ${data[index]}`);
//}
//for(let value of data){
//    console.log(`value of array=${value}`);
//}

data.forEach(value=>console.log(`value of array=${value}`));