import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";
import {useUser} from './UserContext'
import axios from "axios";

const OrderContext = createContext();

const URL = import.meta.env.VITE_LOCAL_SERVER

export const useOrder = () => useContext(OrderContext);


export default function OrderProvider({ children }) {

    const {user} = useUser()

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

        const productExists = order.find(prod => prod._id === product._id)

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


    function removeItemOrder(_id) {

        const indice = order.findIndex(prod => prod._id === _id)
        const orderCopy = [...order]

        orderCopy.splice(indice, 1)

        setOrder(orderCopy)
    }

    function changeCantItem (_id, cant) {

        const newOrder =  order.map(prod=> {
            if (prod._id===_id) {
                prod.quantity = cant
            }

            return prod
        })

        setOrder(newOrder)

    }

    async function createOrder() {

        try {

            if(!user?._id) {
                alert("Necesitas iniciar sesión para crear una orden")
                return
            }
            const products = order.map(prod => {
                return {
                    product: prod._id,
                    quantity: prod.quantity,
                    price: prod.price
                }
            })
    
            await axios.post(`${URL}/orders`, {
                products, user: user._id, total
            })

            Swal.fire({
                icon: "success",
                title: "Orden creada",
                timer: 1500
            })


    
        } catch (error) {
            console.log(error)
            alert ("Error al crear la orden")
        }
        
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
                changeCantItem,
                createOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}
