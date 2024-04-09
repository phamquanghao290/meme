import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
import SignUp from './page/SignUp/SignUp'
import Index from './page/home/Index'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Index />} />
    </Routes>
  )
}

export default App
