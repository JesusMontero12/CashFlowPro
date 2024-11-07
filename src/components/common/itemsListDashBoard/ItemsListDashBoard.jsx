import { Container } from "react-bootstrap";
import "./ItemsListDashBoard.css";
import ViewReportsContainer from "../../pages/viewReports/ViewReportsContainer.jsx";
import RegisterSaleContainer from "../../pages/registerSale/RegisterSaleContainer.jsx";
import AddExpensesContainer from "../../pages/addExpenses/AddExpensesContainer.jsx";
import InvoicesContainer from "../../pages/invoices/InvoicesContainer.jsx";
import InventoryContainer from "../../pages/inventory/InventoryContainer.jsx";
import ProductsContainer from "../../pages/products/ProductsContainer.jsx";

const ItemsListDashBoard = ({ section, setSelectedItem }) => {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center">
        {section === "registerSale" && (
          <RegisterSaleContainer  />
        )}
        {section === "addExpenses" && (
          <AddExpensesContainer  />
        )}
        {section === "viewReports" && (
          <ViewReportsContainer  />
        )}
        {section === "invoices" && (
          <InvoicesContainer  />
        )}
        {section === "products" && (
          <ProductsContainer  />
        )}
      </Container>
    </>
  );
};

export default ItemsListDashBoard;
