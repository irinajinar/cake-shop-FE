import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DrawerAppBar from "../Appbar";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const navigate = useNavigate();
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const options = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };
  useEffect(() => {
    if (localStorage.getItem("isLogged")) {
      navigate("/");
    }
  }, []);

  const handleButtonClick = async () => {
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

  return (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Email"
            placeholder="Enter your email"
            fullWidth
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={handleButtonClick}
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>

          <Typography>
            {" "}
            Do you not have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Register
            </Link>
          </Typography>
        </Paper>
      </Grid>
  );
};

export default Login;
