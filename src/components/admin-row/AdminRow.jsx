import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function AdminRow({
  producto,
  deleteProduct,
  handleEditProduct,
}) {
  return (
    <tr className="admin-table-row">
      <td className="image">
        <img src={producto.image} alt={producto.name} />
      </td>
      <td className="name">{producto.name}</td>
      <td className="description">{producto.description}</td>
      <td className="price">${producto.price}</td>
      <td className="category">{producto.category}</td>
      <td className="date">{producto.createdAt}</td>
      <td className="actions">
        <div className="actions-container">
          <button className="button-edit" onClick={() => handleEditProduct(producto)}>
            <FontAwesomeIcon icon={faPenToSquare}  className="edit"  />
          </button>
          <button className="button-delete" onClick={() => deleteProduct(producto.id)}>
            <FontAwesomeIcon icon={faTrashCan}  className="delete" />
          </button>
        </div>
      </td>
    </tr>
  );
}