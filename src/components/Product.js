import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { changeQuantity } from "../features/cartSlice";
import RatingStars from "./RatingStars";

const Product = (props) => {
    const { image, title, price, rating, description, quantity } = props;
    const product = props
    const cartItems = props.cartItems
    const dispatch = useAppDispatch();
    const location = useLocation();

const handleAddProduct = () => {
    dispatch(changeQuantity({ ...product, quantity: 1 }))
}

const handleRemoveProduct = () => {
    dispatch(changeQuantity({ ...product, quantity: -1 }))
}

return (
<section className="Detail" data-testid="product">
<Card style={{ width: '25rem', height: "47rem", margin: '1rem'}}>
    <Card.Img variant="top" src={image} style={{ height: '10rem', objectFit: 'contain', padding: "1rem" }} />
    <div className="d-flex align-items-center mb-2 p-2 mx-auto rating">
  <RatingStars rating={rating}/>
</div>
    <Card.Body className="d-flex flex-column justify-content-between p-1">
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <div className="d-flex justify-content-between align-items-center">
  <div className="Detail_info mx-auto">
    <span className="Detail_info-price p-1">{price} €</span>
  </div>
  <div className="Detail_info-header">
    <span>{quantity ? `Quantity: ${quantity}` : ""}</span>
  </div>
</div>
    </Card.Body>
    <Card.Footer>
        <Button variant="primary" onClick={handleAddProduct} hidden={location.pathname !== "/cart"}>
            Add to Cart
        </Button>
        <Button className="m-2" variant="danger" onClick={handleRemoveProduct} hidden={!cartItems?.find((item) => item.id === product.id)}>
            Remove from Cart
        </Button>
        <Button variant="primary" onClick={handleAddProduct} hidden={location.pathname !== "/"}>Add to Cart</Button>
    </Card.Footer>
  </Card>
</section>
)
}

export default Product;