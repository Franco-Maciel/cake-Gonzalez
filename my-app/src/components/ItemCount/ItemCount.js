import {useContext,  useState } from "react"
import { CartContext } from "../../context/CartContext"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemCount = ({max, min = 1,id, nombre, precio, desc}) => {

    const [count, setCount] = useState(1)

    const handleSiguiente = (e) => {
        e.stopPropagation()
        
        count < max && setCount(count + 1)
              
    }

    const handleAnterior = () => {
        count > min && setCount(count - 1)
    }

    const {  isInCart, agregarAlCarrito } = useContext(CartContext)
    const handleAgregar = () => {
        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, count, desc
            }

        agregarAlCarrito(addItem)
        }
    }    
    return (
        <>
        <div id="handle-count">
            <button 
            onClick={handleAnterior} 
            id= "back-itemDetail"
            disabled={count === 1}
            >
                <RemoveIcon/>
            </button>
            <h5 className="count">{count}</h5>
            <button 
            onClick={handleSiguiente} 
            
            id= "next-itemDetail"
            >
                <AddIcon/>
            </button>
    
    
        </div>
            <button
            className="btn btn-success my-2"            
            onClick={handleAgregar}
            >
                Agregar al carrito
            </button>
        </>
        
    )
}
