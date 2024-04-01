import { useState, useEffect } from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/snackit.png';
// 
const Navigation = () => {

    const [scrolled, setScrolled] = useState(false)

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
    return <nav className={styles.navbar}>
        <div className={styles.logowrap}>
            <img src={Logo} alt=" This is the logo" />
        </div>
        <ul className={styles.navlist}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/menu" >Menu</Link></li>

        </ul>

        <div className={styles.register}>
            <img src="/" alt="Cart icon" style={{paddingRight: "10px"}} />
            <li><Link to="/#" >Sign up</Link></li>
            <li><Link to="/#" > Login</Link></li>
            
        </div>
    </nav>
}

export default Navigation;