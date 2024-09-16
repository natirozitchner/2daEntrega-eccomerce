import axios from "axios";
import { useForm } from "react-hook-form";
import "./AdminProduct.css"
import { useEffect, useState } from "react";
import AdminTable from "../../components/admin-table/AdminTable";
import Swal from "sweetalert2";


const URL = "https://66cd01308ca9aa6c8cc93b19.mockapi.io/api/v1";

export default function AdminProduct() {

    const [products, setProducts] = useState([])

    const [selectedProduct, setSelectedProduct] = useState(null)

    const { register, reset, setValue, handleSubmit, formState: { errors, isValid } } = useForm();

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(()=>{

        if(selectedProduct){
                setValue("name", selectedProduct.name),
                setValue("price", selectedProduct.price),
                setValue("description", selectedProduct.description),
                setValue("image",selectedProduct.image),
                setValue("category", selectedProduct.category),
                setValue("createdAt", selectedProduct.createdAt)
        } else {
            reset()
        }
        
    }, [selectedProduct, setValue, reset])


    async function getProducts() { //con esta function traemos productos de nuestro moke appi
        try {
            //carga de productos
            const response = await axios.get(`${URL}/products`)

            setProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    function deleteProduct(identificador) {

        Swal.fire({
            title: "Borrar producto",
            text: "Realmente desea borrar este producto",
            icon: "warning",
            showCancelButton: true,
            reverseButtons: true,
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${URL}/products/${identificador}`);

                    console.log(response.data);

                    getProducts();
                }
            } catch (error) {
                console.log(error)
                Swal.fire({
                    title: "Error al borrar",
                    text: "El producto no fue borrado",
                    icon: "error"
                })
            }
        })

    }//con esta function eliminamos productos


    async function onProductSubmit(producto) {

        try {

            if(selectedProduct){
                const {id}=selectedProduct

                const prod = await axios.put(`${URL}/products/${id}`, producto)

                console.log(prod.data)

                Swal.fire({
                    title:"Edición correcta",
                    text: "El producto fue editado correctamente",
                    icon: "success",
                    timer:1500
                })

                setSelectedProduct(null)
                

            } else {
                const prod = await axios.post(`${URL}/products`, producto) //con esta function creamos y mandamos productos a nuestro backend (mokeappi)
                console.log(prod.data) //en data está el producto que se crea
                
            }
            reset()
            getProducts()
            

        } catch (error) {
            console.log(error)
        }
    } 

    // #Editar productos
    function handleEditProduct(producto) {
        setSelectedProduct(producto)
    }

    return (

        <>
            <h1 className="main-title">Admin Product</h1>

            <div className="admin-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit(onProductSubmit)}>

                        <div className="item-registro">
                            <label htmlFor="name">Nombre del producto</label>
                            <input type="text" id="name" {...register("name", { required: true, minLength: 4 })} />

                            {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.name?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 4</div>}
                        </div>

                        <div className="item-registro">
                            <label htmlFor="description">Descripción</label>
                            <textarea id="description" {...register("description", {minLength: 6, maxLength: 120, required:true })} rows={4}></textarea>
                            {errors.description?.type === "maxLength" && <div className="input-error">El máximo de caracteres es 120</div>}
                            {errors.description?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 6</div>}
                            {errors.description?.type === "required" && <div className="input-error">El campo es requerido</div>}

                        </div>

                        <div className="item-registro">
                            <label htmlFor="category">Categoria</label>
                            <select id="category" {...register("category", { required: true })}>
                                <option value="Remeras">Remeras</option>
                                <option value="Pantalones">Pantalones</option>
                                <option value="Buzos">Buzos</option>

                                {errors.category  && <div className="input-error">El campo es requerido</div>}
                            </select>
                        </div>

                        <div className="item-registro">
                            <label htmlFor="createdAt">Fecha de ingreso</label>
                            <input id="createdAt"  type="date" {...register("createdAt", { required: true })} />

                            {errors.createdAt && <div className="input-error">El campo es requerido</div>}

                        </div>

                        <div className="item-registro">
                            <label htmlFor="price">Precio</label>
                            <input  id="price"  type="number" {...register("price", { required: true })} />

                            {errors.price && <div className="input-error">El campo es requerido</div> }

                        </div>

                        <div className="item-registro">
                            <label htmlFor="image">URL imagen</label>
                            <input id="image" type="url" {...register("image", {required: true})} className="item-registro" />

                            {errors.image && <div className="input-error">El campo es requerido</div>}

                        </div>

                        <button type="submit" disabled={!isValid} className="btn">
                            {
                                selectedProduct ? "Editar" : "Crear"
                            }
                        </button>

                    </form>
                </div>

                <div className="table-container">
                    <AdminTable products={products} deleteProduct={deleteProduct}
                    handleEditProduct={handleEditProduct} />
                </div>
            </div>

        </>
    );
}