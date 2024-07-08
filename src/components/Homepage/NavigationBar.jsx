import{Link, Outlet} from 'react-router-dom'
const NavigationBar = () => {

    return(
        <>
            <h1>Hello form Navigation!</h1>
            <nav>
                <ul>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/recommendations">Recommendations</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default NavigationBar;