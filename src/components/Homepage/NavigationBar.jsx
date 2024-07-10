import{NavLink} from 'react-router-dom'
const NavigationBar = () => {

    return(
        <>
            <nav >
                <ul className='navigation-bar'>
                    <li><NavLink to="/users" className={({isActive}) => (isActive ? "active-link": undefined)}>Users</NavLink></li>
                    <li><NavLink to="/books-online" className={({isActive}) => (isActive ? "active-link": undefined)}>Books</NavLink></li>
                    <li><NavLink to="/recommendations" className={({isActive}) => (isActive ? "active-link": undefined)}>Recommendations</NavLink></li>
                </ul>
            </nav>

        </>
    )
}

export default NavigationBar;