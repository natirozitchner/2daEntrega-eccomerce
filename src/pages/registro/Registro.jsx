import './Registro.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const URL = "https://66cd01308ca9aa6c8cc93b19.mockapi.io/api/v1"

export default function Registro() {

  const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm();

  async function onUserSubmit(usuario) {

    try {

      const user = await axios.post(`${URL}/usuarios`, usuario)
      console.log(user.data)  
        reset()

        Swal.fire({
          title:"Usuario creado",
          text: "Usted se ha registrado correctamente",
          icon: "success",
          timer:1500
      })
        
    } catch (error) {
        console.log(error)
    }
} 

  return (
    <>
      <span className="main-title">
        <h1>REGISTRATE</h1>
      </span>

      <main className="main-registro">

        <form className="form-registro" onSubmit={handleSubmit(onUserSubmit)}>

          <div className="item-registro">
            <label htmlFor="name">Nombre completo *</label>
            <input type="text" id="name" {...register("name", { required: true, minLength: 6 })}  placeholder='Juan Gómez'/>

            {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
            {errors.name?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 6</div>}
          </div>

          <div className="item-registro">
            <label htmlFor="password">Contraseña *</label>
            <input type="password" id="password" {...register("password", { required: true, minLength: 5, maxLength: 20 })}
            />

            {errors.password?.type === "required" && <div className="input-error">El campo es requerido</div>}
            {errors.password?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 5</div>}
            {errors.password?.type === "maxLength" && <div className="input-error">El máximo de caracteres es 20</div>}
          </div>


          <div className="item-registro">
            <label htmlFor="birthday">Fecha de nacimiento *</label>
            <input id="birthday" type="date" {...register("birthday", { required: true })} />

            {errors.birthday?.type === "required" && <div className="input-error">El campo es requerido</div>}
          </div>

          <div className="item-registro">
            <label htmlFor="mail">Correo electrónico *</label>
            <input type="email" id="mail" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" placeholder="ejemplo@gmail.com"
              {...register("mail", { required: true, minLength: 6, maxLength: 25 })}
            />
            {errors.mail?.type === "required" && <div className="input-error">El campo es requerido</div>}
            {errors.mail?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 6</div>}
            {errors.mail?.type === "maxLength" && <div className="input-error">El máximo de caracteres es 25</div>}
          </div>


          <div className="item-registro">
                    <label htmlFor="province">Seleccione su provincia *</label>
                    <select name="provincia" id="province" {...register("province", {required: true})} >
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
            <label htmlFor="image">URL de foto de perfil *</label>
            <input id="image" type="url" {...register("image", { required: true })} />

            {errors.image && <div className="input-error">El campo es requerido</div>}
          </div>

          <button type="submit" disabled={!isValid} className="btn">
            Registrarse
          </button>

        </form>

      </main>
    </>
  )
}
