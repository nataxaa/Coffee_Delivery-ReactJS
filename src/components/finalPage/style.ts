import styled from "styled-components";


export const Container = styled.div`

margin-top:5rem ;
display:grid ;
grid-template-columns:2fr 1fr ;
gap:20px;

div.pedido{
    h1{
        color:var(--yellow-dark) ;
        font-size:32px ;
    }
    span{
        color:var(--base-subtitle) ;
        font-size:20px ;
    }
}

div.cart-pedido{
    margin-top:40px ;
    display:flex ;
    flex-direction:column ;
    gap:30px;
    border-radius: 6px 36px ;
    padding:40px ;
    border:1px solid var(--purple) ;
    width:520px ;

    .icon-money{
        color:var(--white) ;
        padding:8px ;
        background-color: var(--yellow-dark) ;
        border-radius:1000px ;
        margin-right:12px ;
    }

    .icon-timer{
        color:var(--white) ;
        padding:8px ;
        background-color:var(--yellow) ;
        border-radius:1000px ;
        margin-right:12px ;
    }

    .icon-location{
        margin-right:12px ;
        color:var(--white) ;
        background-color:var(--purple) ;
        padding:8px ;
        border-radius:1000px ;
    }
    p {
        display:flex ;
       
    }
    span{
        font-size:16px ;
    }
    tr{
        margin-left:5px ;
        font-weight:bold ;
    }
}


`