import styles from './contactForm.module.css';
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMapPin } from "react-icons/hi2";
import Button from '../Button';



const ContactForms = () => {

    const handleSubmit = () =>{
        //Handle Submit
    }

    return <div className={styles.Wrapper}>
        <div className={styles.formContainer}>
            <h2>We create mouth watering meals all the time</h2>
            <form className={styles.form}>
                <label htmlFor='fullName'>Fullname</label>
                <input type="text" name="fullname" id="fullName" placeholder='enter name'/>
                
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" placeholder='xyz@mail.com' />
                
                <label htmlFor='message'>Mesage</label>
                <textarea type="text" name="message" id="message" placeholder='message...'/>
                
                <Button variant="primary" onClick={handleSubmit}>Send</Button>
            </form>
        </div>
        <div className={styles.container}>
            <div className={styles.infoContainer}>
            <div className={styles.info}>
            <h3>Info</h3>
            <div className={ styles.flex}>
                <IoMailOpenOutline size={20}/> 
                <span>snackit@gmail.com</span></div>
            <div className={ styles.flex}>
                <LuPhoneCall size={20}/>
                <span>08099999999</span></div>
            <div className={ styles.flex}>
                <HiOutlineMapPin size={20} />
                <span>5, snackit road</span></div>

            </div>
            </div>
        </div>
    </div>
}
export default ContactForms;