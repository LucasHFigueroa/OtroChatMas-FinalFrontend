import styles from "../styles/components/SearchBar.module.css"

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value)
  }

  return (
    <div className={styles.searchBox}>
      <button>
        <i className="fas fa-search"></i>
      </button>
      <input
        type="search"
        placeholder="Buscá un vecino..."
        id={styles.searchInput}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar