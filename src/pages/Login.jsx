import FormLogin from "../components/FormLogin"

const Login = () => {
    return (
        <>
        <section className="layout-login">
            <h1>"Otro chat más"</h1>
            <div className="form-container-login">
                <h2>Que bueno verte otra vez!</h2>
                <FormLogin />
            </div>
        </section>
        </>
    )
}

export default Login