import { createContext } from "react"
import {useLocalStorage} from '../components/LocalStorage/useLocalStorage'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage('id', [])

    const agregarAlCarrito = (item) => {
      //consulta si el producto ya esta en el carrito
      if (isInCart(item.id)){
        //Filtrado de producto que se quiere agregar
        const repetido = cart.find((prod)=> prod.id === item.id)
        //Sumando la cantidad que se quiere agregar al producto que ya esta en el carrito
        repetido.count = repetido.count + item.count
        //Separando el resto de productos que son distintos al que se quiere agregar.
        const newCart = cart.filter((prod)=> prod.id !== item.id)
        //actualiza carrito
        setCart([...newCart,repetido])
      }else{
        setCart( [...cart, item] )
      }
      
    }
    
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    const cantidadCart = () => {
      return cart.reduce((acc, prod) => acc + prod.count, 0)
    }

    const totalCart = () => {
      return cart.reduce((acc, prod) => acc + prod.count * prod.precio, 0)
    }

    const vaciarCart = () => {
        setCart([])
    }

    const eliminarItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            cantidadCart,
            totalCart,
            vaciarCart,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}