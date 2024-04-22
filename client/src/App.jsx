import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Cart from "./page/cart/Cart";
import NotFound from "./page/notfound/NotFound";
import SignUp from "./page/SignUp/SignUp";
import Index from "./page/home/Index";
import Heatder from "./components/Heatder/Heatder";
import Footer from "./components/Foodter/Footer";
import SignIn from "./page/SignIn/SignInPage";
import ProductWomen from "./page/product/ProductWomen";
import CheckoutForBill from "./page/checkout/CheckoutForBill";
import Wishlist from "./page/wishlist/Wishlist";
import Productdetail from "./page/Productdetail/Productdetail";
import MyInfo from "./page/myinfo/MyInfo";
import DeliveryAddress from "./page/DeliveryAddress/DeliveryAddress";
import Order from "./page/Order/Order";
import Admin from "./admin/Admin";
import AdminCategory from "./admin/AdminCategory";
import AdminProduct from "./admin/AdminProduct";
import AdminUser from "./admin/AdminUser";
import AdminBanner from "./admin/AdminBanner";
import AdminBill from "./admin/AdminBill";
import AdminBrand from "./admin/AdminBrand";
import Verification from "./page/Verification/Verification";
import ResetPassword from "./page/ResetPassword/ResetPassword";
import PrivateRouter from "./page/flaguser/PrivateRouter";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Heatder />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<Index />} />
        <Route path="/product-women" element={<ProductWomen />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/:id" element={<CheckoutForBill />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product-detail/:id" element={<Productdetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/delivery-address" element={<DeliveryAddress />} />
      </Route>

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/forgot-password" element={<ResetPassword />} />

      <Route
        path="/admin"
        element={
          <div style={{ display: "flex" }}>
            <Admin />
            <div style={{ width: "100%" }}>
              <PrivateRouter>
                <Outlet />
              </PrivateRouter>
            </div>
          </div>
        }
      >
        <Route path="/admin" element={<AdminUser />} />
        <Route path="admin-product" element={<AdminProduct />} />
        <Route path="admin-category" element={<AdminCategory />} />
        <Route path="admin-bill" element={<AdminBill />} />
        <Route path="admin-banner" element={<AdminBanner />} />
        <Route path="admin-brand" element={<AdminBrand />} />
      </Route>
    </Routes>
  );
}

export default App;
