import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../../images/about.jpg'

const About = () => {
    return (
        <Container>
            <h3 className='text-center fw-bold'>About Us</h3>
            <div className='row g-4 mt-3'>
                <div className='col-lg-6'>
                    <p>BookWorm is an online shopping site. Site content for online textbook system that allows ordinary users to conveniently at home, use the Internet features, easy to find books you want. Apply for membership of the way through, so shoppers can use the web site functionality. Shoppers can also manage all the information. Make management more convenient and personalized. And to the only transaction mode soft bookstore, information flow, logistics as the base to simulate the process of information out and sharing out the process. Below will have a system implementation process, the design process to do some narrative.</p>
                </div>
                <div className="col-lg-6">
                    <img className='w-100' src={about} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default About;