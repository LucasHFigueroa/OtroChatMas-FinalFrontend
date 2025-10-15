import { Link } from "react-router-dom"
import styles from "../styles/pages/NotFound.module.css"

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página no encontrada</h2>
        <p className={styles.message}>
          Ups... parece que la página que buscás no existe o fue movida.
        </p>
        <Link to="/" className={styles.button}>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFound