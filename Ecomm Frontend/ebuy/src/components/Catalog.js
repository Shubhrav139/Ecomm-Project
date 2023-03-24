import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import EditModal from './EditModal';
import { MdDeleteForever } from 'react-icons/md';
import AddModal from './AddModal';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

function Catalog(props) {
    const [products, setProducts] = useState([]);
    const [inCart, setInCart] = useState({});
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [productId, setProductId] = useState('');

    useEffect(() => {
        axios.get(`${BACKEND_URL}/all-product`).then((response) => {
            setProducts(response.data.result);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (props.restored[0] in inCart) {
            setInCart({
                ...inCart, [props.restored[0]]: false
            })
        }
    }, [props])

    const addToCart = (product) => {
        setInCart({
            ...inCart, [product._id]: true
        })
        props.restored[0] = -1;
        product.order_quantity = 1;
        props.handleCart(product);

    }

    const editProduct = (product_id) => {
        setProductId(product_id);
        setEditModal(true);
    }

    const deleteProduct = (product) => {
        axios.delete(`${BACKEND_URL}/product/${product._id}`).then((response) => {
            const ind = products.findIndex((prod) => prod._id === product._id);
            products.splice(ind, 1)
            setProducts([...products]);

        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 2, offset: 10 }}>
                    {props.role === "admin" &&
                        <Button variant="dark" onClick={() => setAddModal(true)}>
                            Add Product
                        </Button>}
                </Col>
            </Row>
            <Row>

                {products.map((product, k) => (
                    <Col key={k} xs={10} md={4} lg={3}>
                        <Card>
                            <Card.Img src={product.image} style={{ width: '100%', height: '15vw', objectFit: 'fill' }} />

                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Category - {product.category}</Card.Text>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'
                                }}>
                                    <Card.Text>${product.price}</Card.Text>
                                    {props.role === "user" && (inCart[product._id]
                                        ? <Button variant="outline-primary" disabled={true}>
                                            Added
                                        </Button>
                                        : <Button variant="outline-primary" onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </Button>
                                    )}
                                    {props.role === "admin" && (
                                        <div>
                                            <Button variant="outline-primary" onClick={() => editProduct(product._id)}>
                                                Edit
                                            </Button>
                                            <Button variant="outline-danger" onClick={() => deleteProduct(product)}>
                                                <MdDeleteForever />
                                            </Button>
                                        </div>
                                    )}
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <EditModal
                product_id={productId}
                products={products}
                setProducts={setProducts}
                show={editModal}
                onHide={() => setEditModal(false)} />
            <AddModal
                products={products}
                setProducts={setProducts}
                show={addModal}
                onHide={() => setAddModal(false)} />
        </Container>
    );
}

export default Catalog;