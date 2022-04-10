import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartAccount = ({
    image,
    quantity,
    bookPrice,
    shipping,
    tax,
    total,
    title,
    books,
    id }) => {
    return (
        <div className="col-sm-12 col-md-4">
            <Card style={{ minWidth: '18rem' }}>
                <Card.Header className='text-center'>My Cart</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className='d-flex align-items-center'>
                            <img style={{ width: '55px' }} src={image} alt="" />
                            <h6 className='ms-3'>{title}</h6>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6>Books :</h6>
                            <h5>{quantity}</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6>Sub-total :</h6>
                            <h5>{bookPrice}$</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6>Shipping :</h6>
                            <h5>{shipping}$</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6>Tax :</h6>
                            <h5>{tax}$</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>Total :</h5>
                            <h5>{total}$</h5>
                        </div>
                    </ListGroup.Item>
                    {
                        books?.length &&
                        <Link to='/order'><Button className='w-100'>Order</Button></Link>
                    }
                </ListGroup>
            </Card>
        </div>
    );
};

export default CartAccount;