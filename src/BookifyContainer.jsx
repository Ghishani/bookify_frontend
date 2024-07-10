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
import SearchBooksComponent from "./components/Users/BookShelves/SearchBooksComponent";
import AddBookComponent from "./components/Users/BookShelves/AddBookComponent";
import BookListDatabaseComponent from "./components/Users/BookShelves/BookListDatabaseComponent";
import BookDatabaseComponent from "./components/Users/BookShelves/BookDatabaseComponent";

const BookifyContainer = ()=> {

    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState ([]);
    const [currentUser, setCurrentUser] = useState ({});
    const [currentUserBook, setCurrentUserBook] = useState({});
    const [currentBookShelf, setCurrentBookShelf] = useState ({});
    const [currentBook, setCurrentBook] = useState({});
    
    const fetchUsers = async () => {

        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        setUsers(data);
    }


    const postUser = async (newUser) => {
        
        const response = await fetch("http://localhost:8080/users", {
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

    const deleteBookFromBookShelf = async (bookShelfId, bookId) => {
        // localhost:8080/bookshelves/1/books/2
        await fetch (`http://localhost:8080/bookshelves/${bookShelfId}/books/${bookId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"}
        } );
        await fetchUsers();
    }

    const userLoader = ({params}) => {
        const userToView = users.find((user) => {
            return user.id === parseInt(params.id);
        });
        return userToView;
    }

    const bookShelfLoader = ({params}) => {
        const bookShelfToView = users.map(user => user.bookshelves).flat().find((bookShelf) => {
            return bookShelf.id === parseInt(params.id);
        });
        return bookShelfToView;
    }

    const bookLoader = ({params}) => {
        const bookToView = users.map(user => user.bookshelves)
        .flat()
        .map(bookShelf => bookShelf.books)
        .flat()
        .find((book) => {
            return book.id === parseInt(params.id);
        });
        return bookToView;
    }

    const fetchUserBook= async (userId, bookId) => {
        const userBookResponse = await fetch(`http://localhost:8080/users-books/${userId}/${bookId}`);
        const userBookData = await userBookResponse.json();
        setCurrentUserBook(userBookData);
    } 

    const markBookAsRead = async () => {
        await fetch (`http://localhost:8080/users-books/${currentUserBook.id}?readingStatus=READ`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"}
        } );
        await fetchUsers();
    }

    const fetchBooksFromBookShelf = async (id) => {
        const response = await fetch(`http://localhost:8080/bookshelves/${id}`);
        const data = await response.json();
        setBooks(data);
    }

    const postBook = async (bookShelf, newBook) => {
        const response = await fetch(`http://localhost:8080/bookshelves/${bookShelf.id}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBook)
        });
        const savedBook = await response.json();
        setBooks([...books, savedBook]);
    };


    useEffect(() => {
        fetchUsers()
        fetchBooksFromBookShelf()
    }, []);

    useEffect(() => {
        fetchUserBook(currentUser.id, currentBook.id)
    }, [currentBook, currentUser]);

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <HomePageComponent />,
                children: [
                    {
                        path: "/books-online",
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
                        element: <BookShelvesComponent deleteUser = {deleteUser} setCurrentUser={setCurrentUser}/>
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
                    {
                        path: "/books/List",
                        element: <SearchBooksComponent/>,
                    },
                    {
                        path: "/books/new",
                        element: <AddBookComponent postBook = {postBook}/>,
                    },
                    {
                        path: "/users/bookshelves/:id/books",
                        loader: bookShelfLoader,
                        element: <BookListDatabaseComponent  currentUser={currentUser} setCurrentBookShelf={setCurrentBookShelf}/>
                    },
                    {
                        path: "/users/bookshelves/books/:id",
                        loader: bookLoader,
                        element: <BookDatabaseComponent 
                            deleteBookFromBookShelf = {deleteBookFromBookShelf} 
                            currentBookShelf={currentBookShelf} 
                            markBookAsRead = {markBookAsRead} 
                            currentUser = {currentUser} 
                            fetchUserBook = {fetchUserBook} 
                            currentUserBook = {currentUserBook} 
                            setCurrentBook={setCurrentBook}/>
                    }
                    
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