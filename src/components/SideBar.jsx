import SearchBar from "./SearchBar";
import Contact from "./Contact";
import styles from "../styles/components/SideBar.module.css"

const SideBar = () => {
    return (
        <>
        <aside className={styles.sidebar}>
        <SearchBar />
        <ul className={styles.contactList}>
            <Contact />
        </ul>
        </aside>
        </>
    )
}

export default SideBar;