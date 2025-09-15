const SearchBar = () => {
    return (
        <>
        <div className="search-box">
            <button><i className="fas fa-search"></i></button>
            <input type="search" placeholder="Search..." id="search-input"></input>
        </div>
        </>
    )
}

export default SearchBar