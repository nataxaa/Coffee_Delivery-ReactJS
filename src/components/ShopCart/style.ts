import styled from "styled-components";



export const Container = styled.div`

margin-top:2.5rem ;
display:grid ;
grid-template-columns:2fr 1fr ;
gap:20px;
h1{
    font-size:18px ;
    margin-bottom:15px ;
    font-family: 'Baloo 2' ;
}

div.pay{
    background-color: var(--base-card) ;
    margin-top:12px ;
    padding:40px ;
    margin-bottom:4rem ;
    border-radius: 6px ;
    span{
        font-size:14px ;
        color: var(--base-subtitle) ;
        margin-left:23px ;
    }
    p{
        display:flex ;
        align-items:center ;
        color:var(--text-base) ;
        font-size:17px ;
        .icon-money{
            color:var(--purple) ;
            font-size:25px ;
        }
    }

    div.buttons-pagamentos{
        display:flex ;
        justify-content:center ;
        margin-top:2rem ;
        gap:12px;
        
    }

}


form{
    background-color:var(--base-card) ;
    display:flex ;
    flex-direction: column ;
    border-radius:6px ;
    padding:40px ;
    gap:16px;
    span{
        font-size:16px ;
        color:var(--text-base) ;
        display:flex ;
        align-items:center ;
        .icon{
            color:var(--yellow-dark) ;
            font-size:1.3rem ;
        }
    }
    p{
        color:var(--base-subtitle) ;
        font-size:14px ;
        margin-left:21px ;
    }
    div.form-top{
        margin-bottom:20px ;
    }
}
input{
    background-color: var(--base-input) ;
    padding:12px ;
    border-radius:4px ;
    border: 1px solid var(--base-button);
    ::placeholder{
        color: var(--base-label) ;
        font-size:14px ;
    }
}

input.cep{
    width:200px ;
}
.uf{
    width:50px ;
}


div.complemento-endereco{
    display:grid ;
    grid-template-columns: 1fr 2fr ;
    gap:10px;
}
div.city{
    display:grid ;
    grid-template-columns:3fr 3fr 1fr ;
    gap:10px;
}


form.cardapio{
    background-color:var(--base-card) ;
    border-radius: 6px 44px;
    display:flex ;

    p.preco{
        position:relative ;
        top:7px ;
        color:var(--base-text) ;
        font-weight:bold ;
        font-size:14px ;
        gap:3px;
        display:flex ;
    }

    button.remove{
        font-size:11px ;
        background-color: var(--base-button) ;
        border:none ;
        border-radius:6px ;
        padding:5px ;
        color:var(--base-text) ;
        display:flex ;
        align-items:center ;
        gap:5px;
    }
    p.quantidade{
        background-color:var(--base-button) ;
        padding:8px ;
        display:flex ;
        align-items:center ;
        gap:6px;
        font-size:16px ;
        border-radius:6px ;
        button.icon{
            border-radius:6px ;
            background:none ;
            border:none ;
            color:var(--purple) ;
            font-size:18px ;
            
        }
    }
    img{
        width:64px ;
        height:64px ;
    }
    div.description{
        display:flex ;
        flex-direction:column ;
        padding-top:6px ;
        margin-left:15px ;
    }
    div.card{
        display:flex ;
        border-bottom:1px solid var(--base-button) ;
        padding-bottom:20px ;
        span{
            width:10rem ;
        }
    }
    div.quant{
        display:flex ;
        margin-top:5px ;
        gap:5px;
        margin-left:-20px ;
    }

    span.value-cart{
        color: var(--base-text) ;
        font-size:14px ;
        display:flex ;
        justify-content:space-between ;
        p{
            font-size:14px ;
        }
    }
    span.total{
        font-weight:bold ;
        font-size:18px ;
        color: var(--base-subtitle) ;
        display:flex ;
        justify-content:space-between ;
        p{
            font-weight:bold ;
            color: var(--base-subtitle);
            font-size:18px ;
        }
    }
    button.pedido{
        color: var(--white) ;
        background-color: var(--yellow) ;
        padding:12px 8px ;
        border-radius: 6px ;
        border:none;
        cursor:pointer ;
    }

    
}

`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'blue' | 'red' |'green' ;
  }

  const colors = {
    green: '#8047F8',
    red: '#8047F8',
    blue: '#8047F8'
  }


  export const Button = styled.button<RadioBoxProps>`
    cursor: pointer;
    padding:16px;
    border-radius: 6px;

    border: 1px solid ${(props) => props.isActive 
        ? colors[props.activeColor]
        : '#EFF1C5'};
         
  
  `


