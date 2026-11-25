
import { Navigate, Outlet } from "react-router-dom";
import { token, userInfo } from "../Services/Tokeservices";
import App from "../App";

function RoleProtectedRoute({ allowedRoles }: any) {



    // Check login
    if (!token) {
        return <App></App>
    }
    if (!allowedRoles.includes(JSON.parse(userInfo).Role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
}

export default RoleProtectedRoute;
