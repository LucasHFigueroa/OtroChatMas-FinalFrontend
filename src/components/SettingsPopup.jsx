import { useChat } from "../context/ChatContext"
import { useState, useEffect } from "react"
import styles from "../styles/components/SettingsPopup.module.css"

// Avatares
import avatar1 from "../assets/images/avatars/avatar1.png"
import avatar2 from "../assets/images/avatars/avatar2.png"
import avatar3 from "../assets/images/avatars/avatar3.png"
import avatar4 from "../assets/images/avatars/avatar4.png"
import avatar5 from "../assets/images/avatars/avatar5.png"

// Fondos
import bg1 from "../assets/images/backgrounds/bg1.png"
import bg2 from "../assets/images/backgrounds/bg2.png"

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]
const backgrounds = [bg1, bg2]

const SettingsPopup = ({ onClose }) => {
  const { setBackground } = useChat()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: avatar1,
    background: "",
  })

  const [editedUser, setEditedUser] = useState(user)
  const [showAvatarGallery, setShowAvatarGallery] = useState(false)
  const [showBgGallery, setShowBgGallery] = useState(false)

  // Cargar datos del usuario guardados
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"))
    if (storedUser) {
      setUser(storedUser)
      setEditedUser(storedUser)
    }
  }, [])

  useEffect(() => {
    setEditedUser(user)
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedUser({ ...editedUser, [name]: value })
  }

  const handleAvatarSelect = (avatar) => {
    setEditedUser({ ...editedUser, avatar })
  }

  const handleBackgroundSelect = (bg) => {
    setEditedUser({ ...editedUser, background: bg })
  }

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(editedUser))
    alert("Cambios guardados correctamente.")
    setUser(editedUser)
    setBackground(editedUser.background)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    window.location.href = "/"
  }
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className={styles.header}>
          <div className={styles.avatarContainer}>
            <img src={user.avatar} alt="Avatar" className={styles.avatar} />
            <button
              className={styles.changeAvatarBtn}
              onClick={() => {
                setShowAvatarGallery(true)
                setShowBgGallery(false)
              }}
            >
              <i className="fa fa-user-edit"></i>
            </button>
          </div>
          <div className={styles.userInfo}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        {/* Cuerpo */}
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <button
              onClick={() => {
                setShowAvatarGallery(false)
                setShowBgGallery(false)
              }}
            >
              <i className="fa fa-pen"></i> Editar perfil
            </button>
            <button
              onClick={() => {
                setShowBgGallery(true)
                setShowAvatarGallery(false)
              }}
            >
              <i className="fa fa-image"></i> Cambiar fondo del chat
            </button>
            <button className={styles.logout} onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Cerrar sesión
            </button>
          </div>

          {/* Galería de Avatares */}
          {showAvatarGallery && (
            <div className={styles.gallery}>
              <h3>Seleccionar avatar</h3>
              <div className={styles.grid}>
                {avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt={`avatar-${i}`}
                    onClick={() => handleAvatarSelect(a)}
                    className={`${styles.thumb} ${editedUser.avatar === a ? styles.active : ""}`}
                  />
                ))}
              </div>
              <button className={styles.saveBtn} onClick={handleSave}>
                <i className="fa fa-save"></i> Guardar cambios
              </button>
            </div>
          )}

          {/* Galería de Fondos */}
          {showBgGallery && (
            <div className={styles.gallery}>
              <h3>Seleccionar fondo del chat</h3>
              <div className={styles.grid}>
                {backgrounds.map((b, i) => (
                  <img
                    key={i}
                    src={b}
                    alt={`bg-${i}`}
                    onClick={() => handleBackgroundSelect(b)}
                    className={`${styles.thumb} ${editedUser.background === b ? styles.active : ""}`}
                  />
                ))}
              </div>
              <button className={styles.saveBtn} onClick={handleSave}>
                <i className="fa fa-save"></i> Guardar cambios
              </button>
            </div>
          )}

          {/* Formulario de edición */}
          {!showAvatarGallery && !showBgGallery && (
            <div className={styles.form}>
              <label>Usuario</label>
              <input
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
              />
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={editedUser.password}
                onChange={handleChange}
              />
              <button className={styles.saveBtn} onClick={handleSave}>
                <i className="fa fa-save"></i> Guardar cambios
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SettingsPopup
