import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
import Index from './page/home/Index'
import Header from './components/Heatder/Heatder'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <Routes>
      <Route path='/' element={<><Header /><Outlet /><Footer /></>} >
        <Route path='/' element={<Index />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
