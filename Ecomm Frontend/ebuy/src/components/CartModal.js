import { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import CartRow from './CartRow';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { GiCancel } from 'react-icons/gi';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function CartModal(props) {
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const couponRef = useRef(null);
    const [toastMsg, setToastMsg] = useState("");

    useEffect(() => {
        let amount = 0;
        for (let key of Object.keys(props.cart)) {
            amount += props.cart[key].price * props.cart[key].order_quantity
        }
        setTotal(Math.round((amount - discount) * 100) / 100);
    }, [props, discount])

    function handleTotal(key, flag) {
        props.cart[key].order_quantity += flag;
        setTotal(Math.round((total + flag * props.cart[key].price) * 100) / 100);
        if (props.cart[key].order_quantity === 0) {
            props.removeCart(key);
        }
    }

    function checkout() {
        let orderData = {
            products: [],
            amount: total
        }
        if (coupon) {
            orderData.coupon_code = coupon;
        }
        for (let key of Object.keys(props.cart)) {
            orderData.products.push({
                product_id: props.cart[key]._id,
                quantity: props.cart[key].order_quantity
            })
        }
        axios.post(`${BACKEND_URL}/order`, orderData).then((response) => {
            setToastMsg("Order Successful!");
            setShow(true);
        }).catch(error => {
            console.error(error);
        });
    }

    function applyCoupon() {
        axios.get(`${BACKEND_URL}/coupon/${couponRef.current.value}`).then((response) => {
            if (!response.data) {
                setToastMsg("Invalid Coupon!");
                setShow(true);
            } else {
                setCoupon(response.data.coupon_code);
                setDiscount(response.data.discount);
            }
        }).catch(error => {
            console.error(error);
        });
    }

    function clearCoupon() {
        setCoupon("");
        setDiscount(0);
    }
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(props.cart).map((k, i) => (
                                <CartRow product={props.cart[k]} key={k} k={i} handleTotal={handleTotal} />
                            ))
                        }
                        {
                            coupon.length > 0 &&
                            <tr>
                                <td></td>
                                <td>Coupon Applied [{coupon}]</td>
                                <td>{-discount}</td>
                                <td><Button variant="outline-danger" onClick={() => clearCoupon()}>
                                    <GiCancel />
                                </Button></td>
                            </tr>
                        }
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>{total}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                {
                    coupon.length === 0 &&
                    <InputGroup className="w-50" style={{ display: 'inline-flex' }}>
                        <Form.Control
                            placeholder="Have Coupon?" ref={couponRef}
                        />
                        <Button variant="info" onClick={() => applyCoupon()}>
                            Apply
                        </Button>
                    </InputGroup>
                }
                <Button variant="success" onClick={() => checkout()} style={{ float: 'right' }}>
                    Checkout
                </Button>

            </Modal.Body>
            <ToastContainer className="p-3" position='top-left'>
                <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">{toastMsg}</strong>
                    </Toast.Header>
                </Toast>
            </ToastContainer>
        </Modal>
    );
}

export default CartModal;