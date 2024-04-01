import styles from './footer.module.css';

const Footer = () => {
    return <div className={`container ${styles.footer}`}>
       
        <hr className={styles.width}></hr>
        <div className={styles.footerList}>
            <ul>
                <li>COMPANY</li>
                <li>Menu</li>
                <li>About</li>
                <li>Login</li>
            </ul>
            
            <ul>
                <li>LEGAL</li>
                <li>Privacy Policy</li>
                <li> Licencing</li>
                <li>Terms & Conditions</li>
                
            </ul>

        </div>
        <hr className={styles.width}></hr>
        <ul className={styles.list}>
            <li>&copy; Snackit 2024 </li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
            <li>Help</li>
            
        </ul>
    </div>
}
export default Footer;