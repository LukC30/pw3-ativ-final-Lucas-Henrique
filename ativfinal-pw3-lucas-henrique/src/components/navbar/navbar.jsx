import styles from './Navbar.css'
import Container from '../container/container'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar(){


    return(
        <nav>
            <Container>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>Olá</Link>
                    </li>
                    <li>
                        <Link to='/'>Cu</Link>
                    </li>
                </ul>
                <Outlet/>
            </Container>
        </nav>
    )
}