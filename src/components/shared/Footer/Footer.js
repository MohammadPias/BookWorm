import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container footer-bg text-white mt-5 mx-auto">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mx-auto">
                <div className="logo col justify-content-center">
                    <h3 className='fw-bold'>BookWorm</h3>
                    {/* <img src={logo} alt="" /> */}
                    <p className="text-light text-justify w-75">BookWorm is an online web application where the customer can purchase books online. Through a web browser the customers can search for a book by its title or author, later can add to the shopping cart and finally purchase using credit card transaction.</p>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <Link to="/">About Services</Link>
                    <Link to="/">Read our blog</Link>
                    <Link to="/register">Signup to Purchase</Link>
                    <Link to="/">Privacy and Policy</Link>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <Link to="/">Get help</Link>
                    <Link to="/">Read FAQs</Link>
                    <Link to="/">Shippings</Link>
                    <Link to="/payment">Payment Method</Link>
                    <div>
                        <Link to="/"><i className="fab fa-linkedin font-style"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square font-style"></i></Link>
                        <Link to="/"><i className="fab fa-facebook-square font-style"></i></Link>
                    </div>
                </div>
                <div className="col mt-4">
                    {/* <img style={{ width: '80%' }} src={payment} alt="" /> */}
                </div>
            </div>
            <div className="mt-5 border-top footer-bg">
                <p className="mt-2 text-center"><small> All Right Reserved &copy; 2022 BookWorm.</small></p>
            </div>

        </div>
    );
};

export default Footer;