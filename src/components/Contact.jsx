import styles from "../styles/components/Contact.module.css";
import avatar from "../assets/images/avatars/avatar1.png";

const Contact = () => {
  return (
    <>
      <li className={styles.contact}>
        <img
          src={avatar}
          alt="imagen de perfil"
          className={styles.fotoPerfil}
        ></img>
        <div>
          <h4>Vincent Porter</h4>
          <p>
            <span className={`${styles.dot} ${styles.online}`}></span>online
          </p>
        </div>
      </li>
    </>
  );
};

export default Contact;
