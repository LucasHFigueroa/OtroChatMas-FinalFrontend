import styles from "../styles/components/SearchBar.module.css"

const SearchBar = () => {
    return (
        <>
        <div className={styles.searchBox}>
            <button><i className="fas fa-search"></i></button>
            <input type="search" placeholder="Search..." id={styles.searchInput}></input>
        </div>
        </>
    )
}

export default SearchBar