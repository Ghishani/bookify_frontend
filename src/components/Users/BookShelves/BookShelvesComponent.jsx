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
        <section className="content-grid" key="user.id">
            <h3>{`${user.username}'s bookshelves`}</h3>
            {bookShelfList}
        </section>

    );

}

export default BookShelvesComponent;