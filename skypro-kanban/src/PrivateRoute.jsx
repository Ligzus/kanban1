import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ token }) {
    console.log(token);
    return token? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute;