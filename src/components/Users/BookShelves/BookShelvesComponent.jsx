import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


const BookShelvesComponent = () => {
    
    const user = useLoaderData();

    console.log("user : " , user); 

    const bookShelfList = user.bookshelves.map((bookShelf)=>{
        return(
            <>
                <section key={bookShelf.id} className="content-grid">
                 <Link to={`/users/bookshelves/${bookShelf.id}/books`}>
                        <p className="card">{bookShelf.name} </p>
                 </Link>
                </section>
            </>
        )
    });

    return(
        <div className="content-grid">
            {bookShelfList}
        </div>
    );

}

export default BookShelvesComponent;