import axios from "axios";
import Products from "./Products";
import { Card } from "react-bootstrap";

const api = 'https://fakestoreapi.com/products/';

const {data: products} = await axios.get(api)

const ProductsList = () =>{

    console.log(products)
    return(
        <div className="products-container col">
            {
                products.map((product) => (
                    <Products key={product?.id} {...product} />
                ))
            }
        </div>
    )
   
}

export default ProductsList