import {Nav, Navbar} from "react-bootstrap";

function MyNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">WYDATKI</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Rachunki</Nav.Link>
                <Nav.Link href="/currency">Waluty</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar