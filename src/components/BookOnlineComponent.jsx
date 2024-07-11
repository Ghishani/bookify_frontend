const BookOnlineComponent = ({booksOnline}) => {

    if (!booksOnline || !booksOnline.items) {
        return <p>Loading ... </p>;
    }

    console.log("books online: " + booksOnline);

    const bookList = booksOnline.items.map((book) => (
        <section key={book.id} className="content-grid">
            <p className="card">
                {book.volumeInfo.title}
            </p>
        </section>
    ));


    return (
        <>
          <section className="content-grid">
            {bookList}
        </section>
        </>
    );
}

export default BookOnlineComponent;