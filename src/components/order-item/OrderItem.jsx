import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./OrderItem.css"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useOrder } from "../../context/OrderContext"

export default function OrderItem({ item }) {

    const {removeItemOrder, changeCantItem} = useOrder()

    return (
        <li className="order-product">
            <div className="product-image">
                <img src={item.image} alt="imagen del producto" />
            </div>
            <div className="product-info">
                {item.name}
            </div>
            <div className="product-price">
                <h4>Precio unitario</h4>
                $ {item.price}
            </div>
            <div className="product-subtotal">
            <h4>Subtotal</h4>
            $ {item.price * item.quantity}
            </div>
            <div className="product-count">
                <input 
                className="product-item"
                type="number" defaultValue={item.quantity} 
                min="1" 
                onChange={(evt)=> changeCantItem(item.id , evt.target.valueAsNumber)}/>
            </div>
            <div className="actions">
                <FontAwesomeIcon icon={faTrash} onClick={()=>removeItemOrder(item.id)} />
            </div>
        </li>
    )
}