import { Container } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import "./Invoices.css";

const Invoices = () => {
  //   funcion para cerrar el componente
  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Container className="containerButtonClose">
        <FaWindowClose onClick={() => handleClose()} className="iconClose" />
      </Container>
    </>
  );
};

export default Invoices;
