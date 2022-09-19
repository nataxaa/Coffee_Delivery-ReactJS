import styled from "styled-components";


export const Container = styled.div`

margin-top: 6rem ;
height:480px ;
div.first{
    display:grid ;
    grid-template-columns:1fr 1fr ;
    div.text{
        width:560px ;
        p{
            font-size:20px ;
            margin-top:1rem ;
            color:var(--base-subtitle) ;
        }
    }

    div.icons{
        display: grid ;
        grid-template-columns:1fr 1fr ;
        margin-top:4rem ;
        span{
            margin-bottom:20px ;
            color:var(--base-text) ;
            display:flex ;
            align-items:center ;
            gap:10px;
        }
        .shopcart{
            color:var(--white) ;
            background-color: var(--yellow-dark) ;
            padding:8px ;
            border-radius: 1000px ;
        }
        .timer{
            color:var(--white) ;
            background-color: var(--yellow) ;
            padding:8px ;
            border-radius: 1000px ;
        }
        .pack{
            color:var(--white) ;
            background-color: var(--base-text) ;
            padding:8px ;
            border-radius: 1000px ;
        }
        .coffe{
            color:var(--white) ;
            background-color: var(--purple) ;
            padding:8px ;
            border-radius: 1000px ;
        }

    }



    h1{
        font-family:'Baloo 2' ;
        font-size:40px ;
    }
    img{
        width:476px ;
        height:360px ;
    }
}

`