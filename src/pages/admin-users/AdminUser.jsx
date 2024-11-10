import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TableUsers from "../../components/table-users/TableUsers";
import { useUser } from "../../context/UserContext";


const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function AdminUser() {

    const [users, setUsers] = useState([])

    const [selectedUser, setSelectedUser] = useState(null);

    const { register, reset, setValue, handleSubmit, formState: { errors, isValid } } = useForm();

    const { token } = useUser

    useEffect(() => {

        if (selectedUser) {
            setValue("name", selectedUser.name),
                setValue("password", selectedUser.password),
                setValue("birthday", selectedUser.birthday),
                //setValue("image", selectedUser.image),
                setValue("mail", selectedUser.mail)
        } else {
            reset()
        }

    }, [selectedUser, setValue, reset])

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        try {

            const response = await axios.get(`${URL}/users`,{
                headers: {
                    Authorization:token
                }
            })

            setUsers(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    async function onUserSubmit(usuario) {

        try {

            if (selectedUser) {
                const { _id } = selectedUser

                const user = await axios.put(`${URL}/users/${_id}`, usuario)

                console.log(user.data)

                Swal.fire({
                    title: "Edición correcta",
                    text: "Los datos del usuario se editaron correctamente",
                    icon: "success",
                    timer: 1500
                })

                setSelectedUser(null)


            } else {
                const user = await axios.post(`${URL}/users`, usuario)
                console.log(user.data) //

            }
            reset()
            getUsers()

            Swal.fire({
                title: "Usuario creado",
                text: "Su usuario fue creado correctamente",
                icon: "success",
                timer: 1500
            })


        } catch (error) {
            console.log(error)
        }
    }

    function deleteUser(id) {

        Swal.fire({
            title: "Borrar usuario",
            text: "¿Realmente desea borrar este usuario?",
            icon: "warning",
            showCancelButton: true,
            reverseButtons: true,
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${URL}/users/${id}`);

                    console.log(response.data);

                    getUsers();
                }
            } catch (error) {
                console.log(error)
                Swal.fire({
                    title: "Error al borrar",
                    text: "El usuario no fue borrado",
                    icon: "error"
                })
                
            }
        })
    }

    function editUser(usuario) {
        setSelectedUser(usuario)
    }


    return (
        <>
            <h1 className="main-title">Admin Users</h1>

            <div className="admin-container">

                <div className="form-container">
                    <form onSubmit={handleSubmit(onUserSubmit)}>

                        <div className="item-registro">
                            <label htmlFor="name">Nombre completo</label>
                            <input type="text" id="name" {...register("name", { required: true, minLength: 3, maxLength: 60})} />

                            {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.name?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 3</div>}
                            {errors.name?.type === "maxLength" && <div className="input-error">El máximo de caracteres es 60</div>}
                        </div>

                        <div className="item-registro">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" {...register("password", { required: true, minLength: 4, maxLength: 70 })} />

                            {errors.password?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.password?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 4</div>}
                            {errors.password?.type === "maxLength" && <div className="input-error">El máximo de caracteres es 70</div>}
                        </div>

                        <div className="item-registro">
                            <label htmlFor="birthday">Fecha de nacimiento</label>
                            <input id="birthday" type="date" {...register("birthday", { required: true })} />

                            {errors.birthday?.type === "required" && <div className="input-error">El campo es requerido</div>}
                        </div>

                        <div className="item-registro">
                            <label htmlFor="mail">Correo electrónico</label>
                            <input type="email" id="mail" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" placeholder="ejemplo@gmail.com"
                                {...register("mail", { required: true, minLength: 7, maxLength: 90 })}
                            />
                            {errors.mail?.type === "required" && <div className="input-error">El campo es requerido</div>}
                            {errors.mail?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 7</div>}
                            {errors.mail?.type === "maxLength" && <div className="input-error">El máximo de caracteres es 90</div>}
                        </div>

                        <div className="item-registro">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" {...register("role" , {required: true})}>
                                <option value="client">Client</option>
                                <option value="admin">Admin</option>
                                <option value="superadmin">SuperAdmin</option>
                                <option value="user">User</option>
                            </select>

                            {errors.role?.type === "required" && <div className="input-error">El campo es requerido</div>}

                        </div>

                        <div className="item-registro">
                            <label htmlFor="province">Seleccione su provincia</label>
                            <select name="provincia" id="province" {...register("province", { required: true })} >
                                <option value="BUENOS AIRES">BUENOS AIRES</option>
                                <option value="CIUDAD AUTONOMA DE BUENOS AIRES">CIUDAD AUTONOMA DE BS AS</option>
                                <option value="CATAMARCA">CATAMARCA</option>
                                <option value="CORDOBA">CORDOBA</option>
                                <option value="CORRIENTES">CORRIENTES</option>
                                <option value="CHACO">CHACO</option>
                                <option value="CHUBUT">CHUBUT</option>
                                <option value="ENTRE RIOS">ENTRE RIOS</option>
                                <option value="FORMOSA">FORMOSA</option>
                                <option value="JUJUY">JUJUY</option>
                                <option value="LA PAMPA">LA PAMPA</option>
                                <option value="LA RIOJA">LA RIOJA</option>
                                <option value="MENDOZA">MENDOZA</option>
                                <option value="MISIONES">MISIONES</option>
                                <option value="NEUQUEN">NEUQUEN</option>
                                <option value="RIO NEGRO">RIO NEGRO</option>
                                <option value="SALTA">SALTA</option>
                                <option value="SAN LUIS">SAN LUIS</option>
                                <option value="SANTA CRUZ">SANTA CRUZ</option>
                                <option value="SANTA FE">SANTA FE</option>
                                <option value="SANTIAGO DEL ESTERO">SANTIAGO DEL ESTERO</option>
                                <option value="TIERRA DEL FUEGO">TIERRA DEL FUEGO</option>
                                <option value="TUCUMAN">TUCUMAN</option>
                            </select>
                            {errors.province?.type === "required" && <div className="input-error">El campo es requerido</div>}
                        </div>

                        <div className="item-registro">
                            <label htmlFor="image">Foto de perfil</label>
                            <input accept="image/*"  id="image" type="file" {...register("image", { required: true })} />

                            {errors.image && <div className="input-error">El campo es requerido</div>}
                        </div>

                        <button type="submit" disabled={!isValid} className="btn">
                            {
                                selectedUser ? "Editar" : "Crear"
                            }
                        </button>
                    </form>
                </div>

                <div className="table-container">
                    <TableUsers users={users} deleteUser={deleteUser}
                        editUser={editUser}
                    />
                </div>


            </div>

        </>
    )
}
