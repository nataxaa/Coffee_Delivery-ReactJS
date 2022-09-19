import { arrayProduct } from "../../data/data";
import { Container } from "./style";
import {FaShoppingCart} from 'react-icons/fa'


export function Product(){

    const products = arrayProduct

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
                                <button>-</button>
                                {props.qtd}
                                <button>+</button>
                            </span>
                            <button className="icon-shop"><FaShoppingCart/></button>
                        </div>
                    </div>
                </div>
            ))}
            
            </div>
        </Container>
    )
}