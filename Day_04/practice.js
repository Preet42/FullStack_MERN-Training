// function div(num1,num2){
//     let div=num1/num2;
//     console.log("divide=",div);
// };

// div(23,45);
// const sub=function(num1,num2){
//     let sub=num1-num2;
//     console.log("sub=",sub);
// };
// sub(23,45);
// const mul=function(num1,num2){
//     let mul=num1*num2;
//     console.log("mul=",mul);
// };
// mul(12,45);
// //using for loop
// for(let i=0;i<10;i++){
//     console.log("value of i=",i);
// }

// let value=[1,2,3,4,5,6,7,8,9,10];
// let oddNum=value.filter(item=>item%2!=0);
// console.log(oddNum);

// let a="25";
// let b="10";
// if(a<b){
//     console.log("A is smaller");
// }
// else{
//     console.log("B is smaller");
// }
// //In standard Way
// (a<b)?console.log("A is smaller"):console.log("B is smaller");

function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  };
console.log(findGreaterNumber(10, 15));