import React, { useEffect, useState } from 'react';
import { Button, Card, Container, ListGroup, Table } from 'react-bootstrap';
import { removeFromDb } from '../Hooks/AddToDb';

const Cart = () => {
    const [books, setBooks] = useState([]);
    const [cartItem, setCartItem] = useState();

    let subTotal = 0;
    for (const book of books) {
        if (!book.quantity) {
            book.quantity = 1;
        }
        else {

            subTotal = subTotal + parseInt(book.quantity) * parseInt(book.price);
        }
    }
    const shipping = subTotal < 100 ? 0 : 10;
    const tax = (subTotal + shipping) * 15 / 100;
    const total = subTotal + shipping + tax;




    useEffect(() => {

        const cart = localStorage.getItem('shopping_cart');
        const cartParse = JSON.parse(cart)
        const keys = Object.keys(cartParse);

        fetch('http://localhost:5000/books/keys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(result => {
                const cartBook = result;
                const newCart = [];
                let item = 0;
                for (const props in cartParse) {
                    if (cartBook) {
                        const book = cartBook.find(book => book._id === props);
                        const quantity = cartParse[props];
                        book.quantity = quantity;
                        newCart.push(book);

                        item = item + cartParse[props]
                    }
                };
                setBooks(newCart);
                setCartItem(item);

            })
    }, []);
    const handleRemove = (id) => {
        removeFromDb(id);
        console.log(id)
    }
    console.log(books)
    return (
        <Container>
            <div className='row mt-4 g-4'>
                <div className='col-sm-12 col-md-8'>
                    <Table responsive bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Book</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books?.map(book =>
                                    <tr key={book._id}>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img style={{ width: '55px' }} src={book.img} alt="" />
                                                <h6 className='ms-3'>{book.title}</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='mt-4 d-flex align-items-center justify-content-center'>{book?.quantity}</div>
                                        </td>
                                        <td>
                                            <div onClick={() => handleRemove(book._id)} className='mt-4 d-flex align-items-center justify-content-center'>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='mt-4 d-flex align-items-center justify-content-center'>
                                                {book.price}$
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
                <div className="col-sm-12 col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className='text-center'>My Cart</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6>Items:</h6>
                                    <h5>{cartItem}</h5>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6>Sub-total</h6>
                                    <h5>{subTotal}$</h5>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6>Shipping:</h6>
                                    <h5>{shipping}$</h5>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6>Tax:</h6>
                                    <h5>{tax}$</h5>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Total:</h5>
                                    <h5>{total}$</h5>
                                </div>
                            </ListGroup.Item>
                            <Button>Check out</Button>
                        </ListGroup>
                    </Card>
                </div>

            </div>
        </Container>
    );
};

export default Cart;