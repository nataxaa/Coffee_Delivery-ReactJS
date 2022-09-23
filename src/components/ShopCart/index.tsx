import { Container } from "./style";
import {MdLocationOn, MdAttachMoney} from 'react-icons/md'
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { useNavigate } from "react-router-dom";
import {FaRegTrashAlt} from 'react-icons/fa'


export function ShopCart(){
    const navigate = useNavigate();
    const {AddProduct, total, quant, item, RemoveProduct, RemoveComplete}:any = useContext(CartContext)
    const totalReal = total + 3 

    async function handlemore(e:any, id:number, preco:number){
            e.preventDefault();
            AddProduct(id, preco)
    }

    async function handleSub(e:any, id:number, preco:number) {
        e.preventDefault();
        RemoveProduct(id, preco)
    }

    async function handleRemove(e:any, id:number, preco:number, qtd:number){
        e.preventDefault();
        RemoveComplete(id, preco, qtd)
    }

    return(
        <Container>
            <div>
                
                <h1>Complete seu pedido</h1>
                
                <form>
                    <div className="form-top">
                    <span><MdLocationOn className="icon"/> Endereço de Entrega</span>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                    <input type="number" placeholder="CEP" className="cep"/>
                    <input type="text" placeholder="Rua" />

                    <div className="complemento-endereco">
                        <input type="number" placeholder="Número"/>
                        <input type="text" placeholder="Complemento"/>
                    </div>

                    <div className="city">
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" className="uf"/>
                    </div>
                </form>

                <div className="pay">
                    <p><MdAttachMoney className="icon-money"/> Pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    <div className="buttons-pagamentos">
                        <button>CARTÃO DE CRÉDITO</button>
                        <button>CARTÃO DE DÉBITO</button>
                        <button>DINHEIRO</button>
                    </div>
                </div>

            </div>

            <div>
                <h1>Cafés Selecionados</h1>
                <form className="cardapio">
                    {item.map((props:any)=>(
                        <div className="card">
                            <img src={props.image} alt="imagem do produto" />
                            <div className="description">
                                <span>{props.name}</span>
                                <div className="quant">
                                    <p className="quantidade">
                                        <button className="icon" onClick={(e)=>handleSub(e, props.id, props.preço)}>-</button>
                                         {props.qtd}
                                        <button className="icon" onClick={(e)=>handlemore(e, props.id, props.preço)}>+</button>
                                    </p>
                                    <button className="remove" onClick={(e)=>handleRemove(e, props.id, props.preço, props.qtd)}><FaRegTrashAlt/>REMOVER</button>
                                </div>
                            </div>
                            <p className="preco"><p>R$</p> {props.preço}0</p>
                        </div>
                    ))}
                    <span className="value-cart">Total de itens <p>R$ {total.toFixed(2)}</p></span>
                    <span className="value-cart">Entrega <p>R$ 3.00</p></span>
                    <span className="total">Total <p>R$ {totalReal.toFixed(2)}</p></span>
                    <button className="pedido">Confirmar Pedido</button>
                </form>
            </div>
        </Container>
    )
}