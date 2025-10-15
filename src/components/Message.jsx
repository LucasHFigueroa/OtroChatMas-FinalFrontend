import styles from "../styles/components/Message.module.css"

const Message = ({ text, time }) => {
  return (
    <div className={styles.messageSent}>
      <p>{text}</p>
      <p className={styles.timestamp}>{time}</p>
      <i
        className={`fa-solid fa-circle-check ${styles.seen}`}
        aria-hidden="true"
      ></i>
    </div>
  )
}

export default Message