//using array
const data=[10,20,30,40];
let[x,y,z,w]=data;
//let x=data[0];
//let y=data[1];
//let z=data[2];
//let w=data[3];
console.log(x,y,z,w);


//using object
const studentInfo={
    name:"ravi",
    course:"MCA",
    rollno:1
}
//let{name,course,rollno}=studentInfo;
//console.log(name,course,rollno);
let {name:sname,course:mycourse,rollno:rno}=studentInfo;
console.log(sname,mycourse,rno);