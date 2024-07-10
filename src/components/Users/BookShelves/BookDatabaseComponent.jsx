import { Link } from "react-router-dom";
import SearchBooksComponent from "./SearchBooksComponent";
import { useLoaderData } from "react-router-dom";

const BookDatabaseComponent = () => {

    const bookShelf = useLoaderData();

    console.log("bookshelf:" , bookShelf);

    const bookList = bookShelf.books.map((book) => (
        <section key={book.id} className="content-grid">
            <p className="card">
                {book.title}
            </p>
        </section>
    ));


    return(
        <div className="content-grid">
            {bookList}
        </div>
    )
}

export default BookDatabaseComponent;