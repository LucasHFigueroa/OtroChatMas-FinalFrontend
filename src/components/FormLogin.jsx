import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/FormLogin.module.css"

const FormLogin = () => {
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const PASS = "cualquiera"

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const validatePassword = () => {
    // limpiar mensajes previos
    setMessage("")
    setError("")

    if (password === PASS) {
      setMessage("Pasá, sentite como en casa")
      setTimeout(() => {
        navigate("/chat")
      }, 3000)
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)

      if (newAttempts >= 3) {
        setError("Se te acabaron los intentos. Te mandamos un email para restablecer tu contraseña.")
      } else {
        setError(`Contraseña incorrecta. Te quedan ${3 - newAttempts} intento(s).`)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validatePassword()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <input type="text" placeholder="Usuario o Email..." required />
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
      <div className={styles.inputBox}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <i
          className={showPassword ? "fa-solid fa-eye-slash" : "fa fa-eye"}
          aria-hidden="true"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <button type="submit" className={styles.btnInicio}>Acceder</button>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.attempts}>{error}</p>}
      {attempts > 0 && <p className={styles.attempts}></p>}
    </form>
  )
}

export default FormLogin;