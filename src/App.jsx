import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./auth/Contexts/UserProvider";
import AppRouter from "./Router/AppRoute";

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRouter />
      </Router>
    </UserProvider>
  );
}

export default App;
