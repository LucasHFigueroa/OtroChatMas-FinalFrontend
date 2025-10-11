import { useState } from "react"
import Register from "../components/Register"
import Login from "../components/Login"
import styles from "../styles/pages/Landing.module.css"


const Landing= () => {
  const [showRegister, setShowRegister] = useState(false)

  const toggleView = () => {
    setShowRegister(!showRegister)
  }

  return (
    <div className={`${styles.authContainer} ${showRegister ? styles.registerActive : ""}`}>
      <div className={styles.formWrapper}>
        <div className={`${styles.form} ${styles.loginForm}`}>
        <Login onToggleView={toggleView} />
        </div>
        <div className={`${styles.form} ${styles.registerForm}`}>
        <Register onToggleView={toggleView} />
        </div>
      </div>
    </div>
  )
}

export default Landing