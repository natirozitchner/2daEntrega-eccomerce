import "./ProductCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { useOrder } from "../../context/OrderContext"


export default function ProductCard({ prod }) {

    const {addProduct} = useOrder()


    return (
        <article className='product-card'>

            <header className="product-header">
                <div className="product-image">
                <img src={prod.image} alt={prod.name} />
                </div>
            </header>

            <main className="product-body">
                <div className="product-category">
                    {prod.category}
                </div>
                <h1 className="product-name">{prod.name}</h1>

                <p className="product-description">
                    {prod.description}
                </p>

                <div className="product-price">
                    $ <span>{prod.price}</span>
                </div>
            </main>

            <footer className="product-footer">
                <button className="product-button" title="Añadir al carrito" onClick={()=>addProduct(prod)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <NavLink to={`/product-detail/${prod.id}`} className="product-button" title="Ver detalle">
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                </NavLink>
            </footer>
            
        </article>

    )
}
