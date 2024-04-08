import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/cart'  />
    </Routes>
  )
}

export default App
