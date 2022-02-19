
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemCount = ({max, min = 1, count, setCount}) => {

    

    const handleSiguiente = (e) => {
        e.stopPropagation()
        
        count < max && setCount(count + 1)
              
    }

    const handleAnterior = () => {
        count > min && setCount(count - 1)
    }

    return (
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
    )
}
