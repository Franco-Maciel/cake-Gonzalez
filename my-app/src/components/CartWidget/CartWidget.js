import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { cantidadCart } = useContext(CartContext)
    
    return (
        <Link to= "/cart" className='CartWidget'>
            <ShoppingCartOutlinedIcon className='icon-widget'/>
            <span className='cantidad-cart'>{cantidadCart()}</span>
        </Link>
        
    )
}