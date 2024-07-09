import { useState, useEffect} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePageComponent from "./components/Homepage/HomePageComponent";
import BookOnlineComponent from "./components/BookOnlineComponent";
import UsersComponent from "./components/Users/UsersComponent";
import RecommendationsComponent from "./components/Recommendations/RecommendationsComponent";
import AddUserComponent from "./components/Users/AddUserComponent";
import AboutUsComponent from "./components/Homepage/Footer/AboutUsComponent";
import TermsComponent from "./components/Homepage/Footer/TermsComponent";
import PrivacyComponent from "./components/Homepage/Footer/PrivacyComponent";
import ContactUsComponent from "./components/Homepage/Footer/ContactUsComponent";
import FAQComponent from "./components/Homepage/Footer/FAQComponent";
import BookShelvesComponent from "./components/Users/BookShelves/BookShelvesComponent";

const BookifyContainer = ()=> {

    const [users, setUsers] = useState([]);

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

    const deleteUser = async (id) => {
        
        await fetch (`http://localhost:8080/users/${id}`, {
            method: "DELETE",
        } );

        setUsers(users.filter(user => user.id!== id));
    }

    const userLoader = ({params}) => {
        const userToView = users.find((user) => {
            return user.id === parseInt(params.id);
        });
        return userToView;
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
                    {
                        path: "/users/:id/bookshelves",
                        loader: userLoader,
                        element: <BookShelvesComponent deleteUser = {deleteUser}/>
                    },
                    {
                        path: "/footer/about-us",
                        element: <AboutUsComponent />,
                    },
                    {
                        path: "/footer/terms",
                        element: <TermsComponent />,
                    },
                    {
                        path: "/footer/privacy",
                        element: <PrivacyComponent />,
                    },
                    {
                        path: "/footer/contact-us",
                        element: <ContactUsComponent />,
                    },
                    {
                        path: "/footer/faq",
                        element: <FAQComponent />,
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