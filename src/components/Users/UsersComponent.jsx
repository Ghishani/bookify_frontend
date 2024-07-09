// import { useLoaderData } from "react-router-dom";


const UsersComponent = ({users, setUsers}) => {
    // const navigate = useNavigate();
    // const loadedUsers = useLoaderData();


    const userList = users.map((users) => {
        return( 
            <>
                users = {users}
                key={users.id}
            </>
        )
    })

    return(
        <div>
             <h1>{userList}</h1>
            
        </div>
    )
}

export default UsersComponent;