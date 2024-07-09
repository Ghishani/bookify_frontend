import { useState, useEffect} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePageComponent from "./components/Homepage/HomePageComponent";
import BookOnlineComponent from "./components/BookOnlineComponent";
import UsersComponent from "./components/Users/UsersComponent";
import RecommendationsComponent from "./components/Recommendations/RecommendationsComponent";
import AddUserComponent from "./components/Users/AddUserComponent";

const BookifyContainer = ()=> {

    const [users, setUsers] = useState([]);
    const [booksOnline, setBooksOnline] = useState([]);
    const [quote, setQuote] = useState("");

    const fetchUsers = async () => {

        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        setUsers(data);
    }

    const postUser = async (newUser) => {
        
        const response = await fetch ("http://localhost:8080/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        });
        const savedUser = await response.json();
        setUsers([...users, savedUser]);
    }

    useEffect(() => {
        fetchUsers()
    }, []);



    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <HomePageComponent />,
                children: [
                    {
                        path: "/books",
                        element: <BookOnlineComponent />,
                    },
                    {
                        path: "/users",
                        element: <UsersComponent users= {users} setUsers = {setUsers} 
                                originalUserList={fetchUsers}
                                />,
                    },
                    {
                        path: "/users/new",
                        element: <AddUserComponent postUser = {postUser}/>,
                    },
                    {
                        path: "/recommendations",
                        element: <RecommendationsComponent />,
                    },
                ]
            }
        ]
    )


    return(
        <>
        <RouterProvider router={router} />
        </>
    )

}

export default BookifyContainer;