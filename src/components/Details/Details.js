import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { Button } from 'react-bootstrap';
import cart from '../../images/cart.png';
import heart from '../../images/heart.png';

const Details = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/books/${bookId}`, { method: 'GET' })
            .then(res => res.json())
            .then(result => {
                setBook(result)
            })
    }, [])
    return (
        <div className='mt-5'>
            {/* <h3 className='text-center fw-bold'>Book details</h3> */}
            <div className='row g-4'>
                <div className="col-lg-4 shadow-sm">
                    <img style={{ width: '80%', marginLeft: '50px' }} src={book.img} alt="" />
                </div>
                <div className="col-lg-8">
                    <div className="detail-container mx-5">
                        <div className='border border-light p-3 shadow-sm'>
                            <h4 className="fw-bold">{book.title}</h4>
                            <h6><small>by</small> {book.author}</h6>
                            <hr />
                            <h6>
                                Rating : <Rating
                                    initialRating={book.rating}
                                    readonly
                                    emptySymbol="fa fa-star-o fa-2x color"
                                    fullSymbol="fa fa-star fa-2x color"
                                />
                                <hr />
                            </h6>
                            <h5>Price: {book.price}$</h5>
                        </div>
                        <div className='border border-light p-3 shadow-sm mt-4'>
                            <p className="fw-bold">
                                {book.info}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between detail-btn my-4'>
                            <Link to={`/details/${book._id}`}><Button variant='primary' className="rounded-pill px-5 py-3" size='sm'>Add to cart</Button></Link>
                            <Link to="/"><img src={heart} alt='' /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;