import AddUserComponent from "./AddUserComponent";
import SearchUsersComponent from "./SearchUsersComponent";

const UsersComponent = ({users, setUsers, originalUserList, postUser}) => {


    const userList = users.map((user) => {
        return( 
            <section key={user.id} className="content-grid">
                <p>{user.username}</p>
            </section>
        )
    })

    return(
        <div>
            <hr />
            <SearchUsersComponent users={users} setUsers={setUsers} originalUserList={originalUserList}/>
            <hr />
             {userList}
            <hr />
            <AddUserComponent postUser = {postUser}/>

        </div>
    )
}

export default UsersComponent;