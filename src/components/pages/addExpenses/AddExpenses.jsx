import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./AddExpenses.css";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const AddExpenses = ({ setSelectedItem }) => {
  //   funcion para cerrar el componente
  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Container className="containerButtonClose">
        <FaWindowClose onClick={() => handleClose()} className="iconClose" />
      </Container>

      <Form className="cardFormExpenses">
        <h1>Expense records</h1>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Amount"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Amount" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <FloatingLabel
              controlId="floatingSelectPaymentMethod"
              label="Payment method"
              className="mb-3"
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
          <Col sm={12} md={6} lg={6}>
            <FloatingLabel
              controlId="floatingSelectTypeOfTransaction"
              label="Type of transaction"
              className="mb-3"
            >
              <Form.Select
                aria-label="Floating label select example"
                className="inputsSale"
              >
                <option>Open this select menu</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Description (Optional)"
            >
              <Form.Control as="textarea" placeholder="Description" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Button className="mt-3 buttonAddExpenses">Continue</Button>
        </Row>
      </Form>
    </>
  );
};

export default AddExpenses;
