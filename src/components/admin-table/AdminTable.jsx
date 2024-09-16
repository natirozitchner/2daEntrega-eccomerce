import AdminRow from '../admin-row/AdminRow'
import './AdminTable.css'


export default function AdminTable({products, deleteProduct, handleEditProduct}) {
    return (
    <table className="table-products">
    <thead>
        <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Fecha de ingreso</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
    {
                        products.map(prod => {
                            return <AdminRow key={prod.id} producto={prod} deleteProduct={deleteProduct}
                            handleEditProduct={handleEditProduct} />
                        })
                    }
    </tbody>

</table>
    )
}
