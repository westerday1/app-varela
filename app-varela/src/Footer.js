import { Container } from "react-bootstrap"
import Nav from "./Nav"
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer>
            <Container>
                <h2>hola bienvenidos a mi pagina web </h2>
                
                <Nav/>
            </Container>
        </footer>   
    )
}

export default Footer