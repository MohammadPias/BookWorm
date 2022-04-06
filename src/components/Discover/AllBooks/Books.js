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
        <div>
            <h2>AllBooks</h2>
            {
                books.length === 0 ?
                    <div className='mx-auto'>
                        <Spinner animation="border" />
                    </div>
                    :
                    <Container>
                        <div className='row row-cols-lg-3 g-4'>
                            {
                                books.slice(0, 6).map(book => <Book book={book}></Book>)
                            }
                        </div>
                    </Container>
            }
        </div>
    );
};

export default Books;