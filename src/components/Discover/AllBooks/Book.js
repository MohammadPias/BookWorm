import React from 'react';

const Book = ({ book }) => {
    const { title, author, _id, price, rating, img } = book;
    return (
        <div className='col'>
            <div className="card h-100" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{ height: '100%' }} src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h6><small>by</small> {author}</h6>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;