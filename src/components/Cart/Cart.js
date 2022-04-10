import React, { useState } from 'react';
import { Button, Card, Container, ListGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToDb, decreaseItem, removeFromDb } from '../Hooks/AddToDb';
import useCart from '../Hooks/useCart';
import NavMenu from '../shared/Navbar/NavMenu';
import './Cart.css'
import CartAccount from './CartAccount';

const Cart = () => {
    const { books,
        setBooks } = useCart() || []
    console.log(books)
    const [quantity, setQuantity] = useState(0);
    const [bookPrice, setBookPrice] = useState(0);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    const tax = bookPrice > 100 ? bookPrice * 15 / 100 : 0;
    const shipping = 15;
    const total = bookPrice + shipping + tax;

    const handleIncrease = (id) => {
        const book = books?.find(book => book?._id === id);
        book.quantity = book?.quantity + 1;
        const newBooks = books?.filter(book => book?._id !== id);
        const changeBooks = [...newBooks, book]
        setBooks(changeBooks);
        handleCheckOut(id, book.title, book.img);
        addToDb(book._id)


    };
    const handleDecrease = (id) => {
        const book = books?.find(book => book?._id === id);

        book.quantity = book.quantity - 1;
        const newBooks = books?.filter(book => book?._id !== id);
        const changeBooks = [...newBooks, book]
        setBooks(changeBooks);
        handleCheckOut(id, book.title, book.img);
        decreaseItem(book?._id)
    };
    const handleCheckOut = (id, title, img) => {
        const book = books?.find(book => book?._id === id);
        const quantity = book.quantity;
        const price = book.price;
        const totalPrice = quantity * price;
        setBookPrice(totalPrice);
        setQuantity(quantity);
        setImage(img);
        setTitle(title);
        setId(id)

    }

    const handleRemove = (id) => {
        removeFromDb(id);
        toast.warn('This product has been deleted from the cart');
        const newCart = books?.filter(book => book._id === id)
        setBooks(newCart)
    }
    return (
        <div>
            <NavMenu />
            <Container>
                <div className='row mt-3 g-4'>
                    <div className='col-sm-12 col-md-8'>
                        {
                            !books?.length ?
                                <h4 className='text-center bg-info p-3 rounded'>No books found in your cart</h4>
                                :
                                <Table responsive bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Book</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Remove</th>
                                            <th>Check Out</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            books?.map(book =>
                                                <tr key={book._id}>
                                                    <td>
                                                        <div className='d-flex align-items-center'>
                                                            <img style={{ width: '55px' }} src={book?.img} alt="" />
                                                            <h6 className='ms-3'>{book.title}</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='mt-3 d-flex align-items-center justify-content-center'>
                                                            {book?.price}$
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='mt-3 d-flex align-items-center justify-content-center'>
                                                            <button onClick={() => handleDecrease(book?._id)} className='quantity-btn'>-</button>
                                                            <input className='quantity-btn' type="number" value={book?.quantity} />
                                                            <button onClick={() => handleIncrease(book?._id)} className='quantity-btn'>+</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div onClick={() => handleRemove(book._id)} className='mt-3 d-flex align-items-center justify-content-center'>
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div onClick={() => handleCheckOut(book._id, book.title, book.img)} className='mt-3 d-flex align-items-center justify-content-center'>
                                                            <Button size="sm">Check Out</Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </Table>
                        }
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <CartAccount
                            image={image}
                            quantity={quantity}
                            bookPrice={bookPrice}
                            shipping={shipping}
                            tax={tax}
                            total={total}
                            title={title}
                            books={books}
                            id={id}
                        />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Cart;