import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { faLocationDot, faPhone, faEnvelope, faCircle, faChessQueen} from "@fortawesome/free-solid-svg-icons"





export default function Footer() {
  return (
   <>
   <footer className="main-footer">

  <section className="footer-redes">
    <p>Seguinos en redes</p>
    <ul className="listredes-footer">
      <li className="item-redes-footer">
      <FontAwesomeIcon icon={faCircle} className="icon" />
        <NavLink to="https://www.instagram.com/" target="_blank">
          Instagram
        </NavLink>
      </li>
      <li className="item-redes-footer">
      <FontAwesomeIcon icon={faCircle} className="icon"/>

        <NavLink to="https://www.facebook.com/?locale=es_LA" target="_blank">
          Facebook
        </NavLink>
      </li>
    </ul>
  </section>
  <section className="footer-logo">
    <div className="img-logo">
    <FontAwesomeIcon icon={faChessQueen} className="logo-footer" />
    </div>
    <h3>Smooth Clothes</h3>
  </section>
  <section className="footer-info">
    <ul className="listinfo-footer">
      <li className="item-info-footer">
      <FontAwesomeIcon icon={faLocationDot} /> Arévalo 2005, CABA. 
      </li>
      <li className="item-info-footer">
      <FontAwesomeIcon icon={faPhone} /> 1160342753 
      </li>
      <li className="item-info-footer">
      <FontAwesomeIcon icon={faEnvelope} /> smclothes@gmail.com
      </li>
    </ul>
  </section>
</footer>
  </>
  )
}
