import { useEffect, useState } from "react"
import styles from "../styles/components/Message.module.css"

const Message = ({ message }) => {
  if (!message) return null

  const messageType = message.type || "received"
  const messageClass =
    messageType === "sent" ? styles.messageSent : styles.messageReceived

  const [status, setStatus] = useState(message.status || "pending")

  useEffect(() => {
    if (messageType === "sent" && status === "pending") {
      const timer = setTimeout(() => {
        setStatus("seen")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [messageType, status])

  const renderStatusIcon = () => {
    if (messageType === "received") {
      return (
        <i
          className={`fa-solid fa-check-double ${styles.seen}`}
          aria-hidden="true"
        ></i>
      )
    }

    if (messageType === "sent") {
      if (status === "pending") {
        return (
          <i
            className={`fa-solid fa-check ${styles.noSeen}`}
            aria-hidden="true"
          ></i>
        )
      } else if (status === "seen") {
        return (
          <i
            className={`fa-solid fa-check-double ${styles.seen}`}
            aria-hidden="true"
          ></i>
        )
      }
    }

    return null
  }

  return (
    <div className={messageClass}>
      <p>{message.text}</p>
      <div className={styles.timestampSent}>
        <p className={styles.timestamp}>{message.time}</p>
        {renderStatusIcon()}
      </div>
    </div>
  )
}

export default Message