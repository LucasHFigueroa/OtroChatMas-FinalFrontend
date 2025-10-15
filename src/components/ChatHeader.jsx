import { useChat } from "../context/ChatContext"
import styles from "../styles/components/ChatHeader.module.css"
import avatar from "../assets/images/avatars/avatar2.png"

const ChatHeader = () => {
  const { users, selectedUser } = useChat()
  const user = users.find((u) => u.id === selectedUser)

  if (!user) return null

  return (
    <header className={styles.chatHeader}>
      <div className={styles.contactHeader}>
        <img src={avatar} alt={`Avatar de ${user.name}`} className={styles.fotoPerfil} />
        <div>
          <h4>{user.name}</h4>
          <p>
            <span className={`${styles.dot} ${user.status === "online" ? styles.online : styles.offline}`}></span>
            {user.status === "online" ? "En línea" : `Última conexión: ${user.lastSeen}`}
          </p>
        </div>
      </div>
      <div className={styles.chatActions}>
        <button title="Sacar foto"><i className="fa fa-camera" /></button>
        <button title="Subir imagen"><i className="fa fa-image" /></button>
        <button title="Editar configuración"><i className="fa fa-cogs" /></button>
        <button title="Ayuda"><i className="fa fa-question" /></button>
      </div>
      <div className={styles.chatActionsMobile}>
        <button title="Menú"><i className="fa fa-bars" /></button>
      </div>
    </header>
  )
}

export default ChatHeader