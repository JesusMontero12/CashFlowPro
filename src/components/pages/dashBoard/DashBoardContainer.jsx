import DashBoard from "./DashBoard.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoardContainer = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <DashBoard />
    </>
  );
};

export default DashBoardContainer;
