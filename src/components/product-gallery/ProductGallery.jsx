import ProductCard from "../product-card/ProductCard"
import "./ProductGallery.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../pagination/Pagination";

const URL= "https://66cd01308ca9aa6c8cc93b19.mockapi.io/api/v1";

export default function ProductGallery() {

    const [products, setProducts]= useState([])

    const [limit, setLimit] = useState(3);
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        getProducts()
    }, [limit])

    async function getProducts() {
        try {
            const response = await axios.get(`${URL}/products?skip=${skip}&limit=${limit}`)
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

            <Pagination total={total} limit={limit} getFn={getProducts} />

            <select onChange={(evt)=> setLimit(evt.target.value)}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
            </select>


        </section>

    )
}
