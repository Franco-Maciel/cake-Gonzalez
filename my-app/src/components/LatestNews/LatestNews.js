import { Contenedor } from "../Contenedor/Contenedor"
import { Item } from "../Item/Item"


export const LatestNews = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Novedades</h2>   
            <hr/>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}