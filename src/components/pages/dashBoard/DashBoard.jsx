import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBarDashBoardContainer from "../../common/navBarDashBoard/NavBarDashBoardContainer.jsx";
import ItemsListDashBoardContainer from "../../common/itemsListDashBoard/ItemsListDashBoard.jsx";

const DashBoard = () => {
  const [selectedItem, setSelectedItem] = useState("viewReports");

  return (
    <Container fluid className="min-vh-100 bg-light">
      <Row>
        <Col sm={12} md={4} lg={2} className="m-0 p-0">
          <NavBarDashBoardContainer setSelectedItem={setSelectedItem} />
        </Col>
        <Col sm={12} md={8} lg={10} className="m-0 p-0">
          <ItemsListDashBoardContainer
            section={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
