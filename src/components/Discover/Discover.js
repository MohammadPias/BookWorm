import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import NavMenu from '../shared/Navbar/NavMenu';
import './Discover.css';
import DiscoverBooks from './DiscoverBooks';

const Discover = () => {
    const [books, setBooks] = useState([])
    const [value, setValue] = useState('')
    const handleOnChange = (e) => {
        setValue(e.target.value)
    };
    useEffect(() => {
        fetch(`http://localhost:5000/books/${value}`, { method: 'GET' })
            .then(res => res.json())
            .then(result => {
                setBooks(result)
                console.log(result)
            })
    }, [value])
    return (
        <div>
            <NavMenu />
            <div className="row g-3">
                <div className="col-lg-2 shadow-sm min-vh-100">
                    <div className='side-nav-container'>
                        <h6 className='ms-2'>Category</h6>
                        <select value={value} onChange={handleOnChange}>
                            <option value="0">Action & Adventure</option>
                            <option value="1">Art, Film and Photography</option>
                            <option value="2">Computer & Internet</option>
                            <option value="3">Medicine & Health</option>
                            <option value="4">Historical Fiction</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className='book-container vh-100'>
                        <div className='mt-5'>
                            <h3 className='text-center fw-bold'>Books</h3>
                            {
                                books.length === 0 ?
                                    <div className='mx-auto w-25 d-flex justify-content-center'>
                                        <Spinner animation="border" />
                                    </div>
                                    :
                                    <div className='mt-3'>
                                        <Container>
                                            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                                                {
                                                    books.map(book => <DiscoverBooks key={book._id} book={book}></DiscoverBooks>)
                                                }
                                            </div>
                                        </Container>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;

