import { useOrder } from "../../context/OrderContext";
import OrderItem from "../order-item/OrderItem";
import "./OrderDialog.css"

export default function OrderDialog() {

    const { order, toggleModal, setToggleModal, total, createOrder } = useOrder()

    if (!toggleModal) return;


    return (
        <div className="modal-overlay" onClick={() => setToggleModal(!toggleModal)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="modal-title">Mi compra</div>

                <div className="modal-body">

                    <ul className="order-list">
                        {
                            
                                order.map((item) => (<OrderItem key={item._id} item={item} />
                                ))
                            

                        }
                        <div className="list-total">
                            <strong>Total:  $ {total}</strong>
                        </div>
                    </ul>

                </div>

                <div className="modal-btns">
                    <button onClick={() => setToggleModal(!toggleModal)}>❌</button>
                    <button onClick={()=> createOrder()}>Finalizar compra</button>
                </div>

            </div>
        </div>
    )
}
