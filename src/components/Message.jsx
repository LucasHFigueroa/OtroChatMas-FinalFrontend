import styles from "../styles/components/Message.module.css"

const Message = ({ message }) => {
  if (!message) return null;

  const messageType = message.type || "received";

  const messageClass =
    messageType === "sent" ? styles.messageSent : styles.messageReceived;

  return (
<div className={messageClass}>
      <p>{message.text}</p>
      <p className={styles.timestamp}>{message.time}</p>

      {messageType === "sent" && (
        <i
          className={`fa-solid fa-circle-check ${styles.seen}`}
          aria-hidden="true"
        ></i>
      )}
    </div>
  )
}

export default Message