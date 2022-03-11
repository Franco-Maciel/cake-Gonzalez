export const Validar = (values) => {
    
    let validateMail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let validateNumber = /^[0-9]{10,14}$/;
    
    if (values.nombre.length < 5) {
        alert("El nombre es demasiado corto")
        return false
    }
    if (!validateMail.test(values.email)) {
        alert("El email es inválido")
        return false
    }
    if (!validateNumber.test(values.tel)) {
        alert("El teléfono es inválido")
        return false
    }

    return true
}