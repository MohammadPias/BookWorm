import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { Button, Spinner } from 'react-bootstrap';
import { addToDb } from '../Hooks/AddToDb';
import NavMenu from '../shared/Navbar/NavMenu';

const Details = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/books/${bookId}`, { method: 'GET' })
            .then(res => res.json())
            .then(result => {
                setBook(result)
            })
    }, []);
    console.log(book)
    return (
        <div>
            <NavMenu />
            {
                !book ? <div className='w-50 mx-auto d-flex justify-content-center'><Spinner animation="grow" /></div> :
                    <div className='row g-4 mt-5'>
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
                                    <Button onClick={() => addToDb(book._id)} variant='primary' className="rounded-pill px-5 py-3" size='sm'>Add to cart</Button>
                                    <Link to="/cart"><i className="fa-solid fa-cart-shopping icon-custom"></i></Link>
                                    <Link to="/"><i className="fa-solid fa-heart icon-custom"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </div>
    );
};

export default Details;