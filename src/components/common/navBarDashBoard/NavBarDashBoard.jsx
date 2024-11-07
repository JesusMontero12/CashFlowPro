import { Button, ButtonGroup, Container, Nav, Navbar } from "react-bootstrap";
import {
  FaChartBar,
  FaCashRegister,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaNutritionix,
  FaCog,
} from "react-icons/fa";
import "./NavBarDashBoard.css";
import { FaListCheck } from "react-icons/fa6";
import { TrendingUp } from "lucide-react";

const NavBarDashBoard = ({ setSelectedItem }) => {
  const handleColorItemMenu = (section) => {
    setSelectedItem(section);
  };

  return (
    <>
      <Container className="vertical-navbar shadow">
        <Navbar className="flex-column">
          {/* Brand */}
          <div className="d-flex align-items-center justify-content-center mb-3">
            <Navbar.Brand href="/" className="brand-name titles-fonts">
              <TrendingUp size={16} className="text-white me-2" />
              CashFlowPro
            </Navbar.Brand>
          </div>

          {/* Menu Items */}
          <Nav className="nav-links-container texts-fonts">
            <Nav.Link
              onClick={() => handleColorItemMenu("viewReports")}
              className="nav-link-custom"
            >
              <FaChartBar className="icon" /> View Reports
            </Nav.Link>

            <Nav.Link
              onClick={() => handleColorItemMenu("registerSale")}
              className="nav-link-custom"
            >
              <FaCashRegister className="icon" /> Register Sale
            </Nav.Link>

            <Nav.Link
              onClick={() => handleColorItemMenu("addExpenses")}
              className="nav-link-custom"
            >
              <FaMoneyBillWave className="icon" /> Add Expenses
            </Nav.Link>

            <Nav.Link
              onClick={() => handleColorItemMenu("invoices")}
              className="nav-link-custom"
            >
              <FaFileInvoiceDollar className="icon" /> Invoices
            </Nav.Link>

            <Nav.Link
              onClick={() => handleColorItemMenu("products")}
              className="nav-link-custom"
            >
              <FaListCheck className="icon" /> Products
            </Nav.Link>
            <Nav.Link className="nav-link-custom">
              <FaCog className="icon" /> Settings
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBarDashBoard;
