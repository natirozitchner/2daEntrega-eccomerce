import { useForm } from "react-hook-form";
import "./Login.css";
import { useUser } from "../../context/UserContext";

export default function Login() {
    const { register, handleSubmit } = useForm();

    const { login } = useUser()

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit(login)}>
                <h1>Login</h1>
                <label>Correo electrónico</label>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    {...register("mail", {
                        required: "El email es requerido",
                        minLength: {
                            value: 4,
                            message: "Debe tener al menos cuatro caracteres"
                        }
                    })}
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", {
                        required: "La contraseña es requerida"
                    })}
                />

                <button type="submit" className="btn">
                    Ingresar
                </button>
            </form>
        </div>
    );
}
