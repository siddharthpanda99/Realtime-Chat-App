import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { useUserContext } from "../../hooks/useUserContext";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const { user, updateUser } = useUserContext();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // If email and password fields are filled, then move in else throw error
    if (user.email && user.password) {
      console.log("🚀 ~ file: Login.tsx:26 ~ handleSubmit ~ user:", user);
      // Load users array from localstorage
      const userArray = JSON.parse(localStorage.getItem("users") || "[]");
      console.log(
        "🚀 ~ file: Login.tsx:30 ~ handleSubmit ~ userArray:",
        userArray
      );
      // find the appropriate user, if found return else throw error that user not registered
      if (
        userArray &&
        userArray.filter((usr) => usr.email === user.email).length > 0
        ) {
        console.log("🚀 ~ file: Login.tsx:36 ~ handleSubmit ~ userArray:", userArray)
        // We found our user, so find its index
        const userIndex = userArray.findIndex(
          (usr) => usr.email === user.email
        );
        // Check if password correct
        if (userArray[userIndex].password !== user.password) {
          // check password, if not throw error
          setErrorMsg("Password is wrong");
        } else {
          // Set loggedIn propetry to true for the specific user
          userArray[userIndex].loggedIn = true;
          // Save modified user array to localstorage
          localStorage.setItem("users", JSON.stringify(userArray));
          updateUser("loggedIn", true);
          navigate("/home");
        }
      } else {
        setError(true)
        setErrorMsg("User is not registered");
        console.log("User is not registered");
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
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

export default Login;
