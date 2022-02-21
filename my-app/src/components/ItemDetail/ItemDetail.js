import { useContext, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { pedirDatos } from '../helpers/pedirDatos';


export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {


    const [item, setItem] = useState(null)

    const { itemId } = useParams()
       

        pedirDatos()
            .then((res) => {
                setItem( res.find((el) => el.id === Number(itemId)) )
            })

    const {  isInCart } = useContext(CartContext)


    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} className = "img-itemDetail"/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            {
                isInCart(id) 
                ?   
                    <Link to="/cart" className="btn btn-success my-3">
                        Terminar mi compra
                    </Link>               
                :
                    <>
                        <ItemCount {...item}
                            max={stock} 
                          
                        />

                        
                    </>
            }
            
        </div>
    )
}