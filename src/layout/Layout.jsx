import { Outlet } from "react-router-dom";
import OrderDialog from "../components/order-dialog/OrderDialog";
import Footer from "./Footer/Footer";
import Header from "./header/Header";


export default function Layout() {
    return (
        <>
            <OrderDialog />
            <Header />
            <main>
                <Outlet/>
            </main>

            <Footer />

        </>
    )
}
