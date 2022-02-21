import { useState } from "react"

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemCount = ({max, min = 1,onAdd}) => {

    const [count, setCount] = useState(min)

    const handleSiguiente = () => {    
        count < max && setCount(count + 1)
              
    }

    const handleAnterior = () => {
        count > min && setCount(count - 1)
    }

    
     
    return (
        <>
        <div id="handle-count">
            <button 
            onClick={handleAnterior} 
            id= "back-itemDetail"
            
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
            onClick={() =>onAdd(count)}
            >
                Agregar al carrito
            </button>
        </>
        
    )
}
