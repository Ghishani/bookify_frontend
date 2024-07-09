import SearchUsersComponent from "./SearchUsersComponent";
import { Link } from "react-router-dom";

const UsersComponent = ({users, setUsers, originalUserList}) => {


    const userList = users.map((user) => {
        return( 
            <section key={user.id} className="content-grid">
                <p className="card">{user.username} </p>
            </section>
        )
    })

    return(
        <div className="users-container">
             <div className="search-box">
                <SearchUsersComponent users={users} setUsers={setUsers} originalUserList={originalUserList}/>
                <hr />
             </div >
             <div className="content-grid">
                {userList}
                <Link to = "/users/new">Add new user</Link>
            </div>
        </div>
    )


}

export default UsersComponent;