import { useLoaderData, useNavigate } from "react-router-dom";

const BookDatabaseComponent = ({deleteBookFromBookShelf, currentBookShelf}) => {
    const navigate = useNavigate();
    const book = useLoaderData();
    

    const handleButtonClick = () => {
        deleteBookFromBookShelf(currentBookShelf.id, book.id);
        navigate(`/users/bookshelves/${currentBookShelf.id}/books`);
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
             </section>
             <button onClick={handleButtonClick} style={{backgroundColor: "red"}}> Delete book from bookshelf</button>
        </>
    );


}

export default BookDatabaseComponent;