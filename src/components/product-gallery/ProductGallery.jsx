import ProductCard from "../product-card/ProductCard"
import "./ProductGallery.css"
import { useEffect, useState } from "react"
import axios from "axios"



const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductGallery() {

    const [products, setProducts]= useState([])


    useEffect(()=>{
        getProducts()
    }, [])

    async function getProducts() {
        try {
            const response = await axios.get(`${URL}/products?`)
            setProducts(response.data.products)

        } catch (error) {
            alert("Error al obtener productos")
            console.log(error)
        }
    }


    return (
        <section className="product-section">

            <h1 className="title-product">
                PRODUCTOS
            </h1>

            <div className="container-card">

                {
                    products.map(producto => (<ProductCard  key={producto._id} prod={producto} />))
                }
                
            </div>


        </section>

    )
}
