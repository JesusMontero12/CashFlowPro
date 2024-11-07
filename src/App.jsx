import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout.jsx";
import DashBoardContainer from "./components/pages/dashBoard/DashBoardContainer.jsx";
import LoginContainer from "./components/pages/login/LoginContainer.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import SignupContainer from "./components/pages/signup/SignupContainer.jsx";
import PasswordResetContainer from "./components/pages/passwordReset/PasswordResetContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<h1>Error 404 not found</h1>} />
            <Route path="/" element={<LoginContainer />} />
            <Route path="/Signup" element={<SignupContainer />} />
            <Route path="/PasswordReset" element={<PasswordResetContainer />} />
            <Route path="/Dashboard" element={<DashBoardContainer />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
