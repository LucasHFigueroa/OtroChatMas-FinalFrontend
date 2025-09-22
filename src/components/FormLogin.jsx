import styles from "../styles/components/FormLogin.module.css"

const FormLogin = () => {
    return (
    <>
        <form action="#">
            <div className={styles.inputBox}>
            <input type="text" placeholder="Usuario o Email..." required />
            <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className={styles.inputBox}>
            <input type="password" placeholder="Contraseña" required />
            <i className="fa fa-eye" aria-hidden="true"></i>
            </div>
        </form>
    </>
    )
}

export default FormLogin