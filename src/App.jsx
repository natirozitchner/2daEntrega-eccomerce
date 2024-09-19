import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/header/Header";
import AboutUs from "./pages/about us/AboutUs";
import AdminProduct from "./pages/admin-product/AdminProduct";
import ProductDetail from "./pages/product-detail/ProductDetail";
import OrderDialog from "./components/order-dialog/OrderDialog";
import AdminUser from "./pages/admin-users/AdminUser";
import Registro from "./pages/registro/Registro";


export default function App() {
  

  return (
    <>

    <OrderDialog/>

    <Header/> 

    <main>
      <Routes>

        <Route path="/" element={ <Home/>} />

        <Route path="/product-detail/:id" element={<ProductDetail/>} />

        <Route path="/contact" element={ <Contact/>} />

        <Route path="/about us" element={<AboutUs/>} />

        <Route path="/registro" element={<Registro/>} />

        <Route path="/admin-product" element={<AdminProduct/>} />

        <Route path="/admin-users" element={<AdminUser/>} />

      </Routes>
    </main>

    <Footer/>
    </>
  
  )
}
