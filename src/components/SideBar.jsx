import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"
import SearchBar from "./SearchBar"
import UserList from "./UserList"
import styles from "../styles/components/SideBar.module.css"

const SideBar = ({ id }) => {
  const { users, setSelectedUser } = useChat()
  const [usersToRender, setUsersToRender] = useState(users)

  // Cuando cambian los usuarios globales, actualizamos la lista a renderizar
  useEffect(() => {
    setUsersToRender(users)
  }, [users])

  // 🔍 función que pasa al SearchBar
  const handleSearch = (searchTerm) => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setUsersToRender(result)
  }

  return (
    <aside id={id} className={styles.sidebar}>
      <SearchBar onSearch={handleSearch} />
      <UserList users={usersToRender} onSelect={setSelectedUser} />
    </aside>
  )
}

export default SideBar