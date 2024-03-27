import styles from './navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return <>
    <header className={styles.header}> <NavBar /> </header>
    </>
}

function NavBar () {
    return <nav className={styles.navbar}>
        <div>
            <img src="/#" alt=" This is the logo" />
        </div>
        <ul className={styles.navlist}>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="#about" >About</Link></li>
            <li><Link to="/menu" >Menu</Link></li>

        </ul>

        <div className={styles.register}>
            <img src="/" alt="Cart icon" style={{paddingRight: "10px"}} />
            <li>Sign up</li>
            <li>Login</li>
        </div>
    </nav>
}

export default Navigation;