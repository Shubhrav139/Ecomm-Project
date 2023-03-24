import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function LoginModal(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        props.onHide();
        axios.post(`${BACKEND_URL}/login`, userData).then((response) => {
            localStorage.setItem('token', response.data);
            props.setRole(response.data);
        }).catch(error => {
            console.error(error);
        });
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
                    Log In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;