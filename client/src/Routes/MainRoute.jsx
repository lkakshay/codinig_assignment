import { Route, Routes } from "react-router-dom";
import { Edit } from "../Pages/Edit";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import ReqAuth from "./ReqAuth";

export const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/edit/:id"
        element={
          <ReqAuth>
            <Edit />
          </ReqAuth>
        }
      />
    </Routes>
  );
};
