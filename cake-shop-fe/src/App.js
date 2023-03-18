import React from "react";
import "./App.css";
import SignInOutContainer from "./containers";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const isLogged = false;

  return (
    <div>
      <Router>
        {!isLogged ? (
          <SignInOutContainer />
        ) : (
          <>
            <Routes>
              <Route path="/home" element={<HomePage />} exact>
                
              </Route>
            </Routes>
          </>
        )}
      </Router>
    </div>

    // <div className="App">
    //  <SignInOutContainer/>
    // </div>
  );
}

export default App;
