import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const URL = import.meta.env.VITE_LOCAL_SERVER;

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const [token, setToken] = useState(localStorage.getItem("token"))

    const navigate = useNavigate();

    async function login(data) {
        try {

            const response = await axios.post(`${URL}/login`, data)

            console.log(response.data)

            const {user, token} = response.data

            setUser(user);
            setToken(token);


            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token",token);

            Swal.fire({
                icon: "success",
                title: "Login exitoso",
                text: "Bienvenido",
                timer: 2000
            }).then(() => {
            navigate("/")
            })

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error en el login",
                text: error.response.data.message
            })
        }
    }

    function logout() {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/")
    }


    return (
        <UserContext.Provider value={{ login, user, token, logout}}>
            {children}
        </UserContext.Provider>
    )
}