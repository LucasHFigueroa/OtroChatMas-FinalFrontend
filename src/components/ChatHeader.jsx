const ChatHeader = () => {
    return (
        <>
        <header className="chat-header">
            <div className="contact-header">
                <img src="./img/avatar1.png" alt="imagen de perfil" className="foto-perfil" />
                <div>
                    <h4>Aiden Chavez</h4>
                    <p>Last seen: 2 hours ago</p>
                </div>
            </div>
            <div className="chat-actions">
                <button title="Sacar foto"><i className="fa fa-camera" aria-hidden="true"></i></button>
                <button title="subir imagen"><i className="fa fa-picture-o" aria-hidden="true"></i></button>
                <button title="editar configuración"><i className="fa fa-cogs" aria-hidden="true"></i></button>
                <button title="Ayuda"><i className="fa fa-question" aria-hidden="true"></i></button>
            </div>
            <div className="chat-actions-mobile">
                <button title="Menú"><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </header>
        </>
    )
}

export default ChatHeader;