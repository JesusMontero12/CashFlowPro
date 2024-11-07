import "./ListProduct.css";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { products } from "../../../data/productsMock";

const ListProduct = () => {
  return (
    <>
      <div className="table-container">
        <Table responsive bordered hover className="minimal-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photos</th>
              <th>Name</th>
              <th>Cost price</th>
              <th>Price</th>
              <th>Profit</th>
              <th>Sold</th>
              <th>M.R.Q</th>
              <th>R.D</th>
              <th>L.U.D</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id || index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={product.photo[0]}
                    alt={`Product ${index}`}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.costPrice}</td>
                <td>{product.price}</td>
                <td>{product.price - product.costPrice}</td>
                <td>{product.sale}</td>
                <td>{product.minimumReplenishmentQuantity}</td>
                <td>{product.registrationDate}</td>
                <td>{product.lastUpdateDate}</td>
                <td>
                  <Button variant="outline-primary" size="sm">
                    Editar
                  </Button>
                  <Button variant="outline-danger" size="sm">
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListProduct;
