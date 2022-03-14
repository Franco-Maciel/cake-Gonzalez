import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const Item = ( {id, nombre, precio, img, desc, Novedad} ) => {

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
                <Link to={`/detail/${id}`} className ="linkCard">
                    <button variant="primary" className="ver-mas" ><VisibilityOutlinedIcon className="VisibilityOutlinedIcon"/><h6 className="VisibilityText" >VER</h6> </button>
                </Link>
            </Card.Body>
        </Card>
    )
}