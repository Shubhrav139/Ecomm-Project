import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function EditModal(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        let productData = {};
        if (event.target.title.value) {
            productData.title = event.target.title.value
        }
        if (event.target.price.value) {
            productData.price = event.target.price.value
        }
        if (event.target.quantity.value) {
            productData.quantity = event.target.quantity.value
        }
        if (event.target.category.value) {
            productData.category = event.target.category.value
        }

        props.onHide();
        axios.patch(`${BACKEND_URL}/product/${props.product_id}`, productData).then((response) => {
            let products = props.products;
            const ind = products.findIndex((prod) => prod._id === response.data._id);
            products[ind] = response.data;
            props.setProducts([...products]);

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
                    Edit Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Enter Quantity" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ float: 'right' }}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditModal;