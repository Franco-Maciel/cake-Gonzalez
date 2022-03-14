import { useState } from "react"
import { Validar } from "../Checkout/Validar"

export const ContactForm = () => {

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
        
    )
}