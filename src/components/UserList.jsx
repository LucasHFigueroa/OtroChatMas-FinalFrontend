import styles from "../styles/components/Contact.module.css"


const UserList = ({ users, onSelect }) => {
  
  return (
    <ul className={styles.contactList}>
      {users.length === 0 ? (
        <p className={styles.noResults}>No se encontraron resultados...</p>
      ) : (
        users.map((user) => (
          console.log("Renderizando usuario:", user.name, user.avatar),
          <li
            key={user.id}
            className={styles.contact}
            onClick={() => onSelect(user.id)}
            > 
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
                ></span>
                {user.status === "online" ? "online" : user.lastSeen}
              </p>
            </div>
          </li>
        ))
      )}
    </ul>
  )
}

export default UserList