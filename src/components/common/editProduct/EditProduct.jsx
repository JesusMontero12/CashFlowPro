// EditProduct.js
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import ActionControlContainer from "../actionControl/ActionControlContainer";
import { FaTrash } from "react-icons/fa";

const EditProduct = ({
  itemSelected,
  item,
  deleteProductById,
  updateProduct,
  handleChange,
  handleAddColor,
  handleDeletePhoto,
  handleAddSize,
  handleAddPhoto,
  handleAddCategory,
}) => {
  return (
    <Form>
      {/* Basic Information */}
      <Card className="mb-3">
        <Card.Header>Basic Information</Card.Header>
        <Card.Body>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={itemSelected.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={itemSelected.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={itemSelected.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="costPrice">
                <Form.Label>Cost Price</Form.Label>
                <Form.Control
                  type="number"
                  name="costPrice"
                  value={itemSelected.costPrice}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="number"
              name="discount"
              value={itemSelected.discount}
              onChange={handleChange}
            />
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Supplier Information */}
      <Card className="mb-3">
        <Card.Header>Supplier Information</Card.Header>
        <Card.Body>
          <Form.Group controlId="supplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              name="supplier"
              value={itemSelected.supplier}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="minimumReplenishmentQuantity">
            <Form.Label>Minimum Replenishment Quantity</Form.Label>
            <Form.Control
              type="number"
              name="minimumReplenishmentQuantity"
              value={itemSelected.minimumReplenishmentQuantity}
              onChange={handleChange}
            />
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Colors and Sizes */}
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between">
          <div>Colors and Sizes</div>
          <Button variant="primary" alt="Add Color" onClick={handleAddColor}>
            +
          </Button>
        </Card.Header>
        <Card.Body>
          {itemSelected.colors.map((colorItem, colorIndex) => (
            <div key={colorIndex} className="mb-3">
              <Form.Group controlId={`color-${colorIndex}`}>
                <Form.Label>Color {colorIndex + 1}</Form.Label>
                <Form.Control
                  type="text"
                  value={colorItem.color}
                  onChange={(e) => {
                    handleChange(e, colorIndex);
                  }}
                />
              </Form.Group>
              {colorItem.sizes.map((sizeItem, sizeIndex) => (
                <Row key={sizeIndex}>
                  <Col>
                    <Form.Group controlId={`size-${colorIndex}-${sizeIndex}`}>
                      <Form.Label>Size {sizeIndex + 1}</Form.Label>
                      <Form.Control
                        type="text"
                        value={sizeItem.size}
                        onChange={(e) => {
                          handleChange(e, colorIndex, sizeIndex);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`stock-${colorIndex}-${sizeIndex}`}>
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="number"
                        value={sizeItem.stock}
                        onChange={(e) => {
                          handleChange(e, colorIndex, sizeIndex);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              ))}
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => handleAddSize(colorIndex)}
                >
                  Add Size
                </Button>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Photos */}
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between">
          <div>Photos</div>
          <Button variant="primary" onClick={handleAddPhoto}>
            +
          </Button>
        </Card.Header>
        <Card.Body>
          {itemSelected.photo.map((url, index) => (
            <Form.Group controlId={`photo-${index}`} key={index}>
              <Row>
                <Col sm={12} md={9} lg={9}>
                  <Form.Label>Photo {index + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={url}
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={12} md={3} lg={3}>
                  <table>
                    <thead>
                      <tr key={index}>
                        <td>
                          <img
                            src={url}
                            alt={`Product ${index}`}
                            style={{ width: "50px" }}
                          />
                        </td>
                        <td>
                          <FaTrash
                            onClick={() => handleDeletePhoto(index)}
                            className="btnActionTable text-danger"
                          />
                        </td>
                      </tr>
                    </thead>
                  </table>
                </Col>
              </Row>
            </Form.Group>
          ))}
        </Card.Body>
      </Card>

      {/* Categories */}
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between">
          <div>Categories</div>
          <Button variant="primary" onClick={handleAddCategory}>
            +
          </Button>
        </Card.Header>
        <Card.Body>
          {itemSelected.category.map((cat, index) => (
            <Form.Group controlId={`category-${index}`} key={index}>
              <Form.Label>Category {index + 1}</Form.Label>
              <Form.Control type="text" value={cat} onChange={handleChange} />
            </Form.Group>
          ))}
        </Card.Body>
      </Card>

      {/* Sale Information */}
      <Card className="mb-3">
        <Card.Header>Sale Information</Card.Header>
        <Card.Body>
          <Form.Group controlId="sale">
            <Form.Label>Sale Percentage</Form.Label>
            <Form.Control
              type="number"
              name="sale"
              value={itemSelected.sale}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="active">
            <Form.Label>Active</Form.Label>
            <Form.Check
              type="checkbox"
              name="active"
              checked={itemSelected.active}
              onChange={handleChange}
            />
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Registration Date */}
      <Card className="mb-3">
        <Card.Header>Registration Date</Card.Header>
        <Card.Body>
          <Form.Group controlId="registrationDate">
            <Form.Label>Registration Date</Form.Label>
            <Form.Control
              type="text"
              name="registrationDate"
              value={itemSelected.registrationDate}
              onChange={handleChange}
              disabled={true}
            />
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Last Update Date */}
      <Card className="mb-3">
        <Card.Header>Last Update Date</Card.Header>
        <Card.Body>
          <Form.Group controlId="lastUpdateDate">
            <Form.Label>Last Update Date</Form.Label>
            <Form.Control
              type="text"
              name="lastUpdateDate"
              value={itemSelected.lastUpdateDate}
              disabled={true}
              onChange={(e) =>
                setItems((prev) => ({
                  ...prev,
                  lastUpdateDate: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Card.Body>
      </Card>

      <ActionControlContainer
        id={itemSelected.id}
        deleteItem={deleteProductById}
        updateItem={updateProduct}
      />
    </Form>
  );
};

export default EditProduct;
