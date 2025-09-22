import styles from "../styles/components/ChatHeader.module.css";
import avatar from "../assets/images/avatars/avatar2.png";

const ChatHeader = () => {
    return (
        <>
        <header className={styles.chatHeader}>
            <div className={styles.contactHeader}>
                <img src={avatar} alt="imagen de perfil" className={styles.fotoPerfil} />
                <div>
                    <h4>Aiden Chavez</h4>
                    <p>Last seen: 2 hours ago</p>
                </div>
            </div>
            <div className={styles.chatActions}>
                <button title="Sacar foto"><i className="fa fa-camera" aria-hidden="true"></i></button>
                <button title="subir imagen"><i className="fa fa-image" aria-hidden="true"></i></button>
                <button title="editar configuración"><i className="fa fa-cogs" aria-hidden="true"></i></button>
                <button title="Ayuda"><i className="fa fa-question" aria-hidden="true"></i></button>
            </div>
            <div className={styles.chatActionsMobile}   >
                <button title="Menú"><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </header>
        </>
    )
}

export default ChatHeader;