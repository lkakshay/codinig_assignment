import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const ReqAuth = ({children}) => {

const data=useSelector(state=>state.authStatus)

if(!data){
    return<Navigate  to={"/login"} replace/>
}
else{
    return children
}   
  
};

export default ReqAuth;