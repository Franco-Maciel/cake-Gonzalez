import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemDetail = ({id, nombre, img, desc, precio, categoria}) => {

    const [count, setCount] = useState(1)

    const handleSiguiente = () => {
        if (count < 5) {
            setCount(count + 1)
        }else {
            setCount(count)
        }
        
    }

    const handleAnterior = () => {
        count > 1 && setCount(count - 1)
    }
    

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} className = "img-itemDetail"/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
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
            
        </div>
    )
}