import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/loginpopup/LoginPopUp'
import Verify from './pages/verify/Verify.jsx'
import Myorders from './pages/myorders/Myorders.jsx'
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Placeorder/>}></Route>
        <Route path='/verify' element={<Verify/>}></Route>
        <Route path='/myorders'element={<Myorders/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
