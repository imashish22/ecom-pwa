import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'


function App() {


  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products/>} />
           <Route path='/cart' element={<Cart/>} />
        {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </Router>

    </>
  )
}

export default App
