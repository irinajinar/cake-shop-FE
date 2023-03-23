import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Login from "./pages/login";
import Register from "./pages/register";
import CartPage from "./pages/cart";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "20px",
  },
});

function App() {
  const isLogged = false;
  const classes = useStyles();

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} exact></Route>
          <Route path="/login" element={<Login />} exact></Route>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/cart" element={<CartPage />} exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
