import { useState } from "react";
import FormRegister from "./FormRegister";
import NotificationBanner from "./NotificationBanner";
import styles from "../styles/components/Register.module.css";

const Register = ({ onToggleView }) => {
  const [showBanner, setShowBanner] = useState(false);

  const handleRegisterSuccess = () => {
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
      onToggleView();
    }, 3500);
  };

  return (
    <>
      {showBanner && (
        <NotificationBanner 
        message="¡Registro exitoso! Ya sos parte de nuestra vecindad"
        type="success"
        onClose={() => setShowBanner(false)} 
        className={styles.bannerReg} />
      )}

      <section className={styles.layoutRegistration}>
        <h1 className={styles.title}>"Desarrollo FrontEnd"</h1>
        <div className={styles.formContainerRegistration}>
          <h2 className={styles.subtitle}>
            Esto es una simulación, poné cualquier cosa
          </h2>
          <FormRegister onRegisterSuccess={handleRegisterSuccess} />
          <button
            type="submit"
            className={styles.btnLogin}
            onClick={onToggleView}
          >
            Volver al inicio
          </button>
        </div>
      </section>
    </>
  );
};

export default Register;
