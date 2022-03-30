import { Carousel } from '../Carousel/Carousel';
import { ItemsListContainer } from '../ItemListContainer/ItemsListContainer';
import { Footer } from '../Footer/Footer';



export const Home = () => {
    
    return (
        <div>
           <Carousel/>
            <ItemsListContainer/>
            <Footer/>
        </div>
    )
}