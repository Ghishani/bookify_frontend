import AddUserComponent from "./AddUserComponent";
import SearchUsersComponent from "./SearchUsersComponent";
import { Link } from "react-router-dom";

const UsersComponent = ({users, setUsers, originalUserList}) => {


    const userList = users.map((user) => {
        return( 
            <section key={user.id} className="content-grid">
                <p>{user.username}</p>
            </section>
        )
    })

    return(
        <div>
            <SearchUsersComponent users={users} setUsers={setUsers} originalUserList={originalUserList}/>
            <hr />
             {userList}
            <Link to = "/users/new">Add new user</Link>
        </div>
    )
}

export default UsersComponent;