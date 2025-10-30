import { useState } from "react";
import { useChat } from "../context/ChatContext";
import SettingsPopup from "./SettingsPopup";
import NotificationBanner from "./NotificationBanner";
import styles from "../styles/components/ChatHeader.module.css";

const ChatHeader = () => {
  const { users, selectedUser, setSelectedUser } = useChat();

  const [showSettings, setShowSettings] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const user = users.find((u) => u.id === selectedUser);
  if (!user) return null;

  const handleHelpClick = () => {
    const helpUrl = `${window.location.origin}/help`;
    window.open(helpUrl, "_blank");
    setShowMobileMenu(false);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
    setShowMobileMenu(false);
  };

  const handleSaveSuccess = () => {
    setShowSettings(false);

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <header className={styles.chatHeader}>
        <div className={styles.contactHeader}>
          <button
            className={styles.backButton}
            onClick={handleBackClick}
            title="Volver a la lista"
          >
            <i className="fa fa-arrow-left" />
          </button>

          <img
            src={user.avatar}
            alt={`Foto de ${user.name}`}
            className={styles.fotoPerfil}
          />

          <div>
            <h4>{user.name}</h4>
            <p>
              <span
                className={`${styles.dot} ${
                  user.status === "online" ? styles.online : styles.offline
                }`}
              />
              {user.status === "online"
                ? "En línea"
                : `Última conexión: ${user.lastSeen}`}
            </p>
          </div>
        </div>

        {/* Acciones desktop */}
        <div className={styles.chatActions}>
          <button title="Editar configuración" onClick={handleOpenSettings}>
            <i className="fa fa-cogs" />
          </button>
          <button title="Centro de Ayuda" onClick={handleHelpClick}>
            <i className="fa fa-question" />
          </button>
        </div>

        {/* Acciones mobile */}
        <div className={styles.chatActionsMobile}>
          <button title="Menú" onClick={toggleMobileMenu}>
            <i className="fa fa-bars" />
          </button>

          {showMobileMenu && (
            <div className={styles.mobileMenu}>
              <button onClick={handleOpenSettings}>
                <i className="fa fa-cogs" /> Configuración
              </button>
              <button onClick={handleHelpClick}>
                <i className="fa fa-question" /> Ayuda
              </button>
            </div>
          )}
        </div>
      </header>
      {/* Modal de ajustes */}
      {showSettings && (
        <SettingsPopup
          onClose={() => setShowSettings(false)}
          onSaveSuccess={handleSaveSuccess}
        />
      )}

      {/* Banner flotante */}
      {showNotification && (
        <NotificationBanner
          message="Cambios guardados correctamente"
          type="info"
        />
      )}
    </>
  );
};

export default ChatHeader;
