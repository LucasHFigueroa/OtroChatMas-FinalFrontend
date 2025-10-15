import { createContext, useContext, useState, useEffect } from "react"
import avatar1 from "../assets/images/avatars/avatar1.png"
import avatar2 from "../assets/images/avatars/avatar2.png"
import avatar3 from "../assets/images/avatars/avatar3.png"
import avatar4 from "../assets/images/avatars/avatar4.png"
import avatar5 from "../assets/images/avatars/avatar5.png"
import avatar6 from "../assets/images/avatars/avatar6.png"
import avatar7 from "../assets/images/avatars/avatar7.png"
import avatar8 from "../assets/images/avatars/avatar8.png"

const ChatContext = createContext ()

const ChatProvider = ({children}) => {
  const [users, setUsers] = useState ([])
  const [selectedUser, setSelectedUser] = useState (null)

  useEffect(() => {
    const storedUsers = localStorage.getItem("users")

    if (storedUsers !== null) {
      setUsers(JSON.parse(storedUsers))
    } else {
      const initialUsers = [
        {
          id: 1,
          name: "Juan Perez",
          status: "online",
          lastSeen: "",
          avatar: avatar1,
          messages: [
            { id: 1, text: "Hola, como estás?", time: "12:00" }
          ],
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
            { id: 3, text: "ahora voy a casa, llevo empanadas :)", time: "20:00" }
          ]
        },
      ]
      setUsers(initialUsers)
      localStorage.setItem("users", JSON.stringify(initialUsers))
    }
  }, [])

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users])

  return (
    <ChatContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { useChat, ChatProvider }