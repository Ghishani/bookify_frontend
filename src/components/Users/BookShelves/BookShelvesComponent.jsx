import { useLoaderData, useNavigate } from "react-router-dom";

const BookShelvesComponent = ({deleteUser}) => {
    
    const navigate = useNavigate();
    const user = useLoaderData();

    const handleButtonClick = () => {
        deleteUser(user.id);
        navigate("/users");
    }

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
            <button onClick= {handleButtonClick}>Delete User</button>
        </section>

    );

}

export default BookShelvesComponent;