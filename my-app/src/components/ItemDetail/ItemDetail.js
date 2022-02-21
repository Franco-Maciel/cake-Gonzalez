import { useContext, useState } from "react"

import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"



export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {


    const [add, addItem] = useState(false)

    const onAdd = (count) => {
        addItem(true)
        const itemAdd = {
            id, nombre, img, desc, precio, stock, count
        }
        agregarAlCarrito(itemAdd)
    }

    
       

      

    const {  agregarAlCarrito } = useContext(CartContext)


    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} className = "img-itemDetail"/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            {
                add 
                ?   
                    <Link to="/cart" className="btn btn-success my-3">
                        Terminar mi compra
                    </Link>               
                :
                    <>
                        <ItemCount 
                            max={stock} 
                            min= {1}
                            onAdd = {onAdd}
                        />

                        
                    </>
            }
            
        </div>
    )
}