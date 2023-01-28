import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../Redux/action";
import { useSelector } from "react-redux";
import {
  Container,
  Box,
  ListItem,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../Redux/action";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()


  const data = useSelector((state) => state.usersList);



  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Container>
      <Box sx={{ m: 6 }}>
        <Typography
          sx={{
            mt: 1,
            fontWeight: "600",
            color: "#191919",
          }}
          variant="h5"
          component="h1"
        >
          USERS LIST
        </Typography>

        <Button onClick={()=>dispatch({type:'LOGOUT'})} >logout</Button>
      </Box>

      <Box sx={{ display: "grid", justifyContent: "center" }}>
      {  data?.map((e)=>(
        <div>
            <div key={e._id} ><pre>{JSON.stringify(e,null,2)}</pre></div>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button  onClick={()=>navigate('/edit/'+e._id)}>edit</Button>
              <Button onClick={()=>dispatch(deleteUser(e._id))}>delete</Button>
            </ListItem>
        </div>
      ))}
        
      </Box>
    </Container>
  );
};
