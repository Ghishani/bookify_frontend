import { useLoaderData } from "react-router-dom";

const BookShelvesComponent = () => {
    
    const user = useLoaderData();

    const bookShelfList = user.bookshelves.map((bookshelf)=>{
        return(
            <>
                <section key={bookshelf.id} className="content-grid">
                        <p className="card">{bookshelf.name} </p>
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