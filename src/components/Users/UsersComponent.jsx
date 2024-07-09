import SearchUsersComponent from "./SearchUsersComponent";

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
            <hr />
            <SearchUsersComponent users={users} setUsers={setUsers} originalUserList={originalUserList}/>
            <hr />
             {userList}
        </div>
    )
}

export default UsersComponent;