import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './TopNav.css'

const TopNav = () => {
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
                            <Button className='d-flex justify-content-center align-items-center search-box rounded-circle'><i class="fa-solid fa-magnifying-glass"></i></Button>

                        </div>
                    </div>
                    <div className="icons col d-flex flex-row-reverse">
                        <i className="fa-solid fa-cart-shopping icon-custom"></i>
                        <i className="fa-solid fa-heart icon-custom"></i>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopNav;