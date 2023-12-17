function  SearchBar(props){
    const {value,setSearchText} = props;
    return(

        <input 
            className="search-bar"
            type="text"
            value={value}
            placeholder="type something"
            onChange={(event)=>{setSearchText(event.target.value)}}
        />

    );
};
export default SearchBar;