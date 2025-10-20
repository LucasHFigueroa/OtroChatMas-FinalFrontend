import { useChat } from "../context/ChatContext"
import SideBar from "../components/SideBar";
import ChatHeader from "../components/ChatHeader";
import MessageList from "../components/MessageList";
import ChatFooter from "../components/ChatFooter";
import styles from "../styles/pages/Chat.module.css";

const Chat = () => {
  const { background } = useChat()


  return (
    <>
      <section
        className={styles.principal}
        style={{
          background: `url(${background || "../../assets/images/backgrounds/bg1.png"}) center/cover no-repeat`,
        }}
      >
        <SideBar />
        <hr />
        <main className={styles.chatLayout}>
          <ChatHeader />
          <hr />
          <MessageList />
          <ChatFooter />
        </main>
      </section>
    </>
  );
};

export default Chat;
