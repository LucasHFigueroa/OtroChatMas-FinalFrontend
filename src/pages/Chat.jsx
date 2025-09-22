import SideBar from "../components/SideBar"
import ChatHeader from "../components/ChatHeader"
import MessageList from "../components/MessageList"
import ChatFooter from "../components/ChatFooter"
import styles from "../styles/pages/Chat.module.css"

const Chat = () => {
    return (
        <>
        <section className={styles.principal}>
            <SideBar />
            <hr/>
            <main className={styles.chatLayout}>
                <ChatHeader />
                <hr/>
                <MessageList />
                <ChatFooter />
            </main>
        </section>
        </>
    )
}

export default Chat