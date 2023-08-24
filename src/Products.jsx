import { Card } from "react-bootstrap";
const Products = (props) =>{
    const {id, title, category, price, description, image, rating} = props;
    return(

        <div className="product-card">
            <Card.Title>{title}</Card.Title>
            <Card.Img className="product-image" src={image} alt={title} />

            <Card.Text>{description}</Card.Text>
            <Card.Text>Category: {category}</Card.Text>
            <Card.Text>Price:{price}</Card.Text>
        </div>
    )
}

export default Products