import { Container, Nav } from "react-bootstrap";
import "./Products.css";
import { useState } from "react";
import GreetingSearchBarContainer from "../../common/greetingSearchBar/GreetingSearchBarContainer.jsx";
import FormRegisterProductContainer from "../../common/formRegisterProduct/FormRegisterProductContainer.jsx";
import ListProductContainer from "../../common/listProduct/ListProductContainer.jsx";

const Products = () => {
  const [navbarSelection, setNavbarSelection] = useState("product");
  // funcion que actualiza el estado del navbar
  const handleNavbarProduct = (name) => {
    setNavbarSelection(name);
  };

  const renderContent = () => {
    switch (navbarSelection) {
      case "product":
        return <ListProductContainer />;
        break;
      case "register":
        return <FormRegisterProductContainer />;
        break;
      case "inventory":
        return <p>inventory</p>;
        break;
      default:
        return <p>products</p>;
        break;
    }
  };

  return (
    <>
      <Container fluid>
        {/* componente saludo y search */}
        <GreetingSearchBarContainer />

        <Container className="navBarProducts shadow-sm">
          <Nav variant="underline" defaultActiveKey="product">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  handleNavbarProduct("product");
                }}
                eventKey="product"
              >
                Product
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  handleNavbarProduct("register");
                }}
                eventKey="register"
              >
                Register
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  handleNavbarProduct("inventory");
                }}
                eventKey="inventory"
              >
                Inventory
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Container>{renderContent()}</Container>
        </Container>
      </Container>
    </>
  );
};

export default Products;
