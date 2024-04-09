import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
import SignUp from './page/SignUp/SignUp'
import Index from './page/home/Index'
import Wishlist from './page/wishlist/Wishlist'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Index />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  )
}

export default App
