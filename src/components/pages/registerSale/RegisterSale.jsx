import { useState } from "react";
import {
  Button,
  ButtonToolbar,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import { FaPen, FaSearch, FaTrash } from "react-icons/fa";
import "./RegisterSale.css";
import GreetingSearchBarContainer from "../../common/greetingSearchBar/GreetingSearchBarContainer";

const RegisterSale = () => {
  const [showInput, setShowInput] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // funcion para mostrar el inputs de busqueda
  const toggleInput = () => {
    setShowInput(!showInput);
  };

  //   funciuon para habilitar del input de descuento
  const handleSwitchChange = (e) => {
    setIsChecked(!!e.target.checked);
  };

  const productsSelected = {

  }

  return (
    <>
      <Container className="stats-container" fluid>
        <GreetingSearchBarContainer />
        <Row className="CardsRegisterSale">
          <Col sm={6} md={12} lg={8}>
            <Form className="cardForm">
              {/* header del formulario */}
              <ButtonToolbar className="formHeader justify-content-between mb-1">
                <h1 className="titles-fonts m-2">Register Sale</h1>
                <InputGroup className="d-flex align-items-center">
                  <Button
                    variant="transparent"
                    onClick={toggleInput}
                    className="iconSearch"
                  >
                    <FaSearch />
                  </Button>

                  {showInput && (
                    <Form.Control
                      type="text"
                      placeholder="Search products"
                      className="ml-2"
                      autoFocus
                      style={{ transition: "width 0.5s", width: "200px" }}
                    />
                  )}
                </InputGroup>
              </ButtonToolbar>

              {/* tabla donde se muestran los productos que se venderan */}
              <Table responsive className="tableProductsSale">
                <thead>
                  <tr>
                    <th className="texts-fonts">ID</th>
                    <th className="texts-fonts">PRODUCT</th>
                    <th className="texts-fonts">QUANTITY</th>
                    <th className="texts-fonts">PRICE</th>
                    <th className="texts-fonts">DISCOUNT</th>
                    <th className="texts-fonts">TOTAL</th>
                    <th className="texts-fonts">EDIT</th>
                    <th className="texts-fonts">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="texts-fonts">1</td>
                    <td className="texts-fonts">verde 1x4</td>
                    <td className="texts-fonts">2</td>
                    <td className="texts-fonts">4,000 </td>
                    <td className="texts-fonts">0</td>
                    <td className="texts-fonts">8,000</td>
                    <td className="texts-fonts">
                      <Button className="btnActionTable text-success">
                        <FaPen />
                      </Button>
                    </td>
                    <td className="texts-fonts">
                      <Button className="btnActionTable text-danger">
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>

              {/* inputs de descuento y metodo de pago */}
              <Row>
                {/* switch habilidator del inputs de descuento */}
                <Col sm={12} md={12} lg={1}>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="switchButton"
                    checked={isChecked}
                    onChange={handleSwitchChange}
                  />
                </Col>
                <Col sm={12} md={12} lg={5}>
                  {/* inputs de descuento */}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Discount percentage"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      className="inputsSale"
                      value="10%"
                      disabled={!isChecked}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm={12} md={12} lg={6}>
                  {/* metodo de pago */}
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Payment method"
                    className="mb-3 floatingLabel"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      className="inputsSale"
                    >
                      <option>Open this select menu</option>
                      <option value="Cash">Cash</option>
                      <option value="debit">debit</option>
                      <option value="credit">credit</option>
                      <option value="transfer">transfer</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              {/* Boton par acontinuar con el registro */}
              <Row>
                <Button className="buttonSale">Continue</Button>
              </Row>
            </Form>
          </Col>

          <Col sm={6} md={12} lg={4}>
            <Card className="cardSale">
              <Card.Header className="cardSaleTitle">Sale</Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="saleDetails">
                  <p>User:</p>
                  <span>Daniel</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>Date Time:</p>
                  <span>29-10-24 02:17</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>Products:</p>
                  <span>4</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>Discount:</p>
                  <span>10%</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>Payment method:</p>
                  <span>debit</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>Shipping:</p>
                  <span>2,000</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>total:</p>
                  <span>23,000</span>
                </ListGroup.Item>
                <ListGroup.Item className="saleDetails">
                  <p>Profits:</p>
                  <span>11,500</span>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterSale;
