import { useState } from "react"
import { Validar } from "../Checkout/Validar"

export const ContactForm = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
        textarea:'',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Validar(values) 
    }


    return (
        <div className="container my-5">
            <h2>Contactanos</h2>
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
                <textarea
                    className="form-control my-2"
                    type='textarea'
                    placeholder="escribenos..."
                    value={values.text}
                    onChange={handleInputChange}
                    name='textarea'
                    maxLength='300'
                    
                />

                <button type="submit" className="btn btn-success">
                    Enviar
                </button>
            </form>
            
            </div>
        
    )
}