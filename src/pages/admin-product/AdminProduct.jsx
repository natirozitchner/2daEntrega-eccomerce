import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import AdminTable from "../../components/admin-table/AdminTable";
import Swal from "sweetalert2";


const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function AdminProduct() {

    const [products, setProducts] = useState([])

    const [selectedProduct, setSelectedProduct] = useState(null)

    const [categories, setCategories] = useState([])

    const { register, reset, setValue, handleSubmit, formState: { errors, isValid } } = useForm();

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    useEffect(()=>{

        if(selectedProduct){
                setValue("name", selectedProduct.name),
                setValue("price", selectedProduct.price),
                setValue("description", selectedProduct.description),
                //setValue("image",selectedProduct.image),
                setValue("category", selectedProduct.category),
                setValue("createdAt", selectedProduct.createdAt)
        } else {
            reset()
        }
        
    }, [selectedProduct, setValue, reset])

    async function getCategories() {
        try {

            const response = await axios.get(`${URL}/categories`)

            console.log(response.data)

            setCategories(response.data.categories)

        } catch (error) {
            console.log(error)
            alert ("No se pudieron cargar las categorias")
        }
    }


    async function getProducts() { 
        try {
            
            const response = await axios.get(`${URL}/products`)

            setProducts(response.data.products)

        } catch (error) {
            console.log(error)
        }
    }

    function deleteProduct(identificador) {

        Swal.fire({
            title: "Borrar producto",
            text: "¿Realmente desea borrar este producto?",
            icon: "warning",
            showCancelButton: true,
            reverseButtons: true,
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${URL}/products/${identificador}`);

                    console.log(response.data.product);

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

    }


    async function onProductSubmit(producto) {

        try {

            const formData = new FormData()
            formData.append("name", producto.name);
            formData.append("price", producto.price);
            formData.append("description", producto.description);
            formData.append("category", producto.category);

            if (producto.image[0]) {
                formData.append("image", producto.image[0])
            }


            if(selectedProduct){

                const {_id}=selectedProduct;

                const prod = await axios.put(`${URL}/products/${_id}`, formData) 

                console.log(prod.data)

                Swal.fire({
                    title:"Edición correcta",
                    text: "El producto fue editado correctamente",
                    icon: "success",
                    timer:1500
                })

                setSelectedProduct(null)
                

            } else {
                const prod = await axios.post(`${URL}/products`, formData)
                console.log(prod.data) 
                
            }
            reset()
            getProducts()
            

        } catch (error) {
            console.log(error)
        }
    } 

    
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
                                {
                                    categories.map(cat => (
                                        <option key={cat._id} value={cat.name}>{cat.name}</option>
                                    ))
                                }

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
                            <label htmlFor="image">Imagen</label>
                            <input accept="image/*" id="image" type="file" {...register("image", {required: true})} className="item-registro" />

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