import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import styles from './navigation.module.css';
import Logo from '../../assets/snackit.png';
import Button from '../Button';
import { useSelector } from 'react-redux';
import {cartProduct} from "../../store/cartSlice"
import {IoClose, IoMenu} from 'react-icons/io5';
import PropTypes from 'prop-types';

const Navigation = () => {
    
    const [scrolled, setScrolled] = useState(false); 
    const [isOpen, setIsOpen] = useState(false);
    
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return <>
        <header className={`container ${styles.header} ${scrolled ? styles.scrolled : ''}`}> 
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu}/> 
        </header>
    </>
}

function NavBar ({isOpen, toggleMenu}) {
    NavBar.propTypes = {
        isOpen: PropTypes.any.isRequired,
        toggleMenu:PropTypes.any.isRequired,
    };

    const [activeList, setActiveList] = useState("Home");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [userDetails, setUserDetails] = useState('')
    const navigate = useNavigate();
    const cart = useSelector(cartProduct)

    const handleClick =(navItem) => {
        setActiveList(navItem)
        if (window.innerWidth <= 1005) {
            toggleMenu(); 
        }
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

    useEffect(() => {
        const checkUser = () => {
            const user = sessionStorage.getItem('User');
            console.log(user)
        }

        window.addEventListener('storage', checkUser);

        return () => {
            window.removeEventListener('storage', checkUser);
        }
    }, [])

    return <nav className={styles.navbar}>
        <div className={styles.logowrap}>
            <img src={Logo} alt=" This is the logo" />
        </div>
        <div className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
            <ul className={`${styles.navlist} ${isOpen ? styles.display : ''}`}>
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
                <Link to='/cart' onClick={() => handleClick('cart')} className={`${activeList === 'cart' ? 'active' : ''} ${styles.cartRelative}`}>
                    <IoCartOutline size={30} />
                    {
                        cart && cart.length > 0 ? 
                        <span className={styles.cartCount}>{cart.length}</span> : null
                    }
                </Link>
            </ul>
            <div className={styles.toggleIcon} onClick={toggleMenu}>
                { isOpen ? <IoClose/> : <IoMenu/> }
            </div>
        </div>
    </nav>
}

export default Navigation;

// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { IoCartOutline } from "react-icons/io5";
// import styles from './navigation.module.css';
// import Logo from '../../assets/snackit.png';
// import Button from '../Button';
// import { useSelector } from 'react-redux';
// import {cartProduct} from "../../store/cartSlice"
// import {IoClose, IoMenu} from 'react-icons/io5';
// import PropTypes from 'prop-types';

// const Navigation = () => {
    
//     const [scrolled, setScrolled] = useState(false); 
//     const [isOpen, setIsOpen] = useState(false);
    
//     useEffect(()=> {
//         const handleScroll = () =>{
//             const isScroll = window.scrollY > 10
//             if(isScroll !== scrolled){
//                 setScrolled(isScroll)
//             }
//         }
//         window.addEventListener("scroll", handleScroll)

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [scrolled])

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return <>
//         <header className={`container ${styles.header} ${scrolled ? styles.scrolled : ''}`}> 
//             <NavBar isOpen={isOpen} toggleMenu={toggleMenu}/> 
//         </header>
//     </>
// }

// function NavBar ({isOpen, toggleMenu}) {
//     NavBar.propTypes = {
//         isOpen: PropTypes.any.isRequired,
//         toggleMenu:PropTypes.any.isRequired,
//     };

//     const [activeList, setActiveList] = useState("Home");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     // const [userDetails, setUserDetails] = useState('')
//     const navigate = useNavigate();
//     const cart = useSelector(cartProduct)

//     const handleClick =(navItem) => {
//         setActiveList(navItem)
//         if (window.innerWidth <= 1005) {
//             toggleMenu(); 
//         }
//     }

//     const handleLogout = () => {
//         sessionStorage.removeItem('Auth token');
//         sessionStorage.removeItem('User');
//         window.dispatchEvent(new Event("storage"))
//         navigate("/");
//     }

//     useEffect(() => {
//         const checkAuthToken = () => {
//             const token = sessionStorage.getItem('Auth token');
//             if (token) {
//                 setIsLoggedIn(true);
//             } else {
//                 setIsLoggedIn(false);
//             }
//         }

//         window.addEventListener('storage', checkAuthToken);

//         return () => {
//             window.removeEventListener('storage', checkAuthToken);
//         }
//     }, [])

//     useEffect(() => {
//         const checkUser = () => {
//             const user = sessionStorage.getItem('User');
//             console.log(user)
//         }

//         window.addEventListener('storage', checkUser);

//         return () => {
//             window.removeEventListener('storage', checkUser);
//         }
//     }, [])

//     return <nav className={styles.navbar}>
//         <div className={styles.logowrap}>
//             <img src={Logo} alt=" This is the logo" />
//         </div>
//         <div className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
//             <ul className={styles.navlist}>
//                 <li><Link to="/" onClick={() => handleClick('Home')} className={activeList === 'Home' ? 'active' : ''}>Home</Link></li>
//                 <li><Link to="/about" onClick={() => handleClick('about')} className={activeList === 'about' ? 'active' : ''}>About</Link></li>
//                 <li><Link to="/menu" onClick={() => handleClick('menu')} className={activeList === 'menu' ? 'active' : ''}>Menu</Link></li>
//                 <li><Link to="/contact" onClick={() => handleClick('contact')} className={activeList === 'contact' ? 'active' : ''}>Contact Us</Link></li>
//                 {
//                     isLoggedIn ?
//                     <div className={ styles.btnwrap}>
//                     <Button onClick={handleLogout} variant="secondary"> Log out </Button>
//                     </div> :
//                     <>
//                         <li><Link to="/sign-up" onClick={() => handleClick('SignUp')} className={activeList === 'SignUp' ? 'active' : ''}>Sign up</Link></li>
//                         <li><Link to="/login" onClick={() => handleClick('login')} className={activeList === 'login' ? 'active' : ''}> Login</Link></li>
//                     </>
//                 }
//                 <Link to='/cart' onClick={() => handleClick('cart')} className={`${activeList === 'cart' ? 'active' : ''} ${styles.cartRelative}`}>
//                     <IoCartOutline size={30} />
//                     {
//                         cart && cart.length > 0 ? 
//                         <span className={styles.cartCount}>{cart.length}</span> : null
//                     }
//                 </Link>
//             </ul>
//             <div className={styles.toggleIcon} onClick={toggleMenu}>
//                 { isOpen ? <IoClose/> : <IoMenu/> }
//             </div>
//         </div>
//     </nav>
// }

// export default Navigation;
















// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { IoCartOutline } from "react-icons/io5";
// import styles from './navigation.module.css';
// import Logo from '../../assets/snackit.png';
// import Button from '../Button';
// import { useSelector } from 'react-redux';
// import {cartProduct} from "../../store/cartSlice"
// import {IoClose, IoMenu} from 'react-icons/io5';
// // 

// const Navigation = () => {
    
//     const [scrolled, setScrolled] = useState(false);    
    
//     useEffect(()=> {
//         const handleScroll = () =>{
//             const isScroll = window.scrollY > 10
//             if(isScroll !== scrolled){
//                 setScrolled(isScroll)
//             }
//         }
//         window.addEventListener("scroll", handleScroll)

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [scrolled])

//     return <>
//         <header className={`container ${styles.header} ${scrolled ? styles.scrolled : ''}`}> 
//             <NavBar /> 
//         </header>
//     </>
// }

// function NavBar () {

//     const [activeList, setActiveList] = useState("Home");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     // const [userDetails, setUserDetails] = useState('')
//     const navigate = useNavigate();
//     const cart = useSelector(cartProduct)

//     const handleClick =(navItem) => {
//         setActiveList(navItem)
//     }

//     const handleLogout = () => {
//         sessionStorage.removeItem('Auth token');
//         sessionStorage.removeItem('User');
//         window.dispatchEvent(new Event("storage"))
//         navigate("/");
//     }

//     useEffect(() => {
//         const checkAuthToken = () => {
//             const token = sessionStorage.getItem('Auth token');
//             if (token) {
//                 setIsLoggedIn(true);
//             } else {
//                 setIsLoggedIn(false);
//             }
//         }

//         window.addEventListener('storage', checkAuthToken);

//         return () => {
//             window.removeEventListener('storage', checkAuthToken);
//         }
//     }, [])

//     useEffect(() => {
//         const checkUser = () => {
//             const user = sessionStorage.getItem('User');
//             console.log(user)
//         }

//         window.addEventListener('storage', checkUser);

//         return () => {
//             window.removeEventListener('storage', checkUser);
//         }
//     }, [])

//     return <nav className={styles.navbar}>
//         <div className={styles.logowrap}>
//             <img src={Logo} alt=" This is the logo" />
//         </div>
//         <div>
//         <ul className={styles.navlist}>
//             <li><Link to="/" onClick={() => handleClick('Home')} className={activeList === 'Home' ? 'active' : ''}>Home</Link></li>
//             <li><Link to="/about" onClick={() => handleClick('about')} className={activeList === 'about' ? 'active' : ''}>About</Link></li>
//             <li><Link to="/menu" onClick={() => handleClick('menu')} className={activeList === 'menu' ? 'active' : ''}>Menu</Link></li>
//             <li><Link to="/contact" onClick={() => handleClick('contact')} className={activeList === 'contact' ? 'active' : ''}>Contact Us</Link></li>
//             {
//                 isLoggedIn ?
//                 <div className={ styles.btnwrap}>
//                 <Button onClick={handleLogout} variant="secondary"> Log out </Button>
//                 </div> :
//                 <>
//                     <li><Link to="/sign-up" onClick={() => handleClick('SignUp')} className={activeList === 'SignUp' ? 'active' : ''}>Sign up</Link></li>
//                     <li><Link to="/login" onClick={() => handleClick('login')} className={activeList === 'login' ? 'active' : ''}> Login</Link></li>
//                 </>
//             }
//             <Link to='/cart' onClick={() => handleClick('cart')} className={`${activeList === 'cart' ? 'active' : ''} ${styles.cartRelative}`}>
//                 <IoCartOutline size={30} />
//                 {
//                     cart && cart.length > 0 ? 
//                     <span className={styles.cartCount}>{cart.length}</span> : null
//                 }
//             </Link>
       
//         </ul>
//     </nav>
// }

// export default Navigation;