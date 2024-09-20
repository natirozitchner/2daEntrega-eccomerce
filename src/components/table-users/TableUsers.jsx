import TableRowUsers from "../table-row-users/TableRowUsers"


export default function TableUsers({users, deleteUser, editUser}) {
  return (
    <table className="table-products">
    <thead>
        <tr>
            <th>Imagen</th>
            <th>Nombre completo</th>
            <th>Fecha de nacimiento</th>
            <th>Provincia</th>
            <th>Correo electrónico</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
    {
                        users.map(user => {
                            return <TableRowUsers key={user.id} usuario={user}
                            deleteUser={deleteUser} editUser={editUser}
                            />
                        })
                    }
    </tbody>

</table>
  )
}
