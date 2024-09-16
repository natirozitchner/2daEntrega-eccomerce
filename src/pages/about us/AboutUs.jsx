import "./AboutUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"


export default function AboutUs() {
  return (
    <>
  <span className="main-title">
    <h1>¿QUIÉNES SOMOS?</h1>
  </span>
  <main className="main-about-us">
    <div className="info-proyecto">
      <h2>SMOOTH CLOTHES</h2>
      <p>
        {" "}
        Bienvenido a Smooth Clothes, donde la comodidad y el estilo se unen en
        prendas únicas y modernas. En Smooth Clothes, nos encanta crear piezas
        de ropa que te permitan expresar tu personalidad sin sacrificar la
        comodidad. Nuestro enfoque en diseños oversize garantiza que te sientas
        cómodo y a la moda en cada ocasión. Utilizamos únicamente algodón de
        alta calidad en la confección de nuestras prendas, asegurando que
        disfrutes de la suavidad y durabilidad de nuestros productos.{" "}
      </p>
      <span className="logo-proyecto">
      <FontAwesomeIcon icon={faChessQueen}  /> 
      </span>
    </div>
    <div className="integrantes-proyecto">
      <img src="/src/assets/IMG_8906 (1).jpg" alt="nati" />
      <span className="integrantes-info">
        <h2>Nathalie Rozitchner</h2>
        <p>Programadora fullstack en progreso, actriz y productora técnica.</p>
      </span>
    </div>
  </main>
</>
  )
    
}