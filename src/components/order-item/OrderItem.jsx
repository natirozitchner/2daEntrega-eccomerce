import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./OrderItem.css"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export default function OrderItem({ item }) {
    return (
        <li className="order-product">
            <div className="product-image">
                <img src={item.image} alt="imagen del producto" />
            </div>
            <div className="product-info">
                {item.name}
            </div>
            <div className="product-price">
                $ {item.price}
            </div>
            <div className="product-count">
                {item.quantity}
            </div>
            <div className="actions">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </li>
    )
}