import { useLoaderData } from "react-router-dom";

const BookDatabaseComponent = () => {

    const book = useLoaderData();

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
        </>
    );


}

export default BookDatabaseComponent;