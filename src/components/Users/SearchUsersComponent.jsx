import { useState } from "react";

const SearchUsersComponent = ({users, setUsers, originalUserList}) => {

    const [inputText, setInputText] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();

        if(inputText === "") originalUserList();

        console.log("error in line 10 SearchUsersComponent")
        const searchResult = users.filter((user)=>user.username.toLowerCase().includes(inputText.toLowerCase().trim()));
        setUsers(searchResult);
    }

        return (
            <>
                <form onSubmit={handleSearch}>
                    <label htmlFor="search-field"> Search for a user: </label>
                    <input type="text" id="search-field" placeholder="username" value={inputText}
                        onChange={(event)=>setInputText(event.target.value)}/>
                    <input type="submit" />
                </form>
            </>
        )

}

export default SearchUsersComponent;