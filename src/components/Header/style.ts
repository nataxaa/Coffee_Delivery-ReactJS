import styled from "styled-components";


export const Container = styled.header`

    display:flex ;
    justify-content:space-between ;
    padding:2rem 0 ;
    align-items:center ;
    width:1029px ;
   
    .icon-shop{
        color: var(--yellow-dark) ;
    }

    .link{
        display:flex ;
        text-decoration:none ;
    }
    .value-quant{
        position: absolute;
        font-size:11px;
        top:30px ;
        margin-left:14px ;
        color:var(--white) ;
        background-color: var(--yellow-dark) ;
        border-radius:12px ;
        padding: 2px 4px ;
        align-items:center ;
        text-align:center ;
        display:flex ;
    }

   div{
    display:flex ;
    gap:12px;
   }

    img{
        height:40px ;
    }
    p.location{
        background-color:var(--purple-light) ;
        width:fit-content ;
        height:fit-content ;
        color: var(--purple-dark) ;
        padding: 8px ;
        border-radius:6px ;
        font-size:14px ;
    }
    p.shop-cart{
        background-color:var(--yellow-light) ;
        width:fit-content;
        height:fit-content ;
        color:var(--yellow-dark) ;
        padding: 8px ;
        border-radius:6px ;
    }

`