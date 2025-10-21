import styles from "../styles/pages/Help.module.css"
import bannerHelp from "../assets/images/help/Banner-Help.png"
import loginImg from "../assets/images/help/login-gif.gif"
import yoImg from "../assets/images/help/yochatmas.png"
import chatImg from "../assets/images/help/screenshot-chat.png"
import popupGif from "../assets/images/help/popup-gif.gif"


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
        <h2 className={styles.welcomeTitle}>
          ¡Bienvenido al <span>Centro de Ayuda</span>! <span className={styles.wave}>👋</span>
        </h2>
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
            alt="Vista del Chat y lista de usuarios" 
            className={styles.featureImage}
          />        
        </div>
      </section>

      {/* SECCIÓN 4 - TECNOLOGÍAS */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.imageColumn}>
          <div className={styles.imagePlaceholder}>Captura: estructura de componentes en React</div>
        </div>
        <div className={styles.textColumn}>
          <span className={styles.tag}>DESARROLLO</span>
          <h2>Tecnologías utilizadas</h2>
          <p>El proyecto fue desarrollado con un enfoque modular y moderno.</p>
          <ul>
            <li><strong>React + Vite</strong> — entorno rápido y escalable.</li>
            <li><strong>CSS Modules</strong> — estilos encapsulados.</li>
            <li><strong>Font Awesome</strong> — íconos y recursos visuales.</li>
            <li><strong>Photoshop</strong> — armado de fondos y recursos gráficos.</li>
            <li><strong>Canva</strong> — Ilustraciones y dibujos.</li>
            <li><strong>ChatGPT</strong> — Asistente de IA, para múltiples tareas.</li>
          </ul>
        </div>
      </section>

      {/* SECCIÓN 5 - SOBRE MÍ */}
      <section className={styles.featureSection}>
        <div className={styles.textColumn}>
          <span className={styles.tag}>AUTOR</span>
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy <strong>Lucas H. Figueroa</strong>, estudiante de <strong>Diseño UX/UI</strong> y 
            desarrollo <strong>Full Stack</strong>. Este proyecto fue realizado como parte de mi cursada 
            en la <strong>Universidad Tecnológica Nacional (UTN)</strong>.
          </p>
          <p>
            Me apasiona la intersección entre el diseño y la programación, y disfruto creando 
            experiencias digitales claras, accesibles y visualmente agradables.  
          </p>
          <ul>
            <li><i className="fa fa-map-marker"></i> Tigre, Buenos Aires, Argentina</li>
            <li><i className="fa fa-envelope"></i> lucasfigueroa@ejemplo.com</li>
            <li><i className="fa fa-code"></i> Interés: UX/UI, React, Sass, y accesibilidad</li>
            <li><i className="fa fa-heart"></i> Hobbies: ilustración, música y cocina</li>
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
        <p>Versión 1.0 • <a href="https://otrochatmas-finalfrontend.vercel.app" target="_blank" rel="noreferrer">Visitar sitio</a></p>
      </footer>
    </main>
  )
}

export default Help