import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessQueen, faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../context/OrderContext";


export default function Header() {

  const { setToggleModal, count } = useOrder()

  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="responsive-menu" className="input-responsive" />
        <label className="responsive-menu" htmlFor="responsive-menu">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className="logonav-header">
          <span className="main-logo">
            <FontAwesomeIcon icon={faChessQueen} />
          </span>
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Principal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/registro" className="nav-link">
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about us" className="nav-link">
                  Acerca de nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin-product" className="nav-link">
                  Admin productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin-users" className="nav-link">
                  Admin Users
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="user-header">

          <div className="user-order">

            <div className="user-order-count">{count}</div>
            <FontAwesomeIcon icon={faCartShopping}
              onClick={() => setToggleModal((estado) => !estado)}
            />
            
          </div>

          <div className="user-image">
            <img src="/src/assets/default user.png" alt="imagen de usuario" />
          </div>

        </div>

      </header>

    </>

  )
}