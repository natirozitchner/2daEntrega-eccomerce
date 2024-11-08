import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"

const URL = import.meta.env.VITE_LOCAL_SERVER;


export default function TableRowUsers({ usuario, deleteUser, editUser }) {
    return (
        <tr className="admin-table-row">
            <td className="image">
                <img src={`${URL}/images/users/${usuario.image}`} alt={usuario.name} />
            </td>
            <td className="name">
                {usuario.name}
            </td>
            <td className="birthday">
                {usuario.birthday}
            </td>
            <td className="category">
                {usuario.province}
            </td>
            <td className="mail">
                {usuario.mail}
            </td>

            <td className="actions">
                <div className="actions-container">
                    <button className="button-edit" onClick={() => editUser(usuario)}>
                        <FontAwesomeIcon icon={faPenToSquare} className="edit" />
                    </button>
                    <button className="button-delete" onClick={() => deleteUser(usuario._id)}>
                        <FontAwesomeIcon icon={faTrashCan} className="delete" />
                    </button>
                </div>
            </td>
        </tr>
    )
}
