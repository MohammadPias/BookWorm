import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Book.css';
import cart from '../../../images/cart.png'
import heart from '../../../images/heart.png'

const Book = ({ book }) => {
    const { title, author, _id, price, rating, img } = book;
    return (
        <div className='col'>
            <div className="card h-100" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4 book-cover">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h6><small>by</small> {author}</h6>
                            <h6>
                                Rating : <Rating
                                    initialRating={rating}
                                    readonly
                                    emptySymbol="fa fa-star-o fa-2x color"
                                    fullSymbol="fa fa-star fa-2x color"
                                />
                            </h6>
                            <h5>Price: {price}$</h5>
                            <div className='d-flex justify-content-between detail-btn'>
                                <Link to={`/details/${_id}`}><Button variant='outline-primary' className="rounded-pill" size='sm'>Detail</Button></Link>
                                <Link to="/"><img src={cart} alt='' /></Link>
                                <Link to="/"><img src={heart} alt='' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;