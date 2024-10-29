import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about us/AboutUs";
import AdminProduct from "./pages/admin-product/AdminProduct";
import ProductDetail from "./pages/product-detail/ProductDetail";
import AdminUser from "./pages/admin-users/AdminUser";
import Registro from "./pages/registro/Registro";
import Login from "./pages/login/Login"
import Layout from "./layout/Layout";
import AdminGuard from "./services/guard/AdminGuard";



export default function App() {


  return (
    <>



      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about us" element={<AboutUs />} />
          <Route path="registro" element={<Registro />} />

          <Route path="admin-product" element={
            <AdminGuard>
              <AdminProduct />
            </AdminGuard>
          } />

          <Route path="admin-users" element={
            <AdminGuard>
              <AdminUser />
            </AdminGuard>
          } />

          <Route path="*" element={<h1>Not found</h1>} />

        </Route>

      </Routes>

    </>

  )
}
