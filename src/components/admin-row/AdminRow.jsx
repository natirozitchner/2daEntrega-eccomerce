import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../../utils/formatDate";

const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function AdminRow({
  producto,
  deleteProduct,
  handleEditProduct,
}) {
  return (
    <tr className="admin-table-row">
      <td className="image">
       <img src={`${URL}/images/products/${producto.image}`} alt={producto.name} /> 
      </td>
      <td className="name">{producto.name}</td>
      <td className="description">{producto.description}</td>
      <td className="price">${producto.price}</td>
      <td className="category">{producto.category}</td>
      <td className="date">{formatDate(producto.createdAt)}</td>
      <td className="actions">
        <div className="actions-container">
          <button className="button-edit" onClick={() => handleEditProduct(producto)}>
            <FontAwesomeIcon icon={faPenToSquare}  className="edit"  />
          </button>
          <button className="button-delete" onClick={() => deleteProduct(producto._id)}>
            <FontAwesomeIcon icon={faTrashCan}  className="delete" />
          </button>
        </div>
      </td>
    </tr>
  );
}