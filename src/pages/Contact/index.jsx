import ContactForms from "../../components/ContactForms";
import Intro from "../../components/Intro";
import styles from './contact.module.css';

const Contact = () => {
    return (
    <>
        <Intro className={styles.main}>Contact Us</Intro>
        <ContactForms/>


    </>)
}

export default Contact;