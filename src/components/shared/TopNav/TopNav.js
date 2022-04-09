import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopNav.css'

const TopNav = () => {
    const cart = localStorage.getItem('shopping_cart')
    const cartParse = JSON.parse(cart)
    let products = 0;
    for (const prop in cartParse) {
        products = products + cartParse[prop]
    }
    console.log(products)
    return (
        <div className='top-nav bg-white shadow-sm'>
            <Container className='mt-3'>
                <div className='row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 d-flex justify-content-between'>
                    <div className="logo col">
                        <h3 className='fw-bold text-primary'>BookWorm</h3>
                    </div>
                    <div className="col">
                        <div className='d-flex align-items-center search-box'>
                            <input type="search" placeholder='Search book' name="" id="" />
                            <Button className='d-flex justify-content-center align-items-center search-box rounded-circle'><i className="fa-solid fa-magnifying-glass"></i></Button>

                        </div>
                    </div>
                    <div className="icons col d-flex flex-row-reverse">
                        <div className="shopping-cart">
                            <div className='count d-flex justify-content-center align-items-center text-white bg-primary'>0</div>
                            <i className="fa-solid fa-heart icon-custom"></i>
                        </div>
                        <Link to="/cart">
                            <div className='shopping-cart'>
                                <div className='count d-flex justify-content-center align-items-center text-white bg-primary'>{products}</div>
                                <i className="fa-solid fa-cart-shopping icon-custom"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopNav;