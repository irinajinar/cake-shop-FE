import React from "react";
import "./App.css";
// import SignInOutContainer from "./containers";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./Card";
import AppBar from "./Appbar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Login from "./pages/login";
import Register from "./pages/register";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "20px",
  },
});

function App() {
  // const isLogged = localStorage.getItem('isLogged');
  const isLogged = false;
  const classes = useStyles();

  // return <AppBar/>;
  // return (

  //   <Grid container spacing={4} className={classes.gridContainer}>
  //     <Grid item xs={12} sm={6} md={4}>
  //       <Card />
  //     </Grid>

  //     <Grid item xs={12} sm={6} md={4}>
  //       <Card />
  //     </Grid>

  //     <Grid item xs={12} sm={6} md={4}>
  //       <Card />
  //     </Grid>
  //   </Grid>

  // );

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/register" element={<Register />} exact></Route>
            <Route path="/login" element={<Login />} exact></Route>
            <Route path="/" element={<HomePage />} exact></Route>
        
        </Routes>
      </Router>
    </div>

    // <div className="App">
    //  <SignInOutContainer/>
    // </div>
  );
}

export default App;
