import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddBookComponent = ({postBook}) => {
 // Initializes the bookPayload state with an empty book object
    const [bookPayload, setBookPayload] = useState({
        title: "",
        author: "",
        isbn: 0,
        publicationYear: "",
        rating: 0,
        genre: "",
    });

    const navigate = useNavigate(); 
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        postBook(bookPayload);      // Submits the bookPayload to the postBook function
        navigate("/books");
    }

    const handleValueChange = (event) => {
        const propertyName = event.target.name;
        const copiedBook = { ...bookPayload };      // Creates a copy of the bookPayload
        copiedBook[propertyName] = event.target.value;
        setBookPayload(copiedBook);
    }

    return (
        <>
            <h3>Add Book</h3>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="book-title">Title</label>
                    <input 
                        id="book-title"
                        name="title"
                        type="text"
                        placeholder="Enter book title"
                        onChange={handleValueChange}
                        value={bookPayload.title}
                    />
                    <label htmlFor="book-author">Author</label>
                    <input 
                        id="book-author"
                        name="author"
                        type="text"
                        placeholder="Enter author name"
                        onChange={handleValueChange}
                        value={bookPayload.author}
                    />
                    <label htmlFor="book-genre">Genre</label>
                    <input 
                        id="book-genre"
                        name="genre"
                        type="text"
                        placeholder="Enter book genre"
                        onChange={handleValueChange}
                        value={bookPayload.genre}
                    />
                    <label htmlFor="published-date">Published Date</label>
                    <input 
                        id="published-date"
                        name="publishedDate"
                        type="date"
                        onChange={handleValueChange}
                        value={bookPayload.publishedDate}
                    />
                    <input type="submit" value="Add Book" />
                </form>
            </section>
        </>
    )
}
export default AddBookComponent;