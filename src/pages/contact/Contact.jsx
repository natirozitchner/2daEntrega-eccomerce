import "./Contact.css"

export default function Contact() {
  return (
    <>
    <span className="main-title">
    <h1>CONTACTANOS</h1>
  </span>
  <main className="main-contacto">
    <section className="datos-contacto">
      <h2>FORMULARIO DE CONTACTO</h2>
      <form className="form-contacto">
        <div className="item-registro">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            name="fullname"
            id="nombre"
            minLength={5}
            maxLength={60}
            placeholder="Juan Gómez"
            required=""
            autoFocus=""
          />
        </div>
        <div className="item-registro">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="correo"
            required=""
            minLength={5}
            maxLength={90}
            pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
            placeholder="ejemplo@gmail.com"
          />
        </div>
        <div className="item-registro">
          <label htmlFor="comment">Comentario</label>
          <textarea
            name="comment"
            id="comment"
            cols={30}
            rows={10}
            required=""
            defaultValue={""}
          />
        </div>
        <div className="item-registro">
          <button  className="btn" type="submit">Enviar</button>
        </div>
      </form>
    </section>

    <section className="mapa-contacto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0167922325904!2d-58.44000092488612!3d-34.57844165616272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb594811ef4a9%3A0x1cd6e1ff7aee4e60!2sAr%C3%A9valo%202005%2C%20C1414CQO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1715059810914!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  </main>
</>
  )
}
