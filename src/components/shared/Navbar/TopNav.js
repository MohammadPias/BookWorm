import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const TopNav = () => {
    const { handleSignOut, user } = useFirebase();
    console.log(user.email)
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Container>
                <Navbar.Brand href="#home">BookWorm</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            {user?.email}
                        </Nav.Link>
                        {
                            user?.email ?
                                <Nav.Link>
                                    <Button onClick={handleSignOut} className='rounded-pill' variant='secondary' size="sm">Logout</Button>
                                </Nav.Link>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        <Button className='rounded-pill' variant='outline-primary' size="sm">Login</Button>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/signup">
                                        <Button className='rounded-pill' variant='secondary' size="sm">Signup</Button>
                                    </Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;