import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);


export default function OrderProvider({ children }) {

    const [count, setCount] = useState(0)
    const [order, setOrder] = useState([]);
    const [toggleModal, setToggleModal] = useState(false)
    const [total, setTotal] = useState(0);

    useEffect(() => {

        calculateCount()

        calculateTotal()

    }, [order])

    function addProduct(product) {

        console.log("Add product", product.name);

        const productExists = order.find(prod => prod.id === product.id)

        if (productExists) {

            productExists.quantity++

            setOrder([...order])

        } else {
            product.quantity = 1
            setOrder([...order, product]);
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            padding: ".5rem",
            title: "Producto agregado con éxito",
            width: "320px",
            timer: "1500"
        })

    }

    function calculateCount() {
        let cantItems = 0;

        for (let item of order) {
            cantItems += item.quantity
        }
        setCount(cantItems)

    }

    function calculateTotal() {
        let total = 0;
        order.forEach(item => {
            total += (item.price * item.quantity)
        })
        setTotal(total)
    }


    function removeItemOrder(id) {

        const indice = order.findIndex(prod => prod.id === id)
        const orderCopy = [...order]

        orderCopy.splice(indice, 1)

        setOrder(orderCopy)
    }

    function changeCantItem (id, cant) {

        const newOrder =  order.map(prod=> {
            if (prod.id===id) {
                prod.quantity = cant
            }

            return prod
        })

        setOrder(newOrder)

    }


    return (
        <OrderContext.Provider
            value={{
                order,
                addProduct,
                toggleModal,
                setToggleModal,
                count,
                total,
                removeItemOrder,
                changeCantItem
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}
