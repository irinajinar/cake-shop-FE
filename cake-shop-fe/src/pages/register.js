import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import axios from "axios";

const Register = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const options = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  const handleButtonClick = async () => {
    axios
      .post(
        "http://localhost:8081/register",
        {
          firstName: `${firstName}`,
          lastName: `${lastName}`,
          telephoneNumber: `${telephoneNumber}`,
          address: `${address}`,
          email: `${email}`,
          password: `${password}`,
        },
        options
      )
      .then((response) => console.log(response.data))

      .catch((error) => console.log(error));
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption" gutterBottom>
            Please enter your data!
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <TextField
            fullWidth
            label="First name"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(firstName);
            }}
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              console.log(lastName);
            }}
          />
          <TextField
            fullWidth
            label="Address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              console.log(address);
            }}
          />
          <TextField
            fullWidth
            label="TelephoneNumber"
            placeholder="Enter your phone number"
            value={telephoneNumber}
            onChange={(e) => {
              setTelephoneNumber(e.target.value);
              console.log(telephoneNumber);
            }}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />

          <Button
            onClick={handleButtonClick}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
