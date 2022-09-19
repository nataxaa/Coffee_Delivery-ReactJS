import { Container } from "./style";
import image from '../../images/logo_home.png'
import {FiPackage} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import {GiCoffeeCup} from 'react-icons/gi'
import {RiTimerFill} from 'react-icons/ri'


export function Home(){
    return(
        <Container>
            <div className="first">
                <div className="text">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="icons">
                    <span><FaShoppingCart className="shopcart"/> Compra simples e segura</span>
                    <span><FiPackage className="pack"/> Embalagem mantém o café intacto</span>
                    <span><RiTimerFill className="timer"/> Entrega rápida e rastreada</span>
                    <span><GiCoffeeCup className="coffe"/> O café chega fresquinho até você</span>
                </div>
                </div>
                <img src={image} alt="imagem da pagina inicial, um cafe" />
            </div>
        </Container>
    )
}