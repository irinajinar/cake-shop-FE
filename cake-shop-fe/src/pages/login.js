import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.jpg";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const options = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    axios
      .post(
        "http://localhost:8081/login",
        {
          email: `${email}`,
          password: `${password}`,
        },
        options
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("isLogged", true);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const signIn = (e) => {
    //e.preventDefault();
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={logo} alt=""></img>
        <h1>Sign in to CakeShop</h1>
        <p>cakeshop.com</p>
        <Input
          id="loginEmail"
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          id="loginPassword"
          type={"Password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={handleLogin}>Login</Button>
        <div
          style={{
            display: "flex",
            displayDirection: "row",
            justifyContent: "space-between",
            fontSize: "13px",
          }}
        >
          <a href="/register">Don't have an account? Register</a>
        </div>
      </LoginInnerContainer>
    </LoginContainer>
  );
}
export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 25px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
