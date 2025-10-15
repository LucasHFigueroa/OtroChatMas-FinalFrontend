import {useState} from "react"
import {useChat} from "../context/ChatContext"
import styles from "../styles/components/ChatFooter.module.css"

const ChatFooter = () => {
  const { users, selectedUser, setUsers } = useChat()
  const [msg, setMsg] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedUser || msg.trim() === "") return

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    // Actualizamos el array de usuarios inmutablemente
    const updatedUsers = users.map((u) =>
      u.id === selectedUser ? { ...u, messages: [...u.messages, newMessage] } : u
    )

    setUsers(updatedUsers)
    setMsg("")
  }

  return (
    <footer className={styles.chatFooter}>
      <form className={styles.textBox} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribí un mensaje..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          id={styles.inputMessage}
        />
        <button type="submit" id={styles.sendButton}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </footer>
  )
}

export default ChatFooter
