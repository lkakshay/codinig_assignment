import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/action";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});

  const handleLogin = () => {
    dispatch(login(loginData))
      .then((res) => {
        if (res) {
          setLoginData({});
          window.alert("login successfull");
          navigate("/");
        } else window.alert("incorrect credentials");
      })
      .catch((e) => {
        window.alert("something went wrong");
      });
  };
  return (
    <Container disableGutters maxWidth="xs">
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            mt: 1,
            fontWeight: "600",
            color: "#191919",
          }}
          variant="h5"
          component="h1"
        >
          Log in
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            New user?
          </Typography>

          <Typography
            onClick={() => {
              navigate("/register");
            }}
            variant="h6"
            sx={{ mt: 2, ml: 1, mb: 5, color: "#3B44F6" }}
          >
           Register
          </Typography>
        </Box>
        <Grid
          sx={{
            display: "grid",
            gap: 3,
          }}
        >
          <TextField
            label="Email"
            type="email"
            autoComplete="current-email"
            fullWidth
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="Password"
            autoComplete="current-password"
            fullWidth
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </Grid>

        <Button
          sx={{ mt: 3, mb: 3, backgroundColor: "#191919" }}
          variant="contained"
          fullWidth
          size="large"
          onClick={handleLogin}
        >
          sign in
        </Button>
      </Box>
    </Container>
  );
};
