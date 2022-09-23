import image1 from '../images/cafe8.png'
import image2 from '../images/cafe9.png'
import image3 from '../images/cafe10.png'
import image4 from '../images/cafe11.png'
import image5 from '../images/cafe12.png'
import image6 from '../images/cafe13.png'
import image7 from '../images/cafe14.png'
import image8 from '../images/cafe7.png'
import image9 from '../images/cafe6.png'
import image10 from '../images/cafe5.png'
import image11 from '../images/cafe4.png'
import image12 from '../images/cafe3.png'
import image13 from '../images/cafe2.png'
import image14 from '../images/cafe1.png'



export const arrayProduct = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        preço: 9.90,
        image: image1,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'}],
        description: 'O tradicional café feito com água quente e grãos moídos'
    },
    {
        id: 2,
        name: 'Expresso Americano',
        preço: 9.90,
        image: image2,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'}],
        description: 'Expresso diluído, menos intenso que o tradicional'
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        preço: 9.90,
        image:image3,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'}],
        description: 'Café expresso tradicional com espuma cremosa'
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        preço: 9.90,
        image:image4,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'},{id:1, name: 'GELADO'}],
        description: 'Bebida preparada com café expresso e cubos de gelo'
    },
    {
        id: 5,
        name: 'Café com Leite',
        preço: 9.90,
        image: image5,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'},{id:1, name: 'COM LEITE'}],
        description: 'Meio a meio de expresso tradicional com leite vaporizado'
    },
    {
        id: 6,
        name: 'Latte',
        preço: 9.90,
        image: image6,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'},{id:1, name: 'COM LEITE'}],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
    },
    {
        id: 7,
        name: 'Capuccino',
        preço: 9.90,
        image: image7,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'},{id:1, name: 'COM LEITE'}],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma'   
    },
    {
        id: 8,
        name: 'Macchiato',
        preço: 9.90,
        image: image8,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'},{id:1, name: 'COM LEITE'}],
        description: 'Café expresso misturado com um pouco de leite quente e espuma'
    },
    {
        id: 9,
        name: 'Mocaccino',
        preço: 9.90,
        image: image9,
        qtd:0, 
        tipo: [{ id:0, name:'TRADICIONAL'},{id:1, name: 'COM LEITE'}],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma'
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        preço: 9.90,
        image: image10,
        qtd:0, 
        tipo: [{ id:0, name:'ESPECIAL'},{id:1, name: 'COM LEITE'}],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café'
    },
    {
        id: 11,
        name: 'Cubano',
        preço: 9.90,
        image: image11,
        qtd:0, 
        tipo: [{ id:0, name:'ESPECIAL'},{id:1, name: 'ALCOÓLICO'},{id:2, name: 'GELADO'}],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã'
    },
    {
        id: 12,
        name: 'Havaino',
        preço: 9.90,
        image: image12,
        qtd:0, 
        tipo: [{ id:0, name:'ESPECIAL'}],
        description: 'Bebida adocicada preparada com café e leite de coco'
    },
    {
        id: 13,
        name: 'Árabe',
        preço: 9.90,
        image: image13,
        qtd:0, 
        tipo: [{ id:0, name:'ESPECIAL'}],
        description: 'Bebida preparada com grãos de café árabe e especiarias'
    },
    {
        id: 14,
        name: 'Irlandês',
        preço: 9.90,
        image: image14,
        qtd:0, 
        tipo: [{ id:0, name:'ESPECIAL'},{id:1, name: 'ALCOÓLICO'}],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'
    },
    

]