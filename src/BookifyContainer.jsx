import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePageComponent from "./components/Homepage/HomePageComponent";
import NavigationBar from "./components/Homepage/NavigationBar";

const BookifyContainer = ()=> {

    const [users, setUsers] = useState([]);
    const [booksOnline, setBooksOnline] = useState([]);
    const [quote, setQuote] = useState("");

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <HomePageComponent />,
                children: [
                    {
                        path: "/",
                        element: <NavigationBar />
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