import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faLock, faTruck} from "@fortawesome/free-solid-svg-icons";
import ProductGallery from "../../components/product-gallery/ProductGallery";
import "./Home.css"


export default function Home() {
  return (
    <>
      <section className="section-banner">
        <div className="banner-img">
          <img src="/src/assets/foto-banner.PNG" alt="foto-banner" />
        </div>
        <div className="banner-text">
          <h2 className="banner-title">SMOOTH CLOTHES</h2>
          <p className="banner-subtitle">
            donde la comodidad se encuentra con el estilo
          </p>
        </div>
      </section>

      <ProductGallery />


      <section className="servicios-varios">
        <article className="varios">
        <FontAwesomeIcon icon={faTruck} className="varios-img"/>
          <div className="varios-description">
            ENVIOS A TODO EL PAIS
            <p>A domicilio o sucursal del correo</p>
          </div>
        </article>
        <article className="varios">
          <FontAwesomeIcon  className="varios-img" icon={faCreditCard} />
          <div className="varios-description">
            3 CUOTAS SIN INTERÉS
            <p>Con tarjetas Visa o Mastercard</p>
          </div>
        </article>
        <article className="varios">
        <FontAwesomeIcon icon={faLock} className="varios-img" />
          <div className="varios-description">
            COMPRÁ CON SEGURIDAD
            <p>Tus datos siempre protegidos</p>
          </div>
        </article>
      </section>


    </>
  )
}