import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../components/LoginModal';
import CartModal from './CartModal';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavbarComponent(props) {
    const [loginModal, setLoginModal] = useState(false);
    const [cartModal, setCartModal] = useState(false);


    function removeCart(ind) {
        delete props.cart[ind];
        props.restoreCart(ind);
    }
    const openCart = () => {
        setCartModal(true);
    }
    function setRole(role) {
        props.setRole(role);
    }

    const logout = () => {
        localStorage.clear("token");
        setRole('');
    }


    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">EBuy</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                    {props.role === "" &&
                        <Button variant="primary" onClick={() => setLoginModal(true)}>
                            Log In
                        </Button>}

                    {props.role === "admin" && (
                        <div style={{ display: 'flex' }}>

                            <DropdownButton id="admin-btn" title="Admin">
                                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    )
                    }
                    {props.role === "user" && (
                        <div style={{ display: 'flex' }}>
                            <DropdownButton id="user-btn" title="User">
                                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                            </DropdownButton>
                            <Button variant="outline-primary" onClick={() => openCart()}>
                                <AiOutlineShoppingCart /> <Badge bg="dark">{Object.keys(props.cart).length}</Badge>
                            </Button>
                        </div>
                    )}
                </Container>
                <Login
                    setRole={setRole}
                    show={loginModal}
                    onHide={() => setLoginModal(false)} />
                <CartModal
                    cart={props.cart}
                    removeCart={removeCart}
                    show={cartModal}
                    onHide={() => setCartModal(false)} />

            </Navbar>
        </>
    );
}

export default NavbarComponent;