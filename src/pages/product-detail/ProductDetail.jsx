import { useParams } from "react-router-dom"
import "./ProductDetail.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useOrder } from "../../context/OrderContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


const URL = import.meta.env.VITE_LOCAL_SERVER

export default function ProductDetail() {

  const { addProduct } = useOrder()

  const { id } = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    getProduct()
  }, [])

  async function getProduct() {
    try {
      const resp = await axios.get(`${URL}/products/${id}`)

      setProduct(resp.data.product)

    } catch (error) {
      alert("Error al obtener producto")
      console.log(error)
    }
  }

  if (!product) {
    return (
      <div className="loader-product-detail">
        <h1>Cargando detalles...</h1>
      </div>
    )
  }


  return (

    <section className="main-detail-product">

      <div className="image-detail">
        <img src={`${URL}/images/products/${product.image}`} alt={product.name} />
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
          CUPÓN DE DESCUENTO
            <input type="text" placeholder="Ingrese el cupón" />
          </div>
        </div>

      </div>

    </section>

  )
}