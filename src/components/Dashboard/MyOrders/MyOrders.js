import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Spinner, Table } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const MyOrders = () => {
    const [books, setBooks] = useState([]);
    const { user } = useFirebase();
    const email = user?.email;
    console.log(email)
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                setBooks(result);
                console.log(result);
            })
    }, [email]);


    return (
        <div className='row g-3'>
            <div className="col-lg-9">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Book</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books?.map(book =>
                                <tr key={book._id}>
                                    <td>{book._id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.price} $</td>
                                    <td>{book.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
            <div className="col-lg-3">
                <Card style={{ minWidth: '18rem' }}>
                    <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
};

export default MyOrders;