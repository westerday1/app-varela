import { Container } from "react-bootstrap"

const Main = ({children}) => {

    return (
        <Container fluid as="main">
            <h2>Home</h2>
            {children}
        </Container>
    )
}

export default Main