const msg=function message(){
    console.log("welcome to function expression");
};
msg();


const sum=function(num1, num2){
    let sum=num1+num2;
    console.log("sum=",sum);
}
sum(23,45);
const mul=function(num1, num2){
    let mul=num1*num2;
    console.log("Multiply=",mul);
}
mul(23,45);

const div=(num1,num2)=>{
    console.log("divide=",num1/num2);
};
div(23,45);