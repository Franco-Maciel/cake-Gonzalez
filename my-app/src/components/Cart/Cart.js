import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button} from "react-bootstrap"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link } from "react-router-dom"
import gift from '../img/no-se.gif'

export const Cart = () => {

    
    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    // render si el cart está vacío
    if (cart.length === 0) {
        return <div className="container my-4" id="containerCarritoVacio">
                    <h2>Tu carrito está vacío</h2>
                    <img className="giftCarrito" src= {gift} alt=""/> 
                    <Link to="/" className="btn btn-success">Seguir mirando</Link>
                </div>
    }

    return (
        <div className="container my-4">
            
            
            {   
                totalCart() === 0
                ? 
                <>
                    <hr/>
                    <p id="carrito-vacio">Carrito vacío</p>
                    <Link to="/" className="btn btn-success my-3">
                        Seguir comprando
                    </Link>
                </>  
                :
                <>
                <h2>Tu compra</h2>
                <hr/>
                     {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>{item.desc}</p>
                        <p>Cantidad: {item.count}</p>
                        <p>Sub-total: ${item.count * item.precio}</p>
                        <i><DeleteForeverOutlinedIcon fontSize="medium"  onClick={() => eliminarItem(item.id)}/></i>
                    </div>
                ))
            }

            <hr/>
            <h2>Total: ${totalCart()}</h2>

            <div className="my-2">
                <Button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</Button>
                <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
            </div>
            </>

        }
           
        </div>
    )
}