import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useChat } from "../context/ChatContext"
import SettingsPopup from "./SettingsPopup"
import styles from "../styles/components/ChatHeader.module.css"

const ChatHeader = () => {
  const { users, selectedUser } = useChat()
  const [showSettings, setShowSettings] = useState(false) 
  const navigate = useNavigate()

  const user = users.find((u) => u.id === selectedUser)
  if (!user) return null

  const handleHelpClick = () => {
    const helpUrl = `${window.location.origin}/help`
    window.open(helpUrl, "_blank")
  } 

  return (
    <>
      <header className={styles.chatHeader}>
        <div className={styles.contactHeader}>
          <img
            src={user.avatar}
            alt={`Foto de ${user.name}`}
            className={styles.fotoPerfil}
          />
          <div>
            <h4>{user.name}</h4>
            <p>
              <span
                className={`${styles.dot} ${
                  user.status === "online" ? styles.online : styles.offline
                }`}
              ></span>
              {user.status === "online"
                ? "En línea"
                : `Última conexión: ${user.lastSeen}`}
            </p>
          </div>
        </div>

        <div className={styles.chatActions}>
          <button 
            title="Editar configuración"
            onClick={() => setShowSettings(true)}
          >
            <i className="fa fa-cogs" />
          </button>
          <button 
            title="Centro de Ayuda"
            onClick={handleHelpClick}
          >
            <i className="fa fa-question" />
          </button>
        </div>

        <div className={styles.chatActionsMobile}>
          <button title="Menú">
            <i className="fa fa-bars" />
          </button>
        </div>
      </header>
      {showSettings && (
        <SettingsPopup onClose={() => setShowSettings(false)} />
      )}
    </>
  )
}

export default ChatHeader