
import { Link } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";

const BookShelvesComponent = ({deleteUser, setCurrentUser}) => {
    const navigate = useNavigate();
    const user = useLoaderData();
    setCurrentUser(user);
  
    const handleButtonClick = () => {
          deleteUser(user.id);
          navigate("/users");
      }

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
        <section className="content-grid" key="user.id">
            <h3>{`${user.username}'s bookshelves`}</h3>
            {bookShelfList}
            <button onClick= {handleButtonClick} style={{backgroundColor: "red"}}>Delete User</button>
        </section>

    );

}

export default BookShelvesComponent;