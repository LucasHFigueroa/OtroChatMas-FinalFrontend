import { useState } from "react"
import { useChat } from "../context/ChatContext"
import Message from "./Message"
import styles from "../styles/components/MessageList.module.css"
import selectChatImg from "../assets/images/backgrounds/seleccion-chat.png"
import SettingsPopup from "./SettingsPopup"
import NotificationBanner from "./NotificationBanner"

const MessageList = () => {
  const { users, selectedUser } = useChat()
  const [showSettings, setShowSettings] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  
  const user = users.find((u) => u.id === selectedUser)

  const handleHelpClick = () => {
    const helpUrl = `${window.location.origin}/help`
    window.open(helpUrl, "_blank")
  }
  const handleSaveSuccess = () => {
    setShowSettings(false)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  if (!user) {
    return (
      <>
        <section className={styles.messageList}>
          <header>
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
          </header>
          <div className={styles.selectChat}>
            <h2 className={styles.chatTitle}> Seleccioná un vecino para chatear</h2>
            <img
              src={selectChatImg}
              alt="Imagen de dos personas chateando"
              className={styles.selectChatImg} />
          </div>
        </section>

        {showSettings && (
          <SettingsPopup
            onClose={() => setShowSettings(false)}
            onSaveSuccess={handleSaveSuccess}
          />
        )}

        {showNotification && (
          <NotificationBanner
            message="Cambios guardados correctamente"
            type="info"
          />
        )}
      </>
    )
  }

  return (
    <section className={styles.messageList}>
      {user.messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </section>
  )
}

export default MessageList