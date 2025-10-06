import Message from "./Message";
import styles from "../styles/components/MessageList.module.css";

const MessageList = () => {
  return (
    <>
      <section className={styles.messageList}>
        <Message />
      </section>
    </>
  );
};

export default MessageList;
