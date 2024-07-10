import { Link } from "react-router-dom";
import SearchBooksComponent from "../Users/BookShelves/SearchBooksComponent";

const BookListOnlineComponent = ({booksOnline, setBooksOnline}) => {

//    const bookList = books.map((book) => {
//     return(
//         <section key={book.id}  className="content-grid">
//             <p className="card"> {book.title}</p>
//         </section> 
//     )
//    })

return(
    <div>
         {/* <div className="search-box">
            <SearchBooksComponent users={users} setUsers={setUsers} originalUserList={originalUserList}/>
            <hr />
         </div >
         <div className="content-grid">
            {bookList}
            <Link to = "/books">List of Books</Link>
        </div> */}
    </div>
)

}

export default BookListOnlineComponent;