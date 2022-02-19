import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

export const Item = ( {id, nombre, precio, img,stock, desc} ) => {

    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} className = "img-item"/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary" className="ver-mas">Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}