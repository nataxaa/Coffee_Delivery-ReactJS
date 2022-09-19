import { Container } from "./style";
import image from '../../images/Logo_header.png'
import {MdLocationOn} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'

export function Header(){
    return(
        <Container>
            <img src={image} alt="logo do site" />
            <div>
                <p className="location"><MdLocationOn/> Fortaleza, CE</p>
                <p className="shop-cart"><FaShoppingCart/></p>
            </div>
        </Container>
    )
}