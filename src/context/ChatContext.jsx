import { createContext, useContext, useState, useEffect } from "react"
import avatar1 from "../assets/images/avatars/avatar1.png"
import avatar2 from "../assets/images/avatars/avatar2.png"
import avatar3 from "../assets/images/avatars/avatar3.png"
import avatar4 from "../assets/images/avatars/avatar4.png"
import avatar5 from "../assets/images/avatars/avatar5.png"
import avatar6 from "../assets/images/avatars/avatar6.png"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  // Nuevo estado global para el fondo del chat
  const [background, setBackground] = useState("")

  // Cargar usuarios y fondo desde localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem("users")
    const storedUserData = JSON.parse(localStorage.getItem("userData"))

    // Usuarios
    if (storedUsers !== null) {
      setUsers(JSON.parse(storedUsers))
    } else {
      const initialUsers = [
        {
          id: 1,
          name: "Juan Perez",
          status: "online",
          lastSeen: "",
          avatar: avatar6,
          messages: [{ id: 1, text: "Hola, como estás?", time: "12:00" }],
        },
        {
          id: 2,
          name: "Marita Rodriguez",
          status: "offline",
          lastSeen: "3 hours ago",
          avatar: avatar2,
          messages: [
            { id: 1, text: "RESPONDEEEE QUE TENGO HAMBREE!", time: "15:00" },
            { id: 2, text: "estoy desde las 12 en el banco!!", time: "15:10" },
            { id: 3, text: "ahora voy a casa, llevo empanadas :)", time: "20:00" },
          ],
        },
        {
          id: 3,
          name: "Carlos WiFi",
          status: "online",
          lastSeen: "",
          avatar: avatar3,
          messages: [
            { id: 1, text: "Me desconecto si no hay señal 👀", time: "10:25" },
            { id: 2, text: "¿Probaste apagar y volver a prender el router?", time: "10:27" },
          ],
        },
        {
          id: 4,
          name: "Luna Panqueque",
          status: "away",
          lastSeen: "5 minutes ago",
          avatar: avatar4,
          messages: [
            { id: 1, text: "Estoy cocinando, no me hablen 😋", time: "19:40" },
            { id: 2, text: "Ok... sí, se me quemó uno 🙃", time: "19:42" },
          ],
        },
        {
          id: 5,
          name: "Tito Memez",
          status: "offline",
          lastSeen: "1 hour ago",
          avatar: avatar5,
          messages: [
            { id: 1, text: "Te mandé el meme, pero no te rías tan fuerte 🤣", time: "17:00" },
            { id: 2, text: "¿Viste el del gato programador?", time: "17:05" },
          ],
        },
      ]
      setUsers(initialUsers)
      localStorage.setItem("users", JSON.stringify(initialUsers))
    }

    // Fondo
    if (storedUserData?.background) {
      setBackground(storedUserData.background)
    }
  }, [])

  // Guardar cambios del fondo en localStorage automáticamente
  useEffect(() => {
    if (background) {
      const storedUser = JSON.parse(localStorage.getItem("userData")) || {}
      storedUser.background = background
      localStorage.setItem("userData", JSON.stringify(storedUser))
    }
  }, [background])

  return (
    <ChatContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        background,
        setBackground,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { useChat, ChatProvider }