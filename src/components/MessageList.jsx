import { useChat } from "../context/ChatContext"
import Message from "./Message"
import styles from "../styles/components/MessageList.module.css"

const MessageList = () => {
  const { users, selectedUser } = useChat()
  const user = users.find((u) => u.id === selectedUser)

  // Si no hay usuario seleccionado, mostramos un mensaje de guía
  if (!user) {
    return (
      <section className={styles.messageList}>
        <p className={styles.noChat}>Seleccioná un chat para empezar 💬</p>
      </section>
    )
  }

  return (
    <section className={styles.messageList}>
      {user.messages.map((msg) => (
        <Message key={msg.id} text={msg.text} time={msg.time} />
      ))}
    </section>
  )
}

export default MessageList