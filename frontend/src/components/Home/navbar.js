import {Nav, Navbar} from "react-bootstrap";

function MyNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">WYDATKI</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Rachunki</Nav.Link>
                <Nav.Link href="#link">Waluty</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar