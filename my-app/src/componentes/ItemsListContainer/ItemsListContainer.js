import './item-list-container.css'

export const ItemsListContainer = ({greeting}) => {

    return (
    <>
    
    <section>
        <h2 className="item-list-container">{greeting}</h2>
        <hr/>
    </section>
    </>
    
    )
         
}