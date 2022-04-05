import React from 'react';
import banner from '../../images/banner2.jpg';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Signin = () => {
    const { handleEmailPassSignup } = useFirebase();

    const navigate = useNavigate();
    const location = useLocation();
    const destination = location?.state?.from || '/';

    const bg = {
        background: `url(${banner})`,
        height: "100vh",
        width: '100%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const password2 = data.password2;
        const newData = {
            displayName: data.name,
            email: data.email
        };





        if (password === password2) {
            handleEmailPassSignup(name, email, password, navigate, destination)
        }
        else {
            alert("Password don't match")
        }
    };
    return (
        <div style={bg} className="d-flex align-items-center justify-content-center">
            <div className='formContainer'>
                <h5>Signup</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' type="text" {...register("name", { required: true })} />
                    <br />
                    <input placeholder='Email' type="email" {...register("email", { required: true })} />
                    <br />
                    <input placeholder='Password' type="password" {...register("password", { required: true })} />
                    <br />
                    <input placeholder='Re-enter password' type="password" {...register("password2", { required: true })} />
                    <br />
                    <input className='submitBtn' type="submit" />
                </form>
                <p className='mt-3'>Already have an account?<Link to="/login">  Login</Link> </p>
                <h6>------or------</h6>

                <Button variant='light' className='w-100 rounded-pill border'>
                    <img className='me-3' src="https://img.icons8.com/color/25/000000/google-logo.png" alt='' />
                    Signin with google
                </Button>
            </div>
        </div>
    );
};

export default Signin;