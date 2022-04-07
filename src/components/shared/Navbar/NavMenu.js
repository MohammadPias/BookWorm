import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';


const NavMenu = () => {
    const { handleSignOut, user } = useFirebase();
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow-sm'>
            <Container>
                <Navbar.Toggle className='mx-auto' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/discover">Discover</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link>
                            {user?.displayName}
                        </Nav.Link>
                        {
                            user?.email ?
                                <Nav.Link>
                                    <Button onClick={handleSignOut} className='rounded-pill' variant='primary' size="sm">Logout</Button>
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

export default NavMenu;