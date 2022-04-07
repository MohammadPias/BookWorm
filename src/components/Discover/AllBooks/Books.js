import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    return (
        <div className='mt-5'>
            <h3 className='text-center fw-bold'>Books</h3>
            {
                books.length === 0 ?
                    <div className='mx-auto'>
                        <Spinner animation="border" />
                    </div>
                    :
                    <Container className='mt-3'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                            {
                                books.slice(0, 6).map(book => <Book key={book._id} book={book}></Book>)
                            }
                        </div>
                    </Container>
            }
        </div>
    );
};

export default Books;