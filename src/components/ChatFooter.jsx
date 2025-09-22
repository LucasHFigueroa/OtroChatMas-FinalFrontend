import styles from "../styles/components/ChatFooter.module.css"

const ChatFooter = () => {
    return (
        <footer className={styles.chatFooter}>
            <div className={styles.textBox}>
                <input type="text" placeholder="Enter text here..." id={styles.inputMessage} />
                <button id={styles.sendButton}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </footer>
    )
}

export default ChatFooter;