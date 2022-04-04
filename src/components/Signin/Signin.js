import React from 'react';
import banner from '../../images/banner2.jpg';
import { useForm } from "react-hook-form";
import './Signin.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
    const bg = {
        background: `url(${banner})`,
        minHeight: "100vh",
        width: '100%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={bg} className="d-flex align-items-center justify-content-center">
            <div className='formContainer'>
                <h5>Login</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Email' type="email" {...register("email", { required: true })} />
                    <br />
                    <input placeholder='Password' type="password" {...register("password", { required: true })} />
                    <br />
                    <Button type='submit' className='submitBtn mt-2' size='sm'>Login</Button>
                </form>
                <p className='mt-3'>Don't register yet?<Link to="/signup">  Signup</Link> </p>
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