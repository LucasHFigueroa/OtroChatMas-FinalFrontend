import { useChat } from "../context/ChatContext"
import SideBar from "../components/SideBar"
import ChatHeader from "../components/ChatHeader"
import MessageList from "../components/MessageList"
import ChatFooter from "../components/ChatFooter"
import styles from "../styles/pages/Chat.module.css"

const Chat = () => {
  const { background, selectedUser} = useChat()
  
  const mobileClass = selectedUser ? styles.showChat : ''

  return (
    <>
      <section
        className={`${styles.principal} ${mobileClass}`}
        style={{background: `url(${background || "../../assets/images/backgrounds/bg1.png"}) center/cover no-repeat`,
        }}>
        <div id="sidebarPanel" className={styles.sidebarWrapper}>
          <SideBar id="sidebarPanel" />
        </div>
        <hr />
        <main id="chatPanel" className={styles.chatLayout}>
          <ChatHeader />
          <hr className={styles.divider} />
          <MessageList />
          {selectedUser && <ChatFooter />}
        </main>
      </section>
    </>
  );
};

export default Chat;
