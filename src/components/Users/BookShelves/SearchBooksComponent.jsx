import { useState } from "react";

const SearchBooksComponent = ({books}, {}) => {

    const [inputText, setInputText] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();

        if(inputText === "") originalBookList();

        const searchResult = user.books.filter(book => 
            book.title.toLowerCase().includes(inputText.toLowerCase())
        )
        setUser(searchResult);
 };

    return(
        <>
        <form onSubmit={handleSearch}>
            <label htmlFor="search-field"> search For Book Title: </label>
            <input
                type="text"
                id="search-field" 
                value={inputText}
                placeholder="Book Title"
                onChange= {(event)=>setInputText(event.target.value)}
                ></input>
            </form>
        </>
        
    )
}

export default SearchBooksComponent;


