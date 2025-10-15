import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"  
import Register from "../components/Register"
import Login from "../components/Login"
import styles from "../styles/pages/Landing.module.css"


const Landing= () => {
  const [showRegister, setShowRegister] = useState(false)
  const navigate = useNavigate()
  const toggleView = () => {
    setShowRegister(!showRegister)
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn === "true") {
      navigate("/chat")
    }
  }, [navigate])

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