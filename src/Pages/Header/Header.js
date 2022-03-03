import React from 'react'
import './Header.css';
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
            <Navbar className='bg-header' sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home"><img src="https://i.ibb.co/y06j4Zf/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/services">Services</Link>
                        {/* <Link className="link" to="/addService">Add Service</Link>
                        <Link className="link" to="/manageServices">Manage Services</Link> */}
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Link className="link" to="/login">Login</Link>}
                        <Navbar.Text>
                            <span className="hi">Hello</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
        </>
  )
}
