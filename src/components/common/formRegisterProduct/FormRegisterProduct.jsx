import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "./FormRegisterProduct.css";
import SeparatingLine from "../separatingLine/SeparatingLine.jsx";
import Swal from "sweetalert2";
import { useEffect } from "react";

const FormRegisterProduct = ({
  data: {
    //Estados
    message,
    switchColor,
    switchSize,
    color,
    size,
    stock,
    photo,
    category,
    discount,
    product,
    //Funciones de estados
    setMessage,
    setColor,
    setSize,
    setStock,
    setPhoto,
    setCategory,
    setDiscount,
    setProduct,
    //Funciones
    handleSubmit,
    handleAddColor,
    handleSelectionColor,
    handleSelectionSize,
    handleDelete,
    handleAddPhoto,
    handleDeletePhoto,
    handleAddCategory,
    handleDeleteCategory,
  },
}) => {
  useEffect(() => {
    if (message) {
      Swal.fire({
        icon: message.type === "error" ? "error" : "success",
        title: message.title,
        text: message.text,
      });
      setMessage(null); // Limpia el mensaje después de mostrar la alerta
    }
  }, [message]);
  return (
    <>
      <Container fluid>
        <Card className="px-4 my-1 border-0">
          <Card.Body>
            <h3 className="mb-4 text-center titles-fonts">Register products</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} md={12} lg={6}>
                  {/* Input proveedor */}
                  <Form.Group controlId="supplier" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="supplier"
                        placeholder="Supplier"
                        value={product.supplier}
                        onChange={(e) =>
                          setProduct({ ...product, supplier: e.target.value })
                        }
                        autoComplete="off"
                        required
                      />
                      <Form.Label>Supplier</Form.Label>
                    </Form.Floating>
                  </Form.Group>
                  {/* Input nombre */}
                  <Form.Group controlId="productName" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="productName"
                        placeholder="Name"
                        value={product.name}
                        onChange={(e) =>
                          setProduct({ ...product, name: e.target.value })
                        }
                        autoComplete="off"
                        required
                      />
                      <Form.Label>Name</Form.Label>
                    </Form.Floating>
                  </Form.Group>

                  {/* Input descripcion */}
                  <Form.Group controlId="productDescription" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="productDescription"
                        placeholder="Description"
                        value={product.description}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            description: e.target.value,
                          })
                        }
                        autoComplete="off"
                        required
                      />
                      <Form.Label>Description</Form.Label>
                    </Form.Floating>
                  </Form.Group>

                  {/* Input precio Costo */}
                  <Form.Group controlId="productCostPrice" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="number"
                        placeholder="Cost Price" // Texto en inglés
                        value={product.costPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            costPrice: e.target.value,
                          })
                        }
                        required
                      />
                      <Form.Label>Cost Price</Form.Label>
                    </Form.Floating>
                  </Form.Group>

                  {/* Inpout precio */}
                  <Form.Group controlId="productPrice" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="number"
                        name="productPrice"
                        placeholder="Price"
                        value={product.price}
                        onChange={(e) =>
                          setProduct({ ...product, price: e.target.value })
                        }
                        required
                      />
                      <Form.Label>Price</Form.Label>
                    </Form.Floating>
                  </Form.Group>

                  {/* Input cantidad minuma de stock */}
                  <Form.Group
                    controlId="minimumReplenishmentQuantity"
                    className="mb-3"
                  >
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="minimumReplenishmentQuantity"
                        placeholder="Minimum Replenishment Quantity"
                        value={product.minimumReplenishmentQuantity}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            minimumReplenishmentQuantity: e.target.value,
                          })
                        }
                        autoComplete="off"
                        required
                      />
                      <Form.Label>Minimum Replenishment Quantity</Form.Label>
                    </Form.Floating>
                  </Form.Group>
                </Col>

                <Col sm={12} md={12} lg={6}>
                  {/* Rango descuento */}
                  <div className="custom-range-container">
                    <Form.Label>Discount: {product.discount}%</Form.Label>
                    <Form.Range
                      min={0}
                      max={100}
                      value={product.discount}
                      onChange={(e) => {
                        const newValue = Number(e.target.value);
                        setProduct({ ...product, discount: newValue }); // Actualiza el producto
                      }}
                      className="custom-range"
                    />
                  </div>

                  {/* boton swtich para habilitar input color */}
                  <Form.Check
                    type="switch"
                    id="custom-switch-color"
                    label="Does this product have stock by color?"
                    checked={switchColor}
                    onChange={handleSelectionColor}
                  />

                  {/* Input color */}
                  <Form.Group controlId="productColor" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="productColor"
                        placeholder="Add color"
                        value={color || ""} // Maneja el caso cuando color es undefined
                        onChange={(e) => setColor(e.target.value.toUpperCase())}
                        autoComplete="off"
                        disabled={!switchColor}
                      />
                      <Form.Label>Color</Form.Label>
                    </Form.Floating>
                  </Form.Group>

                  {/* boton swtich para habilitar input size y stock */}
                  <Form.Check
                    type="switch"
                    id="custom-switch-size"
                    label="Does this product have stock by size?"
                    checked={switchSize}
                    onChange={handleSelectionSize}
                  />

                  {/* inputs size y stock o stock validados segun la respuestas del switch size y stock */}
                  <Form.Group
                    controlId={
                      switchSize ? "productSizeWithStock" : "productStockSingle"
                    }
                    className="mb-3"
                  >
                    {switchSize ? (
                      <Row>
                        <Col xs={5}>
                          <Form.Group controlId="productSizeWithStockSize">
                            <Form.Floating>
                              <Form.Control
                                type="text"
                                name="productSize"
                                placeholder="Size"
                                value={size}
                                onChange={(e) =>
                                  setSize(e.target.value.toUpperCase())
                                }
                                autoComplete="off"
                              />
                              <Form.Label>Size</Form.Label>
                            </Form.Floating>
                          </Form.Group>
                        </Col>
                        <Col xs={5}>
                          <Form.Group controlId="productSizeWithStockStock">
                            <Form.Floating>
                              <Form.Control
                                type="number"
                                name="productStock"
                                placeholder="Stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                autoComplete="off"
                              />
                              <Form.Label>Stock</Form.Label>
                            </Form.Floating>
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Button variant="secondary" onClick={handleAddColor}>
                            +
                          </Button>
                        </Col>
                      </Row>
                    ) : (
                      <Form.Group controlId="productStockSingle">
                        <Form.Floating>
                          <Form.Control
                            type="number"
                            name="productStockSingle"
                            placeholder="Stocks"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            autoComplete="off"
                          />
                          <Form.Label>Stocks</Form.Label>
                        </Form.Floating>
                      </Form.Group>
                    )}
                  </Form.Group>

                  {/* Boton para agregar a la lista color y size */}
                  <Button
                    variant="primary"
                    onClick={handleAddColor}
                    disabled={!color && !size && !stock}
                  >
                    Add Color/Size/Stock
                  </Button>

                  {/* tabla para mostrar color, size y stock agregadas */}
                  <h5 className="mt-4">Colors and Sizes Added:</h5>
                  <Table striped bordered hover className="mt-3">
                    <thead>
                      <tr>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Stock</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product?.colors?.length > 0 &&
                        product.colors.map((c, colorIndex) => (
                          <tr key={colorIndex}>
                            <td>{c.color}</td>
                            <td>
                              {c.sizes.map((s, sizeIndex) => (
                                <div key={sizeIndex}>
                                  {s.size} (Stock: {s.stock})
                                </div>
                              ))}
                            </td>
                            <td>
                              {c.sizes
                                .map((s) => s.stock)
                                .reduce((a, b) => a + b, 0)}{" "}
                              {/* Total stock */}
                            </td>
                            <td>
                              <FaTrash
                                onClick={() => handleDelete(colorIndex)}
                                className="btnActionTable text-danger"
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <SeparatingLine />

              <Row>
                <Col sm={12} md={12} lg={6}>
                  {/* Input categorías */}
                  <Form.Group controlId="productCategories" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="Add category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        autoComplete="off"
                      />
                      <Form.Label>Category</Form.Label>
                    </Form.Floating>
                    <Button
                      variant="secondary"
                      onClick={handleAddCategory}
                      className="mt-2"
                    >
                      Add Category
                    </Button>
                  </Form.Group>

                  {/* tabla para mostrar las categorias agregadas */}
                  <h5 className="mt-4">Categories Added:</h5>
                  <Table striped bordered hover className="mt-3">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.category.map((cat, index) => (
                        <tr key={index}>
                          <td>{cat}</td>
                          <td>
                            <FaTrash
                              onClick={() => handleDeleteCategory(index)}
                              className="btnActionTable text-danger"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>

                <Col sm={12} md={12} lg={6}>
                  {/*Input fotos */}
                  <Form.Group controlId="productPhotos" className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="Add photo URL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        autoComplete="off"
                      />
                      <Form.Label>Photo URL</Form.Label>
                    </Form.Floating>
                    <Button
                      variant="secondary"
                      onClick={handleAddPhoto}
                      className="mt-2"
                    >
                      Add Photo
                    </Button>
                  </Form.Group>

                  {/* tabla para mostrar las fotos agregadas */}
                  <h5 className="mt-4">Photos Added:</h5>
                  <Table striped bordered hover className="mt-3">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.photo.map((p, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              src={p}
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
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>

              {/* Boton registrar producto */}
              <Button type="submit" variant="success" className="mt-4">
                Register Product
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default FormRegisterProduct;
