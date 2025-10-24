import { useState } from "react"
import styles from "../styles/components/FormRegister.module.css"
import avatar1 from "../assets/images/avatars/avatar1.png"

const FormRegister = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
  setShowPassword(!showPassword)
  }

  const defaultAvatar = avatar1

  const handleSubmit = (e) => {
  e.preventDefault()
  
  // Crear un objeto con los datos del usuario
  const newUser = {
  username,
  email,
  password,
  avatar: defaultAvatar,
  }

  // Guardar en localStorage
  localStorage.setItem("userData", JSON.stringify(newUser))

  if (onRegisterSuccess) onRegisterSuccess()
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <input
        type="text"
        placeholder="Ingresá el nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>


      <div className={styles.inputBox}>
        <input
        type="email"
        placeholder="Ingresá tu email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <i className="fa-solid fa-envelope"></i>
      </div>


      <div className={styles.inputBox}>
        <input
        type={showPassword ? "text" : "password"}
        placeholder="Elegí una contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <i
        className={showPassword ? "fa-solid fa-eye-slash" : "fa fa-eye"}
        aria-hidden="true"
        onClick={togglePasswordVisibility}
        style={{ cursor: "pointer" }}
        ></i>
      </div>

      <button 
        type="submit" 
        className={styles.btnRegister}>
        Quiero registrarme!
      </button>
    </form>
  )
}

export default FormRegister