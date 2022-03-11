import { useContext } from "react"           
import { CartContext } from "../../context/CartContext"           

export const SuOrden = () => {
    const {cart, totalCart} = useContext(CartContext)
    return <>
                <div className="container my-2" id="suOrden">
                <h4>Su Orden</h4>
                <hr/>
                {
                cart.map((item) => (
                    <div key={item.id}>
                        <h5>{item.nombre}</h5>
                        <p>{item.desc}</p>
                        <p>Cantidad: {item.count}</p>
                        <p>Sub-total: ${item.count * item.precio}</p>
                    </div>
                    ))
                }

                <hr/>
                <h4>Total: ${totalCart()}</h4>
                </div>
        </>
 }           
            
            