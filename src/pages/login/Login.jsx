import { useForm } from "react-hook-form";
import "./Login.css";
import { useUser } from "../../context/UserContext";




export default function Login() {
    const { register, handleSubmit } = useForm();

    const {login} = useUser()

    async function handleLogin(data) {
        login(data)
    }

    return (
        <div className="login-container">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
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

                <button type="submit" className="button">
                    Ingresar
                </button>
            </form>
        </div>
    );
}
