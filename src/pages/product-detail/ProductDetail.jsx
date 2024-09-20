import { useParams } from "react-router-dom"
import "./ProductDetail.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useOrder } from "../../context/OrderContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const URL = "https://66cd01308ca9aa6c8cc93b19.mockapi.io/api/v1";

export default function ProductDetail() {
  const { addProduct } = useOrder()

  const { id } = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    getProduct()
  }, [])

  async function getProduct() {
    try {
      const response = await axios.get(`${URL}/products/${id}`)
      setProduct(response.data)

    } catch (error) {
      alert("Error al obtener producto")
      console.log(error)
    }
  }

  if (!product) {
    return (
      <div className="loader container">
        <h1>Cargando...</h1>
      </div>
    )
  }


  return (

    <section className="main-detail-product">

      <div className="image-detail">
        <img src={product?.image} alt="" />
      </div>

      <div className="container-info">

      <div className="nameproduct">
          <h3>{product?.category}</h3>
          <h1>{product?.name}</h1>
        </div>

        <div className="reseña">
          <h4>Reseña</h4> 
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/> 
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>

        <div className="detail-price">
        <h3>$ {product?.price}</h3>
        <p>{product?.description}</p>
        </div>

        <div className="detail-btn">
          <button className="product-button" onClick={()=>addProduct(product)}>
          Agregar al carrito
          </button>
          <div className="cupon">
          CUPON DE DESCUENTO
            <input type="text" placeholder="Ingrese cupón" />
          </div>
        </div>

      </div>
        
    </section>


  )
}