import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.css';
import Button from '../../components/Button';
import formImg from '../../assets/form-image.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    

    const onSubmitHandler=(data)=>{
        console.log(data)
        setLoading(true);
        const authentication = getAuth();
        // let uid;
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) =>{
                // uid = response.user.uid;
                console.log(response)
                sessionStorage.setItem('User', data.username);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
                window.dispatchEvent(new Event("storage"))
                toast.success('Login successfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
                navigate('/');
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong Password')
                }
                if (error.code === 'auth/user-not-found') {
                    toast.error('Email not found, please register')
                }
                    setLoading(false);
                })
        
    }

    return <div className={styles.signin}>
         <div className={styles.imgWrap}>
            <img src={formImg} alt='image'/>
        </div>
        <div className={styles.container}>
            <h2>Welcome Back</h2>
            <Formik 
                initialValues={defaultValues} 
                validationSchema={LoginSchema}
                onSubmit={onSubmitHandler}
            >
                { ({
                    values,
                    handleChange, 
                    errors,
                    handleSubmit,               
                }) => {
                    return <>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor='email'>Email</label>
                        <input 
                            value={values.email}
                            type="email" 
                            placeholder="Email" 
                            onChange={handleChange}
                            id="email" 
                        />
                         <span>{errors.email}</span>
                         <label htmlFor='password'>Password</label>
                        <input 
                            value={values.password}
                            type="password" 
                            placeholder="Password" 
                            onChange={handleChange}
                            id="password" 
                        /> 
                        <span>{errors.password}</span>

                        <div className={styles.btnwrap}>
                            <Button type="submit" variant="primary">{loading ? "loading..." : "Login"}</Button>
                        </div> 
                    </form> 
                    <span>Don&apos;t have an accout?<Link to="/sign-up"> Create account</Link></span>
                 </>
                }}
            </Formik>
            <ToastContainer/>
            
        </div>
        
    </div>
    
}

export default Login;

const defaultValues = {
    email: "",
    password: "",
    }

const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
    .min(6, 'Too Short - should be 6 chars minimum')
})


app