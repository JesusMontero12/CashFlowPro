import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import "./ViewReports.css";
import GreetingSearchBarContainer from "../../common/greetingSearchBar/GreetingSearchBarContainer.jsx";
import { FaStar } from "react-icons/fa6";
import { TrendingUp } from "lucide-react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../../context/AuthContext.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ViewReports = () => {
  const { currentUser } = useContext(AuthContext);

  const barData = useMemo(
    () => ({
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          label: "Ventas",
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
      ],
    }),
    []
  );

  const lineData = useMemo(
    () => ({
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          label: "Usuarios Activos",
          data: [45, 60, 75, 70, 90, 100],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    }),
    []
  );

  return (
    <>
      <Container fluid>
        {/* componente saludo y search */} 
        <GreetingSearchBarContainer />
        {/* estadisticas del usuario */}
        <Row className="mb-4">
          {currentUser && (
            <Col sm={4} md={4} lg={4}>
              {/* Card 1: Sales */}
              <Card className="custom-card-primary shadow-sm">
                <Card.Body className="px-3 py-2">
                  <Container className="Container-profile-image-card">
                    <FaUser className="iconUser" />

                    <Card.Title className="custom-title">
                      {currentUser.email}
                    </Card.Title>
                  </Container>

                  <div className="custom-value">
                    <p>Top best seller:</p>
                    <span>1</span>
                  </div>
                  <div className="custom-value">
                    <p>commissions</p>
                    <span>43.350 $</span>
                  </div>
                  <div className="custom-value">
                    <p>Company rating</p>
                    <span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )}

          <Col sm={4} md={4} lg={4}>
            {/* card de detalles del vendedor */}
            <Card className="custom-card-primary shadow-sm">
              <Card.Body className="px-3 py-2">
                <Card.Title className="custom-title">Seller details</Card.Title>
                <div className="custom-value">
                  <p>Daily goal</p>
                  <span>56%</span>
                </div>
                <div className="custom-value">
                  <p>Total sold for the day</p>
                  <span>25,000</span>
                </div>
                <div className="custom-value">
                  <p>Total sales made</p>
                  <span>56</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} md={4} lg={4}>
            {/* card de estadisticas de inventario */}
            <Card className="custom-card-primary shadow-sm">
              <Card.Body className="px-3 py-2">
                <Card.Title className="custom-title">
                  Best selling products
                </Card.Title>
                <div className="custom-value">
                  <p>Best seller</p>
                  <span>blanca 1x10</span>
                </div>
                <div className="custom-value">
                  <p>Low stock product</p>
                  <span>blanca 1x10</span>
                </div>
                <div className="custom-value">
                  <p>Inactive products</p>
                  <span>verde 10x30</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* estadisticas por graficos */}
        <Row className="mb-2">
          <Container>
            <Row>
              <Col sm={6} md={6} lg={6}>
                {barData && (
                  <Card>
                    <Card.Body>
                      <h6>Monthly Sales</h6>
                      <Bar
                        className="chart-container"
                        data={barData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                        }}
                      />
                    </Card.Body>
                  </Card>
                )}
              </Col>
              <Col sm={6} md={6} lg={6}>
                {lineData && (
                  <Card>
                    <Card.Body>
                      <h6>Hours Activity</h6>
                      <Line
                        className="chart-container"
                        data={lineData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                        }}
                      />
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>
          </Container>
        </Row>

        {/* estadisticas de impuestos, ingresos netos, gastos etc */}
        <Row className="mb-2">
          <Container className="container-stats">
            <h1 className="custom-title-secondary">
              Key Performance Indicators (KPIs)
            </h1>
            <Card className="my-3 shadow-sm border-0">
              <Card.Body className="custom-card-secondary">
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <TrendingUp size={30} className="text-danger " />
                  </Col>
                  <Col sm={5} md={5} lg={5}>
                    <div className="custom-value-updated">
                      <p>Taxes:</p>
                      <span>
                        <TrendingUp size={15} className="text-succces me-1" />
                        CashFlowPro
                      </span>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="custom-value-updated">
                      <p>updated ago:</p>
                      <span>8h 45 min</span>
                    </div>
                  </Col>
                  <Col sm={1} md={1} lg={1} className="centerSpinners">
                    <Spinner animation="border" variant="secondary" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="my-3 shadow-sm border-0">
              <Card.Body className="custom-card-secondary">
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <TrendingUp size={30} className="text-danger " />
                  </Col>
                  <Col sm={5} md={5} lg={5}>
                    <div className="custom-value-updated">
                      <p>Gross Profit Margin:</p>
                      <span>
                        <TrendingUp size={15} className="text-succces me-1" />
                        CashFlowPro
                      </span>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="custom-value-updated">
                      <p>updated ago:</p>
                      <span>8h 45 min</span>
                    </div>
                  </Col>
                  <Col sm={1} md={1} lg={1} className="centerSpinners">
                    <Spinner animation="border" variant="secondary" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="my-3 shadow-sm border-0">
              <Card.Body className="custom-card-secondary">
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <TrendingUp size={30} className="text-danger " />
                  </Col>
                  <Col sm={5} md={5} lg={5}>
                    <div className="custom-value-updated">
                      <p>Net Profit Margin:</p>
                      <span>
                        <TrendingUp size={15} className="text-succces me-1" />
                        CashFlowPro
                      </span>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="custom-value-updated">
                      <p>updated ago:</p>
                      <span>8h 45 min</span>
                    </div>
                  </Col>
                  <Col sm={1} md={1} lg={1} className="centerSpinners">
                    <Spinner animation="border" variant="secondary" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="my-3 shadow-sm border-0">
              <Card.Body className="custom-card-secondary">
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <TrendingUp size={30} className="text-danger " />
                  </Col>
                  <Col sm={5} md={5} lg={5}>
                    <div className="custom-value-updated">
                      <p>Liquidity Ratio:</p>
                      <span>
                        <TrendingUp size={15} className="text-succces me-1" />
                        CashFlowPro
                      </span>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="custom-value-updated">
                      <p>updated ago:</p>
                      <span>8h 45 min</span>
                    </div>
                  </Col>
                  <Col sm={1} md={1} lg={1} className="centerSpinners">
                    <Spinner animation="border" variant="secondary" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="my-3 shadow-sm border-0">
              <Card.Body className="custom-card-secondary">
                <Row>
                  <Col sm={1} md={1} lg={1}>
                    <TrendingUp size={30} className="text-danger " />
                  </Col>
                  <Col sm={5} md={5} lg={5}>
                    <div className="custom-value-updated">
                      <p>Inventory Turnover:</p>
                      <span>
                        <TrendingUp size={15} className="text-succces me-1" />
                        CashFlowPro
                      </span>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="custom-value-updated">
                      <p>updated ago:</p>
                      <span>8h 45 min</span>
                    </div>
                  </Col>
                  <Col sm={1} md={1} lg={1} className="centerSpinners">
                    <Spinner animation="border" variant="secondary" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Row>

        <Row>
          <Col sm={8} md={8} lg={8}>
            <Row>
              <Col>
                {/* Card 3: Operating Expenses */}
                <Card className="stats-card custom-card">
                  <Card.Body>
                    <Card.Title className="custom-title">
                      Operating Expenses
                    </Card.Title>
                    <Card.Text className="custom-value">
                      Fixed Expenses: $5,000
                    </Card.Text>
                    <Card.Text className="custom-value">
                      Variable Expenses: $1,000
                    </Card.Text>
                    <Card.Text className="custom-value">
                      Administration Expenses: $1,000
                    </Card.Text>
                    <Card.Text className="custom-value">
                      Sales and Marketing Expenses: $1,000
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* Card 4: Operating Income and Gross Profit */}
                <Card className="stats-card custom-card">
                  <Card.Body>
                    <Card.Text className="custom-title">
                      Operating Income and Gross Profit
                    </Card.Text>
                    <Card.Text className="custom-value">
                      Gross Profit: $4,200
                    </Card.Text>
                    <Card.Text className="custom-value">
                      Operating Income (EBIT): $4,200
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* Card 5: Other Expenses and Income */}
                <Card className="stats-card custom-card">
                  <Card.Body>
                    <Card.Title className="custom-title">
                      Other Expenses and Income
                    </Card.Title>
                    <Card.Text className="custom-value">
                      Financial Expenses: $5,000
                    </Card.Text>
                    <Card.Text className="custom-value">
                      Non-Operating Income: $1,000
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewReports;
