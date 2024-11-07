import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./GreetingSearchBar.css";
import { useContext, useState } from "react";
import { FaCog, FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const GreetingSearchBar = () => {
  const [query, setQuery] = useState("");
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión: ", error);
      });
  };

  return (
    <>
      <Row>
        {currentUser && (
          <Container className="containerGreeting">
            {/* saludo al usuario */}
            <Col>
              <h1 className="titteGreetings texts-fonts">
                Welcome, {currentUser.email}
              </h1>
            </Col>
            {/* buscador */}
            <Col>
              <Form onSubmit={handleSubmit} className="search-bar">
                <InputGroup className="search-input-group">
                  <InputGroup.Text className="search-icon">
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                    className="search-input"
                    id="searchInput" // Agregar un id único
                    name="search" // Agregar un name para facilitar el autofill
                  />
                </InputGroup>
                <Dropdown>
                  <Dropdown.Toggle className="custom-dropdown-toggle">
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1730322403/proyects/CashFlowPro/example/WhatsApp_Image_2024-10-12_at_14.05.55_dgthdr.jpg"
                      alt="Profile"
                      className="profile-image"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {}}>
                      <FaUser /> Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => {}}>
                      <FaCog /> Settings
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
            </Col>
          </Container>
        )}
      </Row>
    </>
  );
};

export default GreetingSearchBar;
