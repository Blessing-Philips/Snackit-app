import { useState, useEffect } from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/snackit.png';
import { useNavigate } from "react-router-dom";
import Button from '../Button';
// 

const Navigation = () => {
    
    const [scrolled, setScrolled] = useState(false);    
    
    useEffect(()=> {
        const handleScroll = () =>{
            const isScroll = window.scrollY > 10
            if(isScroll !== scrolled){
                setScrolled(isScroll)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrolled])

    return <>
        <header className={`container ${styles.header} ${scrolled ? styles.scrolled : ''}`}> 
            <NavBar /> 
        </header>
    </>
}

function NavBar () {

    const [activeList, setActiveList] = useState("Home");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleClick =(navItem) => {
        setActiveList(navItem)
    }

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])

    return <nav className={styles.navbar}>
        <div className={styles.logowrap}>
            <img src={Logo} alt=" This is the logo" />
        </div>
        <ul className={styles.navlist}>
            <li><Link to="/" onClick={() => handleClick('Home')} className={activeList === 'Home' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" onClick={() => handleClick('about')} className={activeList === 'about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/menu" onClick={() => handleClick('menu')} className={activeList === 'menu' ? 'active' : ''}>Menu</Link></li>
            <li><Link to="/contact" onClick={() => handleClick('contact')} className={activeList === 'contact' ? 'active' : ''}>Contact Us</Link></li>
            {
                isLoggedIn ?
                <div className={ styles.btnwrap}>
                <Button onClick={handleLogout} variant="secondary"> Log out </Button>
                </div> :
                <>
                    <li><Link to="/sign-up" onClick={() => handleClick('SignUp')} className={activeList === 'SignUp' ? 'active' : ''}>Sign up</Link></li>
                    <li><Link to="/login" onClick={() => handleClick('login')} className={activeList === 'login' ? 'active' : ''}> Login</Link></li>
                </>
            }
         <img src="/" alt="Cart icon" style={{paddingRight: "10px"}} />
        </ul>
    </nav>
}

export default Navigation;