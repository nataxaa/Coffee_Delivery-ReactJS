import { Container } from "./style";
import image from '../../images/Logo_header.png'
import {MdLocationOn} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

export function Header(){

    const {quant}:any = useContext(CartContext)

    return(
        <Container>
            <img src={image} alt="logo do site" />
            <div>
                <p className="location"><MdLocationOn/> Fortaleza, CE</p>
               
                <p className="shop-cart">
                    <Link className="link" to={'/ShopProduct'}>
                    <FaShoppingCart className="icon-shop"/>
                    <span className="value-quant">{quant}</span>
                    </Link>
                </p>
               
                
            </div>
        </Container>
    )
}