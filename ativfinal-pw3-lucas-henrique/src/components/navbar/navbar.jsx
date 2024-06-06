import styles from './Navbar.module.css'
import Container from '../container/container'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar(){


    return(
        <nav>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/ListarTurmas'>Olá</Link>
                    </li>
                </ul>
                <Outlet/>
            </Container>
        </nav>
    )
}