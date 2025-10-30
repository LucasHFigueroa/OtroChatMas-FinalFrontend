import styles from "../styles/pages/Help.module.css"
import bannerHelp from "../assets/images/help/Banner-Help.png"
import loginImg from "../assets/images/help/login-gif.gif"
import yoImg from "../assets/images/help/yochatmas.png"
import chatImg from "../assets/images/help/screenshot-chat.png"
import popupGif from "../assets/images/help/popup-gif.gif"
import tecnoGif from "../assets/images/help/tecnologia-gif.gif"

const Help = () => {
  return (
    <main className={styles.helpPage}>
      {/* ---------- BANNER SUPERIOR ---------- */}
      <section className={styles.bannerSection}>
        <img src={bannerHelp} alt="Banner decorativo" className={styles.bannerImage} />
        <h1 className={styles.bannerTitle}>Centro de ayuda</h1>
      </section>

      {/* ---------- CONTENIDO PRINCIPAL ---------- */}
      <section className={styles.welcomeSection}>
        <p className={styles.welcomeText}>
          Aquí vas a encontrar toda la información sobre el funcionamiento de <strong>Otro Chat Más</strong>, 
          las tecnologías utilizadas y algunos consejos para aprovechar al máximo la aplicación.
        </p>
      </section>
      {/* SECCIÓN 1 - REGISTRO E INICIO DE SESIÓN */}
      <section className={styles.featureSection}>
        <div className={styles.textColumn}>
          <span className={styles.tag}>AUTENTICACIÓN</span>
          <h2>Registro e inicio de sesión de usuarios</h2>
          <p>
            La aplicación cuenta con una pantalla de acceso donde podés registrarte como nuevo usuario 
            o iniciar sesión si ya tenés una cuenta guardada. 
            Tus datos se almacenan de forma local en <strong>LocalStorage</strong>.
          </p>
          <ol>
            <li>Ingresá tu nombre, email y contraseña para crear una cuenta. Acordate que esto es una simulación, no pongas datos posta.</li>
            <li>Si ya tenés una cuenta y estás logueado, accede directamente al chat.</li>
            <li>Si fallás tres veces, el sistema mostrará un mensaje de advertencia.</li>
          </ol>
        </div>
        <div className={styles.imageColumn}>
          <img 
            src={loginImg} 
            alt="Pantalla de Login y Registro de usuarios" 
            className={styles.featureImage}
          />       
        </div>
      </section>

      {/* SECCIÓN 2 - INTERFAZ DEL CHAT */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.imageColumn}>
          <img 
            src={chatImg} 
            alt="Vista del Chat y lista de usuarios" 
            className={styles.featureImage}
          />
        </div>
        <div className={styles.textColumn}>
          <span className={styles.tag}>INTERFAZ</span>
          <h2>Vista principal del chat</h2>
          <p>
            El diseño del chat está inspirado en las interfaces de mensajería actuales. 
            Cada usuario tiene su propio historial, con mensajes independientes y hora de envío.
          </p>
          <ul>
            <li>Filtrado dinámico de contactos por nombre.</li>
            <li>Estados de conexión (en línea / desconectado).</li>
            <li>Persistencia de mensajes.</li>
          </ul>
        </div>
      </section>

      {/* SECCIÓN 3 - CONFIGURACIÓN */}
      <section className={styles.featureSection}>
        <div className={styles.textColumn}>
          <span className={styles.tag}>PERSONALIZACIÓN</span>
          <h2>Ventana de configuración del usuario</h2>
          <p>
            Desde el botón de configuración (<i className="fa fa-cogs"></i>) se puede acceder a un panel 
            flotante para modificar los datos del usuario y personalizar el entorno del chat.
          </p>
          <ul>
            <li>Editar nombre, email o contraseña.</li>
            <li>Cambiar avatar y fondo del chat.</li>
            <li>Cerrar sesión desde el botón inferior.</li>
          </ul>
        </div>
        <div className={styles.imageColumn}>
          <img 
            src={popupGif} 
            alt="Modal de configuración de usuario" 
            className={styles.featureImage}
          />        
        </div>
      </section>

      {/* SECCIÓN 4 - TECNOLOGÍAS */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.imageColumn}>
          <img 
            src={tecnoGif} 
            alt="Estructura del proyecto en React" 
            className={styles.featureImage}
          /> 
        </div>
        <div className={styles.textColumn}>
          <span className={styles.tag}>DESARROLLO</span>
          <h2>Tecnologías utilizadas</h2>
          <ul>
            <li><strong>React + Vite</strong> — entorno rápido y escalable.</li>
            <li><strong>CSS Modules</strong> — estilos encapsulados.</li>
            <li><strong>Font Awesome</strong> — íconos y recursos visuales.</li>
            <li><strong>Photoshop</strong> — armado de fondos y recursos gráficos.</li>
            <li><strong>Canva</strong> — Ilustraciones y dibujos.</li>
            <li><strong>ChatGPT</strong> — Asistente de IA, para múltiples tareas.</li>
          </ul><br />
          <p>Si querés ver el repositorio en <a href="https://github.com/LucasHFigueroa/OtroChatMas-FinalFrontend">GitHub te lo dejo acá.</a></p>
        </div>
      </section>

      {/* SECCIÓN 5 - SOBRE MÍ */}
      <section className={styles.featureSection}>
        <div className={styles.textColumn}>
          <span className={styles.tag}>AUTOR</span>
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy <strong>Lucas Figueroa</strong>, estudiante de <strong>Diseño UX/UI</strong> y 
            desarrollo <strong>Full Stack</strong>. Este proyecto fue realizado como parte de mi cursada 
            en la <strong>Universidad Tecnológica Nacional (UTN)</strong>.
            Y quisiera contarte un poquito sobre este proyecto. Al momento de asignarles imágenes a los contactos, pude sentir que tenían personalidad y que podía seguir dándole una identidad propia al proyecto alrededor de ellos.<br /><br />

            Así comenzó el proceso creativo. Se me ocurrió una idea: 
            <em>"este es otro chat más del montón, pero es tuyo, así que podés decorarlo como quieras"</em>. 
            <br />
            Busqué decoraciones hogareñas y empecé por el <strong>Login</strong>.<br />
            Se me ocurrió que todos estos personajes eran parte de un mismo edificio, que eran vecinos —algo así como 
            <strong> Habbo Hotel</strong> o <strong>Pet Society</strong>.<br /><br />

            Como <strong>MVP</strong>, esta primera versión cumple con los requisitos técnicos básicos para la aprobación de la cursada, 
            pero <em>Otro Chat Más</em> tiene potencial para seguir creciendo, incorporando nuevas funcionalidades y, sobre todo, 
            para seguir divirtiéndonos.
          </p><br />   
          <ul>
            <li><i className="fa fa-map-marker"></i> Buenos Aires, Argentina</li>
            <li><i className="fa-solid fa-user-graduate"></i> Formación: Diseño UX/UI, Desarrollo Frontend</li>
            <li><i className="fa fa-envelope"></i>{" "}<a href="mailto:lucashernanfigueroa@gmail.com">lucashernanfigueroa@gmail.com</a></li>
            <li><i className="fa-brands fa-linkedin"></i>{" "}<a href="https://www.linkedin.com/in/lucas-hernan-figueroa" target="_blank" rel="noreferrer">linkedin.com/in/lucashernanfigueroa</a></li>
          </ul>
        </div>
        <div className={styles.imageColumn}>
          <img 
            src={yoImg} 
            alt="Esta es una ilustración mía, al estilo de Otro Chat Más" 
            className={styles.featureImageMia}
          />  
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>Proyecto desarrollado por <strong>Lucas H. Figueroa</strong> — UTN | Curso Frontend 2025</p>
        <p>Versión 1.0 • <a href="https://otrochatmas-finalfrontend.vercel.app" target="_blank" rel="noreferrer">Volver al sitio</a></p>
      </footer>
    </main>
  )
}

export default Help