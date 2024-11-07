import { Container } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import "./Inventory.css";

const Inventory = ({ setSelectedItem }) => {
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

export default Inventory;
