import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
import SignUp from './page/SignUp/SignUp'
import Index from './page/home/Index'

import Wishlist from './page/wishlist/Wishlist'
import Heatder from './components/Heatder/Heatder'
import Footer from './components/Footer/Footer'
import Index from "./page/home/Index";
import SignIn from './page/SignIn/SignInPage'
import ProductWomen from './page/product/ProductWomen'
import ProductMen from './page/product/ProductMen'

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Heatder /><Outlet /><Footer /></>}>
        <Route path='/' element={<Index />} />
        <Route path='/productWomen' element={<ProductWomen />} />
        <Route path='/productMen' element={<ProductMen />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        
      </Route>
      
      <Route path='/signup' element={<SignUp />} />

      <Route path='/home' element={<Index />} />
      <Route path='/wishlist' element={<Wishlist />} />

      <Route path='/signin' element={<SignIn />} />
    </Routes>
  )
}

export default App
