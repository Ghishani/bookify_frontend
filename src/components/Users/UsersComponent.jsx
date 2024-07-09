// import { useLoaderData } from "react-router-dom";


const UsersComponent = ({users, setUsers}) => {
    // const navigate = useNavigate();
    // const loadedUsers = useLoaderData();


    const userList = users.map((user) => {
        return( 
            <section key={user.id} className="content-grid">
                <p>{user.username}</p>
            </section>
                

        )
    })

    return(
        <div>
             {userList}
        </div>
    )
}

export default UsersComponent;