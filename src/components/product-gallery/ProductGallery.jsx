import ProductCard from "../product-card/ProductCard"
import "./ProductGallery.css"
import { useEffect, useState } from "react"
import axios from "axios"

const URL= "https://66cd01308ca9aa6c8cc93b19.mockapi.io/api/v1";

export default function ProductGallery() {

    const [products, setProducts]= useState([])

    useEffect(()=>{
        getProducts()
    }, [])

    async function getProducts() {
        try {
            const response = await axios.get(`${URL}/products`)
            setProducts(response.data)

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
                    products.map(producto => (<ProductCard  key={producto.id} prod={producto} />))
                }
                
            </div>


        </section>

    )
}
