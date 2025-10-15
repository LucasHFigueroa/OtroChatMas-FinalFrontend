import { createContext, useContext, useState, useEffect } from "react"

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
          messages: [{ id: 1, text: "Hola, como estás?", time: "12:00" }],
        },
        {
          id: 2,
          name: "Marita Rodriguez",
          status: "offline",
          lastSeen: "3 hours ago",
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