import { useOrder } from "../../context/OrderContext";
import OrderItem from "../order-item/OrderItem";
import "./OrderDialog.css"

export default function OrderDialog() {

    const { order, toggleModal, setToggleModal, total } = useOrder()

    if (!toggleModal) return;


    return (
        <div className="modal-overlay" onClick={() => setToggleModal(!toggleModal)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="modal-title">Mi carrito</div>

                <div className="modal-body">

                    <ul className="order-list">
                        {
                            
                                order.map((item) => (<OrderItem key={item.id} item={item} />
                                ))
                            

                        }
                        <li className="list-total">
                            Total:  $ {total}
                        </li>
                    </ul>

                </div>

                <div className="modal-footer">
                    <button onClick={() => setToggleModal(!toggleModal)}>❌</button>
                    <button>Finalizar compra</button>
                </div>

            </div>
        </div>
    )
}
