import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ban1 from '../../../images/ban1.jpg'
import ban2 from '../../../images/ban2.jpg'
import ban3 from '../../../images/ban3.jpg'

const Slider = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Buy Your Books in a store</h3>
                        <p>A good bookshop is not just about selling books from shelves, but reaching out into the world and making a difference.</p>
                        <div>
                            <Link to='/'><Button className='rounded-pill text-white border-2 me-5' variant='outline-primary'>Learn More</Button></Link>
                            <Link to='/'><Button className='rounded-pill py-2 px-3' variant='secondary'>Shop now</Button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Online Book Store</h3>
                        <p className='text-dark'>I love walking into a bookstore. It’s like all my friends are sitting on shelves, waving their pages at me.</p>
                        <div>
                            <Link to='/'><Button className='rounded-pill text-dark border-2 me-5' variant='outline-primary'>Learn More</Button></Link>
                            <Link to='/'><Button className='rounded-pill py-2 px-3' variant='secondary'>Shop now</Button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Start Reading</h3>
                        <p>Bookstores are lonely forts, spilling light onto the sidewalk. They civilise their neighbourhoods.</p>
                        <div>
                            <Link to='/'><Button className='rounded-pill text-white border-2 me-5' variant='outline-primary'>Learn More</Button></Link>
                            <Link to='/'><Button className='rounded-pill py-2 px-3' variant='secondary'>Shop now</Button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;