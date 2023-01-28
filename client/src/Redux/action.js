import * as types from "./actionType";
import axios from "axios";

export const register = (data) => (dispatch) => {
   dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post(
      "http://localhost:8080/api/register",data
    )
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS});
      return true
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILURE });
      return false
    });
};

export const login = (data) => (dispatch) => {
  console.log('data',data);
  dispatch({ type: types.LOGIN_REQUEST });
 return axios
   .post(
     "http://localhost:8080/api/login",data
   )
   .then((res) => {
    console.log('res',res);
     dispatch({ type: types.LOGIN_SUCCESS });
     return true
   })
   .catch((e) => {
    console.log('e',e);
     dispatch({ type: types.LOGIN_FAILURE });
     return false
   });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });
 return axios
   .get(
     "http://localhost:8080/api/user/all"
   )
   .then((res) => {
     dispatch({ type: types.GET_USERS_SUCCESS,payload:res.data});
     return true
   })
   .catch((e) => {
     dispatch({ type: types.GET_USERS_FAILURE });
     return false
   });
};
export const updateUser = ({data,id}) => (dispatch) => {
  dispatch({ type: types.UPDATE_USERS_REQUEST });
 return axios
   .patch(
     "http://localhost:8080/api/user/edit/"+id,data
   )
   .then((res) => {
     dispatch({ type: types.UPDATE_USERS_SUCCESS});
     dispatch(getUsers())
     return true
   })
   .catch((e) => {
     dispatch({ type: types.UPDATE_USERS_FAILURE });
     return false
   });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_USERS_REQUEST });
 return axios
   .delete(
     "http://localhost:8080/api/user/delete/"+id,
   )
   .then((res) => {
     dispatch({ type: types.DELETE_USERS_SUCCESS});
     dispatch(getUsers())
     return true
   })
   .catch((e) => {
     dispatch({ type: types.DELETE_USERS_FAILURE });
     return false
   });
};
