// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik } from 'formik';
// import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './signup.module.css';
import Button from '../../components/Button';
import formImg from '../../assets/form-image.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase/firebase-config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    

    const onSubmitHandler =(data)=>{
        setLoading(true);
        const authentication = getAuth();
        // let uid;
        createUserWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) =>{
                // uid = response.user.uid;
                sessionStorage.setItem('User', response.user);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
                window.dispatchEvent(new Event("storage"))
                toast.success('Account created successfully!', {
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
            .catch((error) =>{
                if(error.code === 'auth/email-already-in-use'){
                    toast.error('Email already exist')
                }
                setLoading(false);
            })
    }

    return <div className={styles.signup}>
        <div className={styles.imgWrap}>
            <img src={formImg} alt='image'/>
        </div>
        <div className={styles.container}>
            <span>Already have an accout? <Link to="/login">Login</Link></span>
            <h2>Welcome to Snackit</h2>
            <Formik 
                initialValues={defaultValues} 
                validationSchema={signInSchema}
                onSubmit={onSubmitHandler}
            >
                { ({
                    values,
                    handleChange, 
                    errors,
                    handleSubmit,               
                }) => {
                    return <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor='username'>Full name</label>
                        <input 
                            value={values.username}
                            name="username"
                            type="text" 
                            onChange={handleChange}
                            placeholder="Username" 
                            id="username" 
                        />
                        <span>{errors.username}</span>
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
                        <label htmlFor='confirmPassword'> Confirm password </label>
                        <input 
                            value={values.confirmPassword}
                            type="password" 
                            placeholder="confirm password" 
                            onChange={handleChange}
                            id="confirmPassword" 
                        /> 
                        <span>{errors.confirmPassword}</span>
                        <div className={styles.btnwrap}>
                            <Button type="submit" variant="primary">{loading ? "loading..." : "Sign Up"}</Button>
                        </div> 
                    </form> 
                }}
            </Formik>
            <ToastContainer/>
        </div>              
    </div>
}

const defaultValues = {
name: "",
email: "",
password: "",
confirmPassword: '' 
}

const signInSchema = Yup.object({
    username: Yup.string().required('Username is required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
    .min(6, 'Too Short - should be 6 chars minimum'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
})

export default SignUp;






app
// createUserWithEmailAndPassword(authentication, data.fullName, data.email, data.password)
//             .then((response) =>{
//                 // uid = response.user.uid;
//                 sessionStorage.setItem('User', response.user);
//                 sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
//                 window.dispatchEvent(new Event("storage"))
//             })
//             .catch((error) =>{
//                 if(error.code == 'auth/email-already-in-use'){
//                     toast.error('Email already exist')
//                 }
//             })

//             fetch('https://reqres.in/api/register', {
//                 method: 'POST',
//                 header: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email: data.email,
//                     name: data.fullName,
//                     _id: data.uid,
//                 })
//             }).then(response => {
//                 if(response.status === 200){
//                     setLoading(false);
//                     toast.success('Account created successfully!', {
//                         position: "top-right",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: 'dark'
//                     });
//                     navigate('/');
//                 } else {
//                     console.log(response.json());
//                 }
//             }).catch((error) => {
//                 setLoading(false);
//                 console.log(error);
//             })
//     }








{/* <Formik initialValues={{ 
    fullName: '', 
    email: '', 
    password: '',
    confirmPassword: '' 
}} 
validationSchema={signInSchema}
onSubmit={handleSubmit}>
<Form className={styles.form}>
    <label htmlFor='fullName'>Full name</label>
    <input id="fullName" type="text" name="fullName" placeholder="Full Name" />
    <ErrorMessage name="fullName">
        { msg => <div style={{ color: '#c41b1b'}}>{msg}</div> }
    </ErrorMessage>
    <label htmlFor='Email'>Email</label>
    <input id="Email" type="email" name="email" placeholder="Email" />
    <ErrorMessage name="email">
        { msg => <div style={{ color: '#c41b1b' }}>{msg}</div> }
    </ErrorMessage>
    <label htmlFor='Password'>Password</label>
    <input id="Password" type="password" name="password" placeholder="Password" />
    <ErrorMessage name="password">
        { msg => <div style={{ color: '#c41b1b' }}>{msg}</div> }
    </ErrorMessage>
    <label htmlFor='confirmPassword'>Confirm Password</label>
    <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password"
    />
    <ErrorMessage name="confirmPassword">
        { msg => <div style={{ color: '#c41b1b' }}>{msg}</div> }
    </ErrorMessage>
    <div className={styles.btnwrap}>
        <Button type="submit" variant="primary">{loading ? "loading..." : "Sign Up"}</Button>
    </div>                
</Form>
</Formik> */}