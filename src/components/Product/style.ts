import styled from "styled-components";



export const Container = styled.div`

    margin-top:5rem ;
    div.e{
        display:grid ;
        grid-template-columns: repeat(4, 1fr) ;
        gap:10px;
    }
    div.card{
        background-color:var(--base-card) ;
        align-items:center ;
        display:flex ;
        flex-direction:column ;
        margin-bottom:40px ;
        border-radius: 6px 36px;

        span.name{
            font-family: 'Baloo 2' ;
            font-size:20px ;
            margin-bottom:8px ;
        }

        p.description{
            font-size:14px ;
            color:var(--base-label) ;
            margin-left:20px ;
            margin-right:20px ;
            
            text-align:center ;
            width:fit-content ;
            height:4rem ;
        }
        span.preco{
            color: var(--base-text) ;
            font-family: 'Baloo 2' ;
            font-size:24px ;
            display:flex ;
            align-items:center ;
            p{
                font-size:14px ;
                color:var(--base-label) ;
            }
        }
        img{
            position:relative ;
            top:-2rem ;
            width:fit-content ;
            height:fit-content ;
        }
        div.price{
            display:flex ;
            align-items:center ;
            width:10rem ;
            gap:20px;
            padding-bottom:20px ;
            div{
                display:flex ;
                gap:5px;
            }
            button.icon-shop{
                background-color:var(--purple-dark) ;
                color: var(--white) ;
                padding:8px ;
                border-radius:6px ;
                .link{
                    color: var(--white) ;
                }
            }
            span.qtd{
                background-color: var(--base-button);
                display:flex ;
                align-items:center ;
                padding:8px ;
                gap:6px;
                font-size:20px ;
                border-radius:6px ;
            }
            button{
                background:none ;
                border:none ;
                font-size:20px ;
                color:var(--purple) ;
            }
        }
        div.section-tipo{
            display:flex ;
            margin-top: -1.3rem ;
            margin-bottom:12px ;
            p.tipo{
                background-color:var(--yellow-light) ;
                color: var(--yellow-dark) ;
                margin-right:5px ;
                font-size:10px ;
                padding: 4px 8px ;
                border-radius:100px ;
                
            }
        }
    }
    h1{
        font-family:'Baloo 2';
        margin-bottom:4rem ;
    }

`