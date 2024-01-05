import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const Register = () => {
  const { user, updateUser } = useUserContext();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  console.log("🚀 ~ file: Register.tsx:12 ~ Register ~ user:", user.name);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (user.email && user.password) {
      // IF existing user, throw error Already registered
      const userArray = JSON.parse(localStorage.getItem("users")) || [];
      // If user email already exists in array, throw error
      if (userArray.filter((usr) => usr.email === user.email).length > 0) {
        console.log(
          "User already registered, please login with the user or register a new user.",
          userArray,
          user.email
        );
        setError(true);
        setErrorMsg(
          "User already registered, please login with the user or register a new user."
        );
      }
      // Else set user as logged in, Push user to user array and redirect to home
      else {
        const newUser = {...user};
        newUser.loggedIn = true
        userArray.push(newUser);
        localStorage.setItem("users",JSON.stringify(userArray))
        navigate("/home");
      }
    } else console.log("Please enter values before submitting form");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          padding: "1em 0.7em",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={user.name}
            onChange={(e) => updateUser("name", e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={user.email}
            onChange={(e) => updateUser("email", e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={user.password}
            onChange={(e) => updateUser("password", e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
      <Snackbar open={error} autoHideDuration={1000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Register;
