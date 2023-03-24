import Button from 'react-bootstrap/Button';

function CartRow(props) {

    function decreaseQuantity(k) {
        props.handleTotal(k, -1);
    }
    function increaseQuantity(k) {
        props.handleTotal(k, 1);
    }

    return (
        <tr>
            <td>{props.k + 1}</td>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <td>
                <Button variant="outline-primary" onClick={() => decreaseQuantity(props.product._id)}>
                    -
                </Button>
                {props.product.order_quantity}
                <Button variant="outline-primary" onClick={() => increaseQuantity(props.product._id)}>
                    +
                </Button>
            </td>
        </tr>
    );
}

export default CartRow;