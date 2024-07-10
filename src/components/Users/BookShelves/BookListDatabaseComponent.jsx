import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const BookListDatabaseComponent = ({currentUser, setCurrentBookShelf}) => {

    const bookShelf = useLoaderData();
    setCurrentBookShelf(bookShelf);

    const bookList = bookShelf.books.map((book) => (
        <section key={book.id} className="content-grid">
            <p className="card">
                <Link to={`/users/bookshelves/books/${book.id}`}>
                    {book.title}
                </Link>
                
            </p>
        </section>
    ));


    return(
        <section className="content-grid" key="book.id">
            <h3>{`${currentUser.username}'s ${bookShelf.name} bookshelf`}</h3>
            {bookList}
        </section>
    )
}

export default BookListDatabaseComponent;