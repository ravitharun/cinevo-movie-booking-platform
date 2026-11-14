
import { userInfo } from "./Tokeservices";

export const logout = (navigate: any) => {


    // Get role before removing user information
    const role = JSON.parse(userInfo)?.Role

    // // Clear authentication data
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect based on role
    if (role === "Admin") {
        navigate("/admin/login", { replace: true });
    } else {
        alert("tes")
        navigate("/user/login", { replace: true });
    }
};
