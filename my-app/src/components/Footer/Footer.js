import {Link} from 'react-router-dom'

export const Footer = () => {

    return (
            <>
            
            <footer className="page-footer font-small blue" id="footer">

           
            <div className="footer-copyright text-center py-3" id="crFooter">© 2022 Copyright:
            <Link to="/" ><p> healthydiet.com</p></Link>
            Create by
            <a href="mailto:francodavidgonzalez1@gmail.com"> Franco Gonzalez</a>
            
            </div>
               

            </footer>
           
            </>
    )
}


