import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
import axios from "axios";
  import { useEffect, useState } from "react";
  import { useDispatch } from "react-redux";
  import { useNavigate, useParams } from "react-router-dom";
  import {  updateUser } from "../Redux/action";
  
  export const Edit = () => {

    const {id}=useParams()
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
    const [data, setData] = useState({});
  
    const handleUpdate = () => {
      dispatch(updateUser({data,id}))
        .then((res) => {
          if (res) {
            navigate('/')
            
          } else window.alert("something went wrong");
        })
        .catch((e) => {
          console.log("e", e);
          window.alert("something went wrong");
        });
    };

    useEffect(()=>{

        axios
   .get(
     "http://localhost:8080/api/user/single/"+id
   )
   .then((res) => {
   setData({...data,name:res.data.name,phone:res.data.phone})
    
   })
   .catch((e) => {
    console.log('e',e);
    
   });

    },[id])
    return (
      <Container disableGutters maxWidth="xs">
        <Box sx={{ my: 4 }}>
          <Typography
            sx={{
              m: 2,
              fontWeight: "600",
              color: "#191919",
            }}
            variant="h5"
            component="h1"
          >
            EDIT
          </Typography>
          
          <Grid
            sx={{
              display: "grid",
              gap: 3,
            }}
          >
            <TextField
            helperText='Name'
              value={data?.name}
              type="text"
              fullWidth
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
            <TextField
              value={data?.phone}
              type="number"
              helperText='Phone'
              fullWidth
              onChange={(e) =>
                setData({ ...data, phone: e.target.value })
              }
            />
          </Grid>
  
          <Button
            onClick={handleUpdate}
            sx={{ mt: 3, mb: 3, backgroundColor: "#191919" }}
            variant="contained"
            fullWidth
            size="large"
          >
            update
          </Button>
        </Box>
      </Container>
    );
  };
  