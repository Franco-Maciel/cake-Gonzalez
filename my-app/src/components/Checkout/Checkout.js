import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { generarOrden } from "../../firebase/generarOrden"
import { ThankYou } from "./ThankYou"
import { Validar } from "./Validar"
import { SuOrden } from "./SuOrden"

export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion:'',
        localidad:'',
        provincia:'',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Validar(values) && generarOrden(values, cart, totalCart, setOrderId, vaciarCart)
    }


    if (orderId) {
        return <ThankYou order={orderId}/>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
   
    return <>
        <div className="contenedorCheckout">
        
        <SuOrden/>
        <div className="vl"></div>
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="dirección de envío"
                    value={values.direccion}
                    onChange={handleInputChange}
                    name='direccion'
                />
                 <input
                    className="form-control my-2"
                    type='text'
                    placeholder="localidad"
                    value={values.localidad}
                    onChange={handleInputChange}
                    name='localidad'
                />
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="provincia"
                    value={values.provincia}
                    onChange={handleInputChange}
                    name='provincia'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu teléfono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className="btn btn-success">
                    Enviar
                </button>
            </form>
            
            </div>
           
            </div>
    
    </>
}