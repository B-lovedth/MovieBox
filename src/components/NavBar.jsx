import { Navbar, Container, Dropdown,Nav} from "react-bootstrap";
import propTypes from 'prop-types';
import { logo, menu } from "../assets";
import '../styles/Navbar.css'
import Search from "./Search";

const NavBar = ({mode}) => {
  return (
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary ${mode}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Search />
          <div className="nav-end">
          <Nav.Link href="#">Sign in</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <img src={menu} alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
NavBar.propTypes={
  mode:propTypes.string
}
export default NavBar;
