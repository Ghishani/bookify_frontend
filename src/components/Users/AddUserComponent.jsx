import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddUserComponent = ({postUser}) => {

    const [userPayload, setUserPayload] = useState({
        username: "",
        userBooks: [],
        bookshelves: []
    });

    const navigate = useNavigate(); 
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        postUser(userPayload);
        navigate("/users");
    }

    const handleValueChange = (event) => {
        const propertyName = event.target.name;
        const copiedUser = { ...userPayload };
        copiedUser[propertyName] = event.target.value;
        setUserPayload(copiedUser);
    }

    return(
        <>
            <h3>Add User</h3>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="user-name">Username</label>
                    <input 
                        id= "user-name"
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        onChange= {handleValueChange}
                        value= {userPayload.username}
                    />
                    <input type="submit" value="add user" />
                </form>
            </section>
        </>
    )
}

export default AddUserComponent;