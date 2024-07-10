import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BookDatabaseComponent = ({deleteBookFromBookShelf, currentBookShelf, markBookAsRead, currentUser, fetchUserBook, currentUserBook}) => {
    const navigate = useNavigate();
    const book = useLoaderData();
    
    console.log(currentUserBook);

    
    useEffect(() => {
        fetchUserBook(currentUser.id, book.id)
    }, []);

    const handleButtonClick = () => {
        deleteBookFromBookShelf(currentBookShelf.id, book.id);
        navigate(`/users/bookshelves/${currentBookShelf.id}/books`);
    }

    const handleButtonClickForMark = () => {
        markBookAsRead();
    }

    return(
        <>
             <section id="book.id" className="single-book-detail">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>
                <p>Publication year: {book.publicationYear}</p>
                <p>Rating: {book.rating}</p>
                <p>Genre: {book.genre}</p>
                <p>Reading status: {`${currentUserBook.readingStatus}`}</p>
             </section>
             <button onClick={handleButtonClick} style={{backgroundColor: "red"}}> Delete book from bookshelf</button>
             <button onClick={handleButtonClickForMark} style={{backgroundColor: "green"}}> Mark it as READ</button>
        </>
    );


}

export default BookDatabaseComponent;