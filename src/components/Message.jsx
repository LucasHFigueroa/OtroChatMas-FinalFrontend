import styles from "../styles/components/Message.module.css";

const message = () => {
  return (
    <div className={styles.messageSent}>
      <p>Hi Aiden, how are you? How is the project coming along?</p>
      <p className={styles.timestamp}>10:10</p>
      <i
        className={`fa-solid fa-circle-check ${styles.seen}`}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default message;
