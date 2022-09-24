import { Container } from "./style";
import {MdLocationOn, MdAttachMoney} from 'react-icons/md'
import {RiTimerFill} from 'react-icons/ri'
import { CartContext } from "../../context/cart";
import { useContext } from "react";
import image from '../../images/image_final.png'


export function FinalPage(){

    const {endereco}:any = useContext(CartContext)

    return(
        <Container>
            <div className="pedido">
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
                <div className="cart-pedido">
                    <p >
                        <MdLocationOn className="icon-location"/>
                        <span><p>Entrega em <tr> {endereco[0].rua}, {endereco[0].numero}</tr></p> {endereco[0].bairro} - {endereco[0].cidade}, {endereco[0].uf}</span>
                    </p>
                    <p>
                        <RiTimerFill className="icon-timer"/>
                        <span><p>Previsão de entrega</p> <tr>20 min - 30 min</tr></span>
                    </p>
                    <p>
                        <MdAttachMoney className="icon-money"/>
                        <span>Pagamento na entrega <tr>{endereco[0].type}</tr></span>
                    </p>

                </div>
            </div>
            
            <div className="image">
                <img src={image} alt="imagem de um homem em uma moto" />
            </div>
        </Container>
    )
}