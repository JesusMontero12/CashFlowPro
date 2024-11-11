import { Button, Modal, Table } from "react-bootstrap";
import EditProductContainer from "../editProduct/EditProductContainer";

const ListProduct = ({ data }) => {
  const {
    items,
    message,
    show,
    selectedItem,
    setSelectedItem,
    deleteProductById,
    updateProduct,
    setShow,
    handleClose,
    handleShow,
    addNewColor,
    addNewSize,
    addNewPhoto,
    addNewCategory,
  } = data;

  return (
    <>
      {message && <p>{message}</p>}
      <div className="table-container mt-5">
        <Table responsive bordered hover className="minimal-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>PHOTO</th>
              <th>NAME</th>
              <th>COST</th>
              <th>PRICE</th>
              <th>PROFIT</th>
              <th>SOLD</th>
              <th>M.R.Q</th>
              <th>R.D</th>
              <th>L.U.D</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item) => (
              <tr key={item.id}>
                <td>{item.id.substr(0, 1) + "..."}</td>
                <td>
                  <img
                    src={item.photo[0]}
                    alt={`item ${0}`}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{item.name.substr(0, 8) + "..."}</td>
                <td>{Number(item.costPrice).toLocaleString()}</td>
                <td>{Number(item.price).toLocaleString()}</td>
                <td>{Number(item.price - item.costPrice).toLocaleString()}</td>
                <td>{item.sale}</td>
                <td>{item.minimumReplenishmentQuantity}</td>
                <td>{item.registrationDate}</td>
                <td>{item.lastUpdateDate}</td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(item)}>
                    Show
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Editor Panel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProductContainer
            itemSelected={selectedItem}
            setSelectedItem={setSelectedItem}
            deleteProductById={deleteProductById}
            updateProduct={updateProduct}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListProduct;
