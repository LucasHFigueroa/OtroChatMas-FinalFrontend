import styles from "../styles/components/NotificationBanner.module.css"

const NotificationBanner = ({ 
  message = "Operación exitosa 🎉", 
  type = "success",
  className = "",
}) => {
  const emojiMap = {
    success: "🎉",
    error: "❌",
    info: "💾",
    warning: "⚠️",
  }

  const emoji = emojiMap[type] || ""

  return (
    <div className={`${styles.banner} ${styles[type]} ${className}`}>
      <span className={styles.emoji}>{emoji}</span>
      <p className={styles.text}>{message}</p>
    </div>
  )
}

export default NotificationBanner