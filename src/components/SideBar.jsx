import SearchBar from "./SearchBar";
import UserList from "./UserList";
import styles from "../styles/components/SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <SearchBar />
        <UserList />
      </aside>
    </>
  );
};

export default SideBar;
