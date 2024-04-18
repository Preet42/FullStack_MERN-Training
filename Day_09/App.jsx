//import './App.css';
//import Languages from './component/Languages';
//import Message from "./component/Message";
//import Counter from "./component/Counter";
//import Counter from "./component/Counter";
//import { useState } from "react";
//import ChangeName from "./component/ChangeName";
//import ControlledInfo from "./component/ControlledInfo";
import Mycounter from "./component/Mycounter";
//import Mycard from "./component/Mycard";

function App() {
  // const [name,setName]=useState("KIET");
  // const [sname,setSName]=useState("MCA");

  return (
    <>
      {/* <Counter/> */}
      {/* <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
      <ChangeName name={sname} onUpdate={()=>setSName("KIET MCA")}/> */}

      {/* props */}
      <Mycounter/>
    </>
  );
}

export default App
