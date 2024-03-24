import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: "2vh" }}>
        Hi! Welcome Back!
      </Typography>
      <TextField
        id="usrnm"
        label="Email"
        variant="outlined"
        style={{ marginBottom: "2vh" }}
      />
      <TextField
        id="pwd"
        label="Password"
        variant="outlined"
        type="password"
        style={{ marginBottom: "2vh" }}
      />
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
