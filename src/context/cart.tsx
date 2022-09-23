import { createContext, useState } from "react"

import { arrayProduct } from "../data/data"



export const CartContext = createContext({})

interface ProductProps{
    id: number
    name: string
    tipo: any[]
    preço: number
    description: string
    qtd: number
    image: any
}

export default function CartProvider({children}:any){

    const produtos = arrayProduct
    const [item, setItem] = useState<any[]>([])
    const [total, setTotal] = useState(0);
    const [quant, setQuant] = useState(0);

    function AddProduct(id: number, preço: number){
        const copy = [...item]
        const aux = copy.find(props=>props.id == id)
        const itemProduto = produtos.find(props=>props.id == id)

        if(!aux && itemProduto){
            const aux1 = quant
            setQuant(aux1 + 1)
            itemProduto.qtd = itemProduto.qtd + 1
            copy.push(itemProduto as any)
            
        }else{
            aux.qtd = aux.qtd + 1
            const aux1 = quant
            setQuant(aux1 + 1)
        }
        const aux1 = total
        
        setTotal(aux1 + preço) 
        setItem(copy)
    }

    function RemoveProduct(id:number, preço:number){
        const copyProducts = [...item]

        const aux = copyProducts.find(props=>props.id === id)

        if( aux && aux.qtd > 1){
            aux.qtd = aux.qtd - 1 
            const aux1 = total
            setTotal(aux1 - preço)
            const aux2 = quant
            setQuant(aux2 - 1)
            setItem(copyProducts)
        }else if(aux.qtd == 1){
            aux.qtd = aux.qtd - 1
            const arrayfilter = copyProducts.filter(props=>props.id !== id)
            console.log()
            const aux1 = quant
            
            setQuant(aux1 - 1)
            const aux2 = total
            setTotal(aux2 - preço)
            console.log(copyProducts)
            setItem(arrayfilter)

        }

    }

    function RemoveComplete(id:number, preco:number, qtd: number){
        const copyArray = [...item]
    
        const aux = copyArray.filter(props=>props.id !== id)

        const aux1 = quant
        setQuant(aux1 - qtd)

        const aux2 = total
        setTotal(aux2 - qtd*preco)

        setItem(aux)


    }



    return(
        <CartContext.Provider value={{AddProduct, quant, total, item, RemoveProduct, RemoveComplete}}>
            {children}
        </CartContext.Provider>
    )
}