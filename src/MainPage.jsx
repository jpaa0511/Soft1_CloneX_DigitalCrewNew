import React, { useContext } from "react";
import { Home } from "./Components/Home";
import { Sidebar } from "./Components/Sidebar";
import { Widgets } from "./Components/Widgets";
import GlobalStyles from "./styles/StylesGlobal";
import { UserContext } from "./auth/Contexts/UserContext";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const { logOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Sidebar />
        <Home />
        <Widgets />
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </>
  );
};

export default MainPage;
