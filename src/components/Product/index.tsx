import { arrayProduct } from "../../data/data";
import { Container } from "./style";
import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from "../../context/cart";
import { useContext } from "react";
import { Link } from "react-router-dom";


export function Product(){

    const products = arrayProduct

    const {AddProduct, RemoveProduct}:any = useContext(CartContext)

    return(
        <Container>
            <h1>Nossos Cafés</h1>
            <div className="e">

            {products.map((props)=>(
                <div className="card">
                    <img src={props.image} alt="imagem do produto" />
                    <div className="section-tipo">
                        {props.tipo.map(props=>(
                            <p className="tipo">{props.name}</p>
                            ))}
                    </div>
                    <span className="name">{props.name}</span>
                    <p className="description">{props.description}</p>
                    <div className="price">
                        <span className="preco"><p>R$</p>{props.preço}0</span>
                        <div>
                            <span className="qtd">
                                <button onClick={()=>RemoveProduct(props.id, props.preço)}>-</button>
                                {props.qtd}
                                <button onClick={()=>AddProduct(props.id, props.preço)}>+</button>
                            </span>
                            <button className="icon-shop"><Link className="link" to={`/ShopProduct`}><FaShoppingCart/></Link></button>
                        </div>
                    </div>
                </div>
            ))}
            
            </div>
        </Container>
    )
}