import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Cart from './page/cart/Cart'
import NotFound from './page/notfound/NotFound'
import SignUp from './page/SignUp/SignUp'
import Index from './page/home/Index'
import Heatder from './components/Heatder/Heatder'
import Footer from './components/Foodter/Footer'
import SignIn from './page/SignIn/SignInPage'
import ProductWomen from './page/product/ProductWomen'
import ProductMen from './page/product/ProductMen'
import CheckoutForBill from './page/checkout/CheckoutForBill'
import Wishlist from "./page/wishlist/Wishlist";
import Productdetail from './page/Productdetail/Productdetail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Heatder /><Outlet /><Footer /></>}>
        <Route path='/' element={<Index />} />
        <Route path='/productWomen' element={<ProductWomen />} />
        <Route path='/productMen' element={<ProductMen />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckoutForBill />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/Productdetail" element={<Productdetail />} />
      </Route>
      
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;
