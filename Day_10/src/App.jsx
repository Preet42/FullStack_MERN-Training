//import { useState } from 'react'
//import './App.css'
import Mycounter from './component/Mycounter'
import Mycard from './component/Mycard'
import { Route,Routes } from 'react-router-dom'
import HomePage from './component/HomePage'
import NavBar from './component/NavBar'
import ErrorPage from './component/ErrorPage'
import About from './component/About'
import Product from './component/Product'
import Product1 from './component/Product1'
import Product2 from './component/Product2'
import Product3 from './component/Product3'
import Student from './component/Student'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Mycounter/> */}
      {/* <Mycard/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/card" element={<Mycard />}/>
        <Route path="/counter" element={<Mycounter/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/student' element={<Student/>}>
          <Route path='/student/:name' element={<Student />}/>
        </Route>

        <Route path='/product' element={<Product/>}>
        <Route path='product1' element={<Product1/>}/>
        <Route path='product2' element={<Product2/>}/>
        <Route path='product3' element={<Product3/>}/>
        </Route>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App