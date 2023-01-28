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
import { register } from "../Redux/action";

export const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [signUpData, setSingnUpData] = useState({});

  const handleSignUp = () => {
    dispatch(register(signUpData))
      .then((res) => {
        if (res) {
          setSingnUpData({});
          window.alert("registration successfull");
          navigate('/login')
        } else window.alert("fill the form correctly");
      })
      .catch((e) => {
        console.log("e", e);
        window.alert("fill the form correctly");
      });
  };
  return (
    <Container disableGutters maxWidth="xs">
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{
            mt: 1,
            fontWeight: "600",
            color: "#191919",
          }}
          variant="h5"
          component="h1"
        >
          REGISTER
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Already registered?
          </Typography>

          <Typography
            onClick={() => {
              navigate("/login");
            }}
            variant="h6"
            sx={{ mt: 2, ml: 1, mb: 5, color: "#3B44F6" }}
          >
            Log in
          </Typography>
        </Box>
        <Grid
          sx={{
            display: "grid",
            gap: 3,
          }}
        >
          <TextField
            label="Name"
            type="text"
            fullWidth
            onChange={(e) =>
              setSingnUpData({ ...signUpData, name: e.target.value })
            }
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            onChange={(e) =>
              setSingnUpData({ ...signUpData, email: e.target.value })
            }
          />

          <TextField
            label="Phone"
            type="number"
            fullWidth
            onChange={(e) =>
              setSingnUpData({ ...signUpData, phone: e.target.value })
            }
          />
          <TextField
            label="Profession"
            type="text"
            fullWidth
            onChange={(e) =>
              setSingnUpData({ ...signUpData, profession: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            onChange={(e) =>
              setSingnUpData({
                ...signUpData,
                password: e.target.value,
              })
            }
          />
        </Grid>

        <Button
          onClick={handleSignUp}
          sx={{ mt: 3, mb: 3, backgroundColor: "#191919" }}
          variant="contained"
          fullWidth
          size="large"
        >
          sign up
        </Button>
      </Box>
    </Container>
  );
};
