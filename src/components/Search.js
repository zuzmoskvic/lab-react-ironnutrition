function Search({searchValue, setSearchValue}){
    const searchHandler = (e) => {setSearchValue(e.target.value)}
    return <div>
        <label>Search: </label>
        <input type="text" value={searchValue} onChange={searchHandler}></input>
    </div>
}

export default Search;