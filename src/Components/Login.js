//قسمت لاگین از زیر منوی داشبورد
import PropTypes from 'prop-types'
import Dashboard from './Dashboard'
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { validate } from './validate';
import { notify } from "./toast"
import styles from "./SignUp.module.scss";
// import SignUp from './SignUp';
import Editor from './Editor';

async function LoginUser(credentials) {
    return fetch('http://localhost:8080/login',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = ({setToken}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const from1 = location.state?.from?.pathname || "/admin";
    const from2 = location.state?.from?.pathname || "/editor";
 //به دلیل نبود دیتابیس رول ها را در داخل استیت تعریف کردم و برای چک کردن لطفا به صورت دستی رول را تغییر دهید
    //مقادیر در نظر گرفته شده برای رول به شرح زیر است:
    //role : "editor"  یا  role : "admin"

    const [data, setData] = useState({
        email: "",
        password:"",
        roles : "admin"  
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        if((data.email === "admin@abc.com" && data.password === "abc12345"))
        {
            if (!Object.keys(errors).length) {
                notify("You loged up successfully", "success");
                const token = await LoginUser({
                    data
                    
                })
                setToken(token)   
                
                if(data.roles === "admin"){
                    navigate(from1, { replace: true });
                }
                else if (data.roles === "editor"){
                    navigate(from2, { replace: true });
                } 
            } 
        else {
            notify("Invalid data!", "error")
            setTouched({
                email: true,
                password: true
            })
        }
    }
 
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>   
                    <Link to='/signup'>Sign Up</Link>     
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login